import React from 'react'

export function Message (props) {
  const { message, onClick, type } = props

  return message ? <div
    onClick={onClick}
    className={`alert alert-${type || 'danger'}`}
    role="alert">{message} <span className="float-right">x</span></div> : null
}
