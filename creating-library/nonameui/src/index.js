import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  const capitalizeFirstLetter = (str) => {
   return str.charAt(0).toUpperCase() + str.substr(1)
  }
  
  return (
    <button className={props.type ? styles[props.type] : styles.default}>
      {props.children
        ? props.children
        : props.type
        ? `${capitalizeFirstLetter(props.type)} Button`
        : 'Default Button'}
    </button>
  )
}
