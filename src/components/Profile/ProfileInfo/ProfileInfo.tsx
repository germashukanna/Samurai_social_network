import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType, savePhoto} from "../../../redux/Profile-reducer";
import {ProfilIStatusWithHook} from "./ProfilIStatusWithHooks";
import userPhoto from "../../../assets/images/userFhoto.jpg";
import {useAppDispatch} from "../../../redux/Hooks";
import {ProfileDataForm} from "../Contscts/ProfileDataForm";
import {ProfileData} from "../Contscts/ProfileData";
import {Contacts} from "../Contscts/Contscts";

type ProfileInfo = {
    profile: null | ProfileType
    status: string
    updateStatusTC: (status: string) => any
    isOwner: boolean
    savePhoto: any
    contactTitle?: string,
    contactValue?: any
}

const ProfileInfo: React.FC<ProfileInfo> = React.memo((props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
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
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm notToEditMode={() => {
                        setEditMode(false)}} profile={props.profile}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {
                        setEditMode(true)}}/>
                }
                <Contacts contactValue={props.contactValue} contactTitle={props.contactValue}/>
                <ProfilIStatusWithHook status={props.status} updateStatusTC={props.updateStatusTC}/>
            </div>
        </div>
    )
})
export default ProfileInfo