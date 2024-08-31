import React from 'react'
import CheckIcon from '@/public/icon/check.svg'

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
        <span
          className={`w-[1.5rem] h-[1.5rem] flex items-center justify-center border-[0.1rem] rounded border-GREEN_800 ${
            checked ? 'bg-GREEN_800' : 'bg-WHITE_1000'
          }`}
        >
          {checked && <CheckIcon />}
        </span>
        <span className="ml-2">{label}</span>
      </label>
    </div>
  )
}

export default Checkbox
