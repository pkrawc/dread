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

export function isScrollable(node: HTMLElement) {
  const regex = /(auto|scroll)/
  const style = getComputedStyle(node, null)
  if (style.position === "relative") return true
  return regex.test(style.overflow + style.overflowY)
}

export function closestScrollable(element: HTMLElement) {
  let parent = element
  while (parent?.parentElement) {
    parent = parent.parentElement
    if (isScrollable(parent)) return parent
  }
  return typeof document === "undefined" ? null : document.body
}

export function getFocusable(element: HTMLElement) {
  const query = `
    a[href],
    button:not([disabled]),
    input:not([type="hidden"]):not([disabled]),
    textarea:not([disabled]),
    select:not([disabled]),
    details,
    [tabindex]:not([tabindex="-1"])
  `
  return element.querySelectorAll(query)
}
