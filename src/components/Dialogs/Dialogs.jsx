import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import AddMessageForm from './AddMessageForm/AddMessageForm'

const Dialogs = (props) => {

  let state = props.dialogsPage

  let dialogsElements = state.dialogsData
    .map(item => <DialogItem name={item.name} id={item.id}/>)
  
  let messagesElements = state.messagesData
    .map(item => <Message message={item.message}/>)

    const addNewMessage = (values) => {
      props.addMessage(values.newMessageBody)
    }

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          {messagesElements}
        </div>
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  )
}
export default Dialogs;