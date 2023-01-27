import s from "../ProfileInfo/ProfileInfo.module.css";
import React from "react";
import {ProfileType} from "../../../redux/Profile-reducer";


type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileData: React.FC<ProfileDataPropsType> = (props) => {
    return (
        <>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>edit</button>
            </div>}
            <h2>{props.profile.fullName}</h2>
            <p>
                <b>About me: </b> {props.profile.aboutMe}
            </p>
            <p>
                <b>Looking for a job: </b>{props.profile.lookingForAJob}
            </p>
            {props.profile.lookingForAJob &&
                <p> {props.profile.lookingForAJobDescription}</p>
            }
            <div>
                <b>Contacts:</b>: <div className={s.contacts}>{Object.keys(props.profile.contacts).map(key => {
                return <div>
                    <b>{key}</b>
                </div>
            })}</div>
            </div>
        </>
    )
}