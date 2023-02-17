import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";
import {useAppDispatch} from "../../redux/Hooks";
import {logOutTC} from "../../redux/auth-reducer";
import Button from "@mui/material/Button/Button";
import imageLogo from './../../assets/images/Logo.jpg'
import Navbar from "../Navbar/Navbar";
import {CustomButton} from "../../common/Button/Button";


const Header: React.FC<HeaderPropsType> = React.memo((props) => {
    const dispatch = useAppDispatch()

    const onClickLogoutButton = () => {
        dispatch(logOutTC())
    }

    return <header className={s.header}>
        <div className={s.headerNavbar}>
            <img src={imageLogo}/>
            <Navbar/>
        </div>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <CustomButton children={'Log out'} onClick={onClickLogoutButton}/></div>
                : <NavLink to="/login" className={s.NavLink}>Login</NavLink>}
        </div>
    </header>
})

export default Header