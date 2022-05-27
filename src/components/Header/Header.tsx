import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";


const Header: React.FC<HeaderPropsType> = (props) => {
  return <header className={s.header}>
      <img src='https://www.designevo.com/res/templates/thumb_small/cute-monkey-and-interesting-gaming.webp?v=1.0.0.2'/>
      <div className={s.loginBlock}>
          {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
      </div>
  </header>
}

export default Header