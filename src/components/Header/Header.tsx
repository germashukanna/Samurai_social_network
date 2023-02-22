import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/Hooks";
import {logOutTC} from "../../redux/auth-reducer";
import imageLogo from './../../assets/images/Logo.jpg'
import Navbar from "../Navbar/Navbar";
import {CustomButton} from "../../common/Button/Button";
import {selectCurrentUserLogin, selectIsAuth} from "../../redux/auth-selectors";
import {styled} from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import {Avatar} from '@mui/material';
import userPhoto from "../../assets/images/26-bpfull.jpg";

const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const Header = React.memo(() => {

    const isAuth = useAppSelector(selectIsAuth)
    const login = useAppSelector(selectCurrentUserLogin)
    const profilePhoto = useAppSelector(state => state.profilePage.profile?.photos?.large)

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
            {isAuth

                ? <div className={s.loginBlockAvatar}>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                        variant="dot"
                        sx={{mr: '25px'}}
                    >
                        <Avatar title={login || ''} alt="Anna Hermashuk" src={profilePhoto || userPhoto}
                                sx={{width: 56, height: 56}}/>
                    </StyledBadge>
                    <CustomButton children={'Log out'} onClick={onClickLogoutButton}/></div>
                : <NavLink to="/login" className={s.NavLink}>Login</NavLink>}
        </div>
    </header>
})

export default Header