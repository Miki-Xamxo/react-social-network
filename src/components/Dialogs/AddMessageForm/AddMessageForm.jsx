import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreater, required } from '../../../utils/validators/validator'
import { Textarea } from '../../common/FormsControls/FormsControl'




const maxLength50 = maxLengthCreater(50)

const AddMessageForm = (props) => {
  return  <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea} validate={[required, maxLength50]} name='newMessageBody'/>
        </div>
        <div>
          <button>Add Message</button>
        </div>
  </form>
}

export default reduxForm({
  form: 'dialogAddMessageForm'
})(AddMessageForm)
