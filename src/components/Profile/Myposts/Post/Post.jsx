import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://million-wallpapers.ru/wallpapers/1/85/14539408766273575799/parizh-beautiful-france-paris-sunset-ejfeleva-bashnya-gorod.jpg'/>
      {props.message}
      <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;