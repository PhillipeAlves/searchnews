import { useRef, useCallback, useState } from 'react'

const useScrollDirection = (props?: { target: any }) => {
  const [isActive, setIsActive] = useState(false)
  const [direction, setDirection] = useState('')
  const scrollOffset = useRef(0)
  const { target } = props || {}

  const handleScroll = useCallback(
    (event: any) => {
      const currentOffset = event.nativeEvent.contentOffset.y
      const lastOffset = scrollOffset.current
      const dir = currentOffset > 0 && currentOffset > lastOffset ? 'down' : 'up'

      if (dir !== direction) {
        setDirection(dir)
      }

      if (!Number.isNaN(parseFloat(target))) {
        const active = currentOffset > target
        if (isActive !== active) {
          setIsActive(active)
        }
      }

      scrollOffset.current = currentOffset
    },
    [isActive, direction, target]
  )

  return {
    handleScroll,
    direction,
    offset: scrollOffset,
    isActive
  }
}

export default useScrollDirection
