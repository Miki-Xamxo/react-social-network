import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer' 


let store = {
  _state: {
  profilePage : {
      postsData: [
        { id: 1, message: 'Hi,how are you?', likesCount: 12},
        { id: 2, message: "It's my first post", likesCount: 11},
      ],
      newPostText: 'it'
  },

  dialogsPage: {
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
      newMessageText: 'it'
  }
  },
  _callSubscriber() {
    console.log('Hi')
  },
  
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  addPost(){
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    }
    this._state.profilePage.postsData.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },

  updateNewPostText(newText){
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },
  
  addDialogsData() {
    let newDialogsData = {
      id: 5,
      name: 'Саня',
    }
    this._state.dialogsPage.dialogsData.push(newDialogsData)
    this._callSubscriber(this._state)
  },

  addMessagesData() {
    let newMessagesData = {
      id: 5,
      message: this._state.dialogsPage.newMessageText
    }
    this._state.dialogsPage.messagesData.push(newMessagesData)
    this._state.dialogsPage.newMessageText = ''
    this._callSubscriber(this._state)
  },

  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText
    this._callSubscriber(this._state)
  },
  
  dispatch(action){

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    
    this._callSubscriber(this._state)
  } 
}


export default store