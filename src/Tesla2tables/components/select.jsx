import React from 'react'

export default function Select({ label, value, onChange, options }) {
  return (
    <div className="select-container">
      <label htmlFor={label}>{label}</label>
      <select name={label} id={label} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  ) // value={option}!
}
