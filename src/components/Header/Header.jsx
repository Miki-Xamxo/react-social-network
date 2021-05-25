import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {

  return (
    <header className={s.header}>
        <img src='https://www.pvsm.ru/images/2018/11/06/kak-razvernut-okrujenie-dlya-razrabotki-prilojenii-na-React-Native.png'/>
        <div className={s.loginBlock}>
          {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> 
            : <NavLink to={'/login'}>Login</NavLink>
          }    
        </div>
      </header>
  )
}

export default Header;
