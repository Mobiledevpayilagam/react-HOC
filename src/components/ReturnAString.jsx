import React from 'react'

function ReturnAString(props) {
    const {stringFromProps} = props
  return (
    <div>{stringFromProps}</div>
  )
}

export default ReturnAString