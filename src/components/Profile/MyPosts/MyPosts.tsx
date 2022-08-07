import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {myPostsPropsType} from "./MyPostsConteiner";
import {AddMessageForm, ValuesType} from "../../../Form/Form";


const MyPosts: React.FC<myPostsPropsType> = (props) => {


    const postsElements = props.profilePage.posts.map(p => <Post key={p.id} message={p.post} likes={p.likesCount}/>)


    const addNewPostText = (values: ValuesType) => {
        props.addPostToo(values.message as string)
    }

    return (
        <div>
            <div className={s.postBlock}>
                <h3>My post</h3>
            </div>
            <AddMessageForm callback={addNewPostText}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts