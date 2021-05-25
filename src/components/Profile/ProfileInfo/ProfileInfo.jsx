import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
  if(!props.profile){
    return(
      <Preloader />
    )
  }
  return (
      <div>
        {/* <div>
          <img className={s.img} src='https://inn.spb.ru/images/100/DSC100177147.jpg'/>
        </div> */}
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large} alt=""/>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
      </div>
  )
}

export default ProfileInfo