import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreater, required } from '../../../utils/validators/validator'
import { Textarea } from '../../common/FormsControls/FormsControl'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const maxLength10 = maxLengthCreater(10)

const MyPosts = (props) => {

  console.log('render')
  
  let postElements = props.postsData
    .map(item => <Post message={item.message} likesCount={item.likesCount}/>)

    const addNewPost = (values) => {
      props.addPost(values.newPostText)
    }

  return (
        <div className={s.postsBlock}>
          <h3>My posts</h3>
          <AddPostForm onSubmit={addNewPost}/>
          <div className={s.posts}>
            {postElements}
          </div>
        </div>
  )
}

let AddPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name='newPostText' validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
  </form>
}

AddPostForm = reduxForm({
  form: 'profileAddPostForm'
})(AddPostForm)

export default MyPosts;