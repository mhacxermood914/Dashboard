import React from 'react'

const Button = ({bgColor, color, size, text, borderRadius}) => {
  return (
    <button style={{
        backgroundColor: bgColor, color, borderRadius
    }} type='button' className={`text-${size} p-3 hover:drop-shadow-xl`}>Button</button>
  )
}

export default Button