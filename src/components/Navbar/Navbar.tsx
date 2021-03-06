import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {SidebarType} from "../../redux/store";
import {SidebarFr} from "./SadebarItem/SidebarFr";


type NavbarPropsType = {
    state: SidebarType,
}

const Navbar: React.FC<NavbarPropsType> = (props) => {
  return (
    <nav className={s.nav}>
      <div><NavLink to="/profile/" className={(navData) => navData.isActive ? s.active:s.item}>Profile</NavLink></div>
      <div><NavLink to="/dialogs/" className={(navData) => navData.isActive ? s.active:s.item}>Messages</NavLink></div>
      <div><NavLink to="/new" className={(navData) => navData.isActive ? s.active:s.item}>New</NavLink></div>
      <div><NavLink to="/music" className={(navData) => navData.isActive ? s.active:s.item}>Music</NavLink></div>
      <div><NavLink to="/settings" className={(navData) => navData.isActive ? s.active:s.item}>Settings</NavLink></div>
      <div><NavLink to="/users/" className={(navData) => navData.isActive ? s.active:s.item}>Users</NavLink></div>
      {/*<div><NavLink to="/sidebar" className={(navData) => navData.isActive ? s.active:s.item}>Friends</NavLink></div>*/}
      {/*<SidebarFr sidebarFr={props.state.friends}/>*/}



    </nav>
  )
}

export default Navbar