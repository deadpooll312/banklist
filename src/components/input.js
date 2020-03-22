import React from 'react'

export function Input (props) {
  return <div className="form-group">
    <label htmlFor={props.label}>{props.label}</label>
    <input
      type={props.type || 'text'}
      className="form-control"
      onChange={e => props.onChange(e, props.name)}
      name={props.name}
      required={props.required}
      placeholder={props.placeholder}/>
  </div>
}
