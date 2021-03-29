import { ChangeEvent, useState } from "react"
import { wrapEvent } from "@dread/utils"

export function useInput({
  type = "text",
  label,
  onChange,
  error = null,
  value,
  help,
  defaultValue,
  ...props
}: any) {
  const isDate = type === "date"
  const [raised, setRaised] = useState(!!value || !!defaultValue || isDate)
  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setRaised(!!target.value.length || isDate)
  }
  return {
    raised,
    label,
    inputProps: {
      ...props,
      type,
      value,
      onChange: wrapEvent(onChange, handleChange),
    },
    error,
    errorProps: {
      hidden: !error,
      role: "alert",
    },
    help,
    helpProps: {
      hidden: error,
    },
  }
}

export function useCheckbox({ ref, checked, label, onChange, ...props }: any) {
  const [isChecked, setChecked] = useState(checked)
  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setChecked(target.checked)
  }
  return {
    checked: isChecked,
    wrapperProps: { ref, tabIndex: 0 },
    inputProps: {
      checked,
      onChange: wrapEvent(onChange, handleChange),
      ...props,
    },
    label,
  }
}
