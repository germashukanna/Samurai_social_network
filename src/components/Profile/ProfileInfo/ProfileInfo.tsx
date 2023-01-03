import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/Profile-reducer";
import {ProfilIStatusWithHook} from "./ProfilIStatusWithHooks";

type ProfileInfo = {
    profile: null | ProfileType
    status: string
    updateStatusTC: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfo> = React.memo((props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div><img src='https://bipbap.ru/wp-content/uploads/2017/08/1375998858_1953444020.jpg' alt={''}/>*/}

            {/*  </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfilIStatusWithHook status={props.status} updateStatusTC={props.updateStatusTC}/>
            </div>
        </div>
    )
})
export default ProfileInfo