import style from './styles.module.scss'
import classNames from 'classnames'
import { useParams } from 'react-router'
import { useEffect, useRef, useState } from 'react'
import { DoubleArrowIcon } from 'shared/icons'
import { Button, Flex } from 'antd'
import IconWrapper from 'shared/ui/icon-wrapper'
import { useTranslation } from 'react-i18next'

interface ImageScrollerProps {
  images: any
}

function ImageScroller({ images }: ImageScrollerProps) {
  const [isVisible, setIsVisible] = useState(false)

  const { t } = useTranslation()
  const id = useParams().subId!
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  useEffect(() => {
    const container = containerRef.current!

    // Drag Scroll Start
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true
      startX.current = e.pageX - container.offsetLeft
      scrollLeft.current = container.scrollLeft
      container.style.cursor = 'grabbing'
    }

    // Drag Scroll Move
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      e.preventDefault()
      const x = e.pageX - container.offsetLeft
      const walk = (x - startX.current) * 1.5 // Adjust drag sensitivity
      container.scrollLeft = scrollLeft.current - walk
    }

    // Drag Scroll End
    const stopDragging = () => {
      isDragging.current = false
      container.style.cursor = 'grab'
    }

    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseup', stopDragging)
    container.addEventListener('mouseleave', stopDragging)

    return () => {
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseup', stopDragging)
      container.removeEventListener('mouseleave', stopDragging)
    }
  }, [])

  return (
    <div className={classNames(style['scroller-container'], { [style.off]: !isVisible })}>
      <Button
        type="link"
        className={classNames('scroller-toggler', { visible: isVisible })}
        onClick={() => setIsVisible(!isVisible)}
      >
        <IconWrapper>
          <DoubleArrowIcon />
        </IconWrapper>
      </Button>

      <div className="image-scroller" ref={containerRef}>
        <Flex gap="middle">
          {images.map((img: any) => (
            <div className={classNames('scroller-item', { active: parseInt(id) === img.id })} key={img.id}>
              <img src={img.src} alt={img.id} />
            </div>
          ))}
        </Flex>
      </div>
    </div>
  )
}

export default ImageScroller
