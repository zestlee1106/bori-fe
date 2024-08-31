import React from 'react'
import EmptyCheckbox from '@/public/icon/checkbox-empty.svg'
import CheckedCheckbox from '@/public/icon/checkbox-checked.svg'

interface CheckboxProps {
  id?: string
  label?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
}

const Checkbox = ({ id, label, checked, onChange }: CheckboxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked)
  }

  return (
    <div className="flex items-center">
      <input id={id} type="checkbox" checked={checked} onChange={handleChange} className="hidden" />
      <label htmlFor={id} className="flex items-center cursor-pointer">
        {checked ? <CheckedCheckbox /> : <EmptyCheckbox />}
        <span className="ml-2">{label}</span>
      </label>
    </div>
  )
}

export default Checkbox
