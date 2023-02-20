import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType, savePhoto} from "../../../redux/Profile-reducer";
import {ProfilIStatusWithHook} from "./ProfilIStatusWithHooks";
import userPhoto from "../../../assets/images/userFhoto.jpg";
import {useAppDispatch} from "../../../redux/Hooks";
import {ProfileDataForm} from "../Contacts/ProfileDataForm";
import {ProfileData} from "../Contacts/ProfileData";
import {AddCircleOutline} from "@mui/icons-material";

type ProfileInfo = {
    profile: null | ProfileType
    status: string
    updateStatusTC: (status: string) => any
    isOwner: boolean
    savePhoto: (file: File) => void
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
                {props.isOwner &&
                    <label className={s.inputTypeFile}><input type={'file'} onChange={onMainPhotoSelected}
                                                              style={{display: 'none'}}/>
                        <AddCircleOutline/>
                    </label>}
                {editMode
                    ? <ProfileDataForm
                        // notToEditMode={() => {setEditMode(false)
                        // @ts-ignore
                    profile={props.profile}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>
                }
                <ProfilIStatusWithHook status={props.status} updateStatusTC={props.updateStatusTC}/>
            </div>
        </div>
    )
})
export default ProfileInfo