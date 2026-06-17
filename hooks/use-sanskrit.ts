import * as React from "react"

export function useHoverFlip(duration = 1000) {
  const [isSanskrit, setIsSanskrit] = React.useState(false)
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const onMouseEnter = React.useCallback(() => {
    setIsSanskrit(true)
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      setIsSanskrit(false)
    }, duration)
  }, [duration])

  const onMouseLeave = React.useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    setIsSanskrit(false)
  }, [])

  React.useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  return {
    isSanskrit,
    hoverProps: {
      onMouseEnter,
      onMouseLeave,
    }
  }
}
