import React from 'react'
import {Button} from 'reactstrap'
export default function DefaultButton(props) {
  let text=props.text
  let isLarge=props.isLarge
  let onClick=props.onClick

  return (
    <Button className={isLarge? "login-btn col-12":"login-btn col-6"} onClick={onClick}>
            {text}
    </Button>
  )
}