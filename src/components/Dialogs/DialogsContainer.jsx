import React from 'react'
import { connect } from 'react-redux'
import {addDialogsDataActionCreater, addMessagesDataActionCreater} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { withRedirect } from '../hoc/withAuthRedirect'
import { compose } from 'redux'


// const DialogsContainer = () => {

//   return <StoreContext.Consumer>
//       {
//         (store) => {
//           let state = store.getState()

//           let addMessage = () => {
//             store.dispatch(addDialogsDataActionCreater())
//             store.dispatch(addMessagesDataActionCreater())
//           }
          
//           let messageChange = (text) => {
//             store.dispatch(updateNewMessageTextActionCreater(text))
//           }

//           return (
//               <Dialogs addMessage={addMessage} messageChange={messageChange} 
//                   dialogsPage={state.dialogsPage}   />
//           )
//         }
//       }
//     </StoreContext.Consumer>              
// }



let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageBody) => {
            dispatch(addDialogsDataActionCreater())
            dispatch(addMessagesDataActionCreater(newMessageBody))
    },
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirect,
)(Dialogs)