import React from "react";
import {ProfileType} from "../../../redux/Profile-reducer";
import {CustomButton} from "../../../common/Button/Button";
import s from './ProfileData.module.css'


type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileData: React.FC<ProfileDataPropsType> = (props) => {
    return (
        <>
            {props.isOwner && <div className={s.editProfileButton}>
                <CustomButton children={'Edit profile'} onClick={props.goToEditMode}/>
            </div>}
            <h2>{props.profile.fullName}</h2>
            <p>
                <b>About me: </b> {props.profile.aboutMe}
            </p>
            <p>
                <b>Looking for a job: </b>{props.profile.lookingForAJob} <span>yes</span>
            </p>
            {props.profile.lookingForAJob &&
                <p> {props.profile.lookingForAJobDescription}</p>
            }
            <div>
                <b>Contacts:</b>
                {props.profile.contacts.facebook && <p><b>FaceBook:</b> {props.profile.contacts.facebook}</p>}
                {props.profile.contacts.website && <p><b>Web-site:</b> {props.profile.contacts.website}</p>}
                {props.profile.contacts.vk && <p><b>Vk:</b> {props.profile.contacts.vk}</p>}
                {props.profile.contacts.twitter && <p><b>Twitter:</b> {props.profile.contacts.twitter}</p>}
                {props.profile.contacts.instagram &&
                    <p><b>Instagram:</b> {props.profile.contacts.instagram}</p>}
                {props.profile.contacts.youtube && <p><b>YouTube:</b> {props.profile.contacts.youtube}</p>}
                {props.profile.contacts.github && <p><b>GitHub:</b> {props.profile.contacts.github}</p>}
                {props.profile.contacts.mainLink && <p><b>MainLink:</b> {props.profile.contacts.mainLink}</p>}
            </div>
        </>
    )
}