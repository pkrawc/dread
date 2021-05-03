import { ChangeEvent, useState } from "react"
import { wrapEvent, noop } from "@dread/utils"

export function useInput({
  type = "text",
  label,
  onChange = noop,
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

export function useCheckbox({
  label,
  ref,
  error,
  defaultChecked,
  checked,
  onChange = noop,
  ...props
}: any) {
  const [isChecked, setChecked] = useState(!!checked || !!defaultChecked)
  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    setChecked(evt.target.checked)
  }
  return {
    label: { children: label, role: "label", id: "label-id" },
    input: {
      ...props,
      ref,
      hidden: true,
      type: "checkbox",
      as: "input",
      checked: isChecked,
      onChange: wrapEvent(onChange, handleChange),
    },
    error: { children: error, role: "alert" },
  }
}
