import React, { useState } from 'react'
import './ToggleSwitcher.scss'

const ToggleSwitcher = ({name, labels}) => {
  const [isChecked, setIsChecked] = useState(true)

  const onCkeckedChange = () => {
    console.log(!isChecked)
    setIsChecked(!isChecked)
  }

  return (
    <div className={"toggle"}>
      <input
        onChange={onCkeckedChange}
        type="checkbox"
        id={name}
        checked={isChecked}
      />
      <label htmlFor={name}>
        <div className={`toggleLabel ${isChecked && 'active'}`}> {labels[0]}</div>
        <div className={`toggleLabel ${!isChecked && 'active'}`}> {labels[1]}</div>
        <div className="toggler" />
      </label>
    </div>
  )
}

export default ToggleSwitcher
