import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/Profile-reducer";
import ProfileStatus from "./ProfilIStatus";

type ProfileInfo = {
    profile: null | ProfileType
}

const ProfileInfo: React.FC<ProfileInfo> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div><img src='https://bipbap.ru/wp-content/uploads/2017/08/1375998858_1953444020.jpg' alt={''}/>*/}

            {/*  </div>*/}
            <div className={s.descriptionBlock}>

                <img src={props.profile.photos.large}/>
                <ProfileStatus status={"hi"}/>
            </div>
        </div>
    )
}
export default ProfileInfo