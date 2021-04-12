import { EventHandler } from "react"

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
