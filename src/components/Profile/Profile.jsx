import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './Myposts/MyPostsContainer'


const Profile = (props) => {

  return (
      <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer />
      </div>
  )
}

export default Profile;