import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";
import {useAppDispatch} from "../../redux/Hooks";
import {logOutTC} from "../../redux/auth-reducer";
import Button from "@mui/material/Button/Button";


const Header: React.FC<HeaderPropsType> = React.memo((props) => {
    const dispatch = useAppDispatch()

    const onClickLogoutButton = () => {
        dispatch(logOutTC())
    }

    return <header className={s.header}>
        <img
            src='https://www.designevo.com/res/templates/thumb_small/cute-monkey-and-interesting-gaming.webp?v=1.0.0.2'/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <Button type={'submit'} variant={'contained'} color={'secondary'} size={'small'} onClick={onClickLogoutButton}>Log out</Button></div>
                : <NavLink to="/login">Login</NavLink>}
        </div>
    </header>
})

export default Header