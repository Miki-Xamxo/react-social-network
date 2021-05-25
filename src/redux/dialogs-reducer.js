const ADD_MESSAGE_DATA = 'ADD-MESSAGE-DATA'
const ADD_DIALOGS_DATA =  'ADD-DIALOGS-DATA'

let initialState = {
  dialogsData: [
    { id: 1, name: 'Miki'},
    { id: 2, name: 'Adam'},
    { id: 3, name: 'Ilez'},
    { id: 4, name: 'Islam'},
  ],
  messagesData: [
    { id: 1, message: 'Hi'},
    { id: 2, message: 'How are you?'},
    { id: 3, message: 'Whate?'},
    { id: 4, message: 'Where do you study?'},
  ],
}  

const dialogsReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_DIALOGS_DATA:
      let newDialogsData = {
        id: 5,
        name: 'Саня',
      }
      return{
        ...state,
        dialogsData: [...state.dialogsData, newDialogsData]
      }
    case ADD_MESSAGE_DATA:
      let newMessagesData = {
        id: 5,
        message: action.newMessageBody
      }
      return {
        ...state,
        messagesData: [...state.messagesData, newMessagesData],
      }
    default:
      return state 
  }
}

export const addDialogsDataActionCreater = () => ({
  type: ADD_DIALOGS_DATA
})

export const addMessagesDataActionCreater = (newMessageBody) => ({
  type: ADD_MESSAGE_DATA,
  newMessageBody
})


export default dialogsReducer