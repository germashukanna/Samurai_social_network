import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType, savePhoto} from "../../../redux/Profile-reducer";
import {ProfilIStatusWithHook} from "./ProfilIStatusWithHooks";
import userPhoto from "../../../assets/images/userFhoto.jpg";
import {useAppDispatch} from "../../../redux/Hooks";

type ProfileInfo = {
    profile: null | ProfileType
    status: string
    updateStatusTC: (status: string) => void
    isOwner: boolean
    savePhoto: any
}

const ProfileInfo: React.FC<ProfileInfo> = React.memo((props) => {
    const dispatch = useAppDispatch()
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            dispatch(savePhoto(e.target.files[0]))
        }
    }

    return (
        <div>
            {/*<div><img src='https://bipbap.ru/wp-content/uploads/2017/08/1375998858_1953444020.jpg' alt={''}/>*/}

            {/*  </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {props.isOwner && <input type={'file'}  onChange={onMainPhotoSelected}/>}
                <ProfilIStatusWithHook status={props.status} updateStatusTC={props.updateStatusTC}/>
            </div>
        </div>
    )
})
export default ProfileInfo