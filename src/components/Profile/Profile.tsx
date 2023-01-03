import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsConteiner";
import {ProfilePropsType} from "./ProfileContainer";


const Profile: React.FC<ProfilePropsType> = React.memo((props) => {
    return (
    <div>
        <ProfileInfo profile={props.profile}  status={props.status} updateStatusTC={props.updateStatusTC}/>
        <MyPostsContainer />
    </div>
    )
})
export default Profile