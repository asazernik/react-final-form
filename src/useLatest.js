// @flow
import React from 'react'

export default function useLatest<T>(value: T, deps: any[]): { +current: T } {
  const ref = React.useRef(value)

  React.useEffect(() => {
    ref.current = value
  }, deps)

  return ref
}
