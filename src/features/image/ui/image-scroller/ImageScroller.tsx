import style from './styles.module.scss'
import classNames from 'classnames'
import { useParams } from 'react-router'
import { useCallback, useEffect, useRef } from 'react'
import { Flex } from 'antd'

interface ImageScrollerProps {
  images: any
}

function ImageScroller({ images }: ImageScrollerProps) {
  const id = parseInt(useParams().subId!)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const currentTranslateX = useRef(0)
  const isDragging = useRef(false)

  const canScroll = useCallback((direction: number) => {
    if (!containerRef.current) return false
    const { left, right, width } = containerRef.current.getBoundingClientRect()
    return direction < 0 ? right > window.innerWidth : left < 0
  }, [])

  // Apply translateX directly for performance
  const applyTranslateX = useCallback((deltaX: number) => {
    if (!containerRef.current) return
    currentTranslateX.current += deltaX
    containerRef.current.style.transform = `translateX(${currentTranslateX.current}px)`
  }, [])

  // Optimized wheel handler
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault()
      const direction = e.deltaY > 0 ? -50 : 50
      if (canScroll(direction)) applyTranslateX(direction)
    },
    [canScroll, applyTranslateX],
  )

  // Touch start tracking
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  // Optimized touch move
  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      const deltaX = e.touches[0].clientX - touchStartX.current
      if (canScroll(deltaX)) applyTranslateX(deltaX)
      touchStartX.current = e.touches[0].clientX
    },
    [canScroll, applyTranslateX],
  )

  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault() // Prevent default behavior (e.g., text selection)
    isDragging.current = true
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return
    const deltaX = e.movementX // Get the horizontal movement
    if (canScroll(deltaX)) applyTranslateX(deltaX)
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchmove', handleTouchMove, { passive: false })

    // Mouse drag event listeners
    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('mouseleave', handleMouseUp) // Stop drag if mouse leaves container

    return () => {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)

      // Clean up mouse drag listeners
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseup', handleMouseUp)
      container.removeEventListener('mouseleave', handleMouseUp)
    }
  }, [handleWheel, handleTouchStart, handleTouchMove, handleMouseDown, handleMouseMove, handleMouseUp])

  return (
    <div className={style['image-scroller']} ref={containerRef}>
      <Flex gap="middle">
        {images.map((img) => (
          <div className={classNames('scroller-item', { active: id === img.id })} key={img.id}>
            <img src={img.src} alt={img.id} />
          </div>
        ))}
      </Flex>
    </div>
  )
}

export default ImageScroller
