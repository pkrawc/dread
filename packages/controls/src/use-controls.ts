import { EventHandler, useState } from "react"

export function wrapEvent(
  original: EventHandler<any>,
  additional: EventHandler<any>
) {
  return (event: Event) => {
    original?.(event)
    if (!event.defaultPrevented) return additional(event)
  }
}

export function useInput({
  type = "text",
  label,
  onChange,
  error = null,
  ...props
}: any) {
  const [value, setValue] = useState("")
  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement
    setValue(target.value)
  }
  return {
    raised: false,
    label,
    inputProps: {
      ...props,
      as: "input",
      type,
      value,
      onChange: wrapEvent(onChange, handleChange),
    },
    error,
    errorProps: {
      role: "alert",
    },
  }
}
