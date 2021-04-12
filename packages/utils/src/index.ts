import { EventHandler, Ref, RefObject } from "react"

export function wrapEvent(
  original: EventHandler<any>,
  additional: EventHandler<any>
) {
  return (event: Event) => {
    original?.(event)
    if (!event.defaultPrevented) return additional(event)
  }
}

export function noop(): void {
  return
}

function assignRef(ref: any, value: any) {
  if (ref === null) return
  if (typeof ref === "function") {
    ref(value)
    return
  }
  try {
    ref.current = value
  } catch (error) {
    throw new Error(`Cannot assign ${value} to ${ref}`)
  }
}

export function mergeRefs(...refs: any) {
  return (value: any) => refs.forEach((ref: any) => assignRef(ref, value))
}
