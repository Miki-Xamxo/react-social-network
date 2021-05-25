import React from 'react'
import { connect } from 'react-redux'
import {addPostActionCreater} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

// const MyPostsContainer = () => {

//     return <StoreContext.Consumer>
//       {
//         (store) => {

//           let state = store.getState()

//           let addPost = () => {
//             store.dispatch(addPostActionCreater())
//           }

//           let postChange = (text) => {
//             store.dispatch(updateNewPostTextActionCreater(text))
//           }
//             return (
//               <MyPosts  addPost={addPost} 
//                         postChange={postChange} 
//                         postsData={state.profilePage.postsData} 
//                         newPostText={state.profilePage.newPostText}/>)
//         }
//       }
//     </StoreContext.Consumer>                
// }

let mapStateToProps = (state) => {
  return{
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  }
}

let mapDispatchToProps = (dispatch) => {
    return{
      addPost: (newPostText) => {
        dispatch(addPostActionCreater(newPostText))
      },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;