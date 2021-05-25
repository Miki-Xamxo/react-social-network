import React from 'react'
import s from './FormsControl.module.css'

const FormsControl = ({input, meta, ...props}) => {
  const hasError =  meta.touched && meta.error
  return <div className={`${s.formControl} ${hasError && s.error}`}>
    <div>
      {props.children}
    </div>
    {
      hasError && <span>{meta.error}</span>
    }
  </div>

}


export const Textarea = (props) => {
  const {input, meta, ...restProps} = props
  return <FormsControl {...props}><textarea {...input} {...restProps}/></FormsControl>
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props
  return <FormsControl {...props}><input {...input} {...restProps}/></FormsControl>
}