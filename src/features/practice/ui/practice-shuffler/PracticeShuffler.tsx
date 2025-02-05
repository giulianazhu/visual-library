import style from './styles.module.scss'
import { Button, Carousel, Flex, Progress, ProgressProps } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { CarouselRef } from 'antd/es/carousel'
import { commonThemeColors } from 'core/themes/common'
import { ExitIcon, LeftArrowIcon, PauseIcon, PlayIcon, RightArrowIcon } from 'shared/icons'
import { NavLink } from 'react-router'
import IconWrapper from 'shared/ui/icon-wrapper'
import routes from 'core/configs/routes'
import { PracticeStatus, RoutePath } from 'types/enums'
import { PracticeSettings } from 'features/practice/store/practice'
import { ApiPracticeImage } from 'types/api/practice'

const conicColors: ProgressProps['strokeColor'] = {
  '0%': commonThemeColors.primary,
  '100%': commonThemeColors.contrast,
}

interface PracticeShufflerProps {
  settings: PracticeSettings
  images: ApiPracticeImage[]
}

function PracticeShuffler({ settings, images }: PracticeShufflerProps) {
  const timer = settings.duration
  const [countdown, setCountdown] = useState(timer)
  const [isCountingDown, setIsCountingDown] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<CarouselRef>(null)

  const startTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setIsCountingDown(true)
    intervalRef.current = setInterval(() => {
      setCountdown((prev: PracticeSettings['duration']) => {
        if (prev === 0) {
          goToNext()
          return timer
        } else return prev - 1
      })
    }, 1000)
  }

  const goToNext = () => {
    if (carouselRef.current?.innerSlider.state.currentSlide === images.length - 1) {
      clearInterval(intervalRef.current as NodeJS.Timeout)
      return
    } else {
      carouselRef.current?.next()
      setCountdown(timer)
      startTimer()
    }
  }

  const goToPrev = () => {
    if (carouselRef.current?.innerSlider.state.currentSlide === 0) {
      return
    } else {
      carouselRef.current?.prev()
      setCountdown(timer)
      startTimer()
    }
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout)
    setIsCountingDown(false)
  }

  useEffect(() => {
    startTimer()
  }, [])

  return (
    <div className={style['practice-shuffler']}>
      <div className="carousel-container">
        <Flex flex="0 0 auto" className="timer">
          <Progress
            type="circle"
            percent={((timer - countdown) / timer) * 100}
            format={() => countdown}
            strokeColor={conicColors}
          />
        </Flex>
        <Carousel
          ref={carouselRef}
          arrows={false}
          infinite={false}
          dotPosition="top"
          beforeChange={() => {
            setCountdown(timer)
            startTimer()
          }}
        >
          {images.map((image, index) => [
            <div className="carousel-item image-container" key={`image-${index}`}>
              <img src={image.url} alt={`Slide ${index}`} />
            </div>,
          ])}
        </Carousel>
        <Flex justify="center" gap="small" className="controller">
          <NavLink
            to={routes.practiceStatus.url.replace(RoutePath.Status, PracticeStatus.Settings)}
            className="end-button"
          >
            <Button type="link">
              <IconWrapper>
                <ExitIcon />
                End Practice
              </IconWrapper>
            </Button>
          </NavLink>
          <Button shape="circle" onClick={() => goToPrev()}>
            <LeftArrowIcon />
          </Button>
          <Button shape="circle" onClick={() => (isCountingDown ? stopTimer() : startTimer())}>
            {isCountingDown ? <PauseIcon /> : <PlayIcon />}
          </Button>
          <Button shape="circle" onClick={() => goToNext()}>
            <RightArrowIcon />
          </Button>
        </Flex>
      </div>
    </div>
  )
}

export default PracticeShuffler
