import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {myPostsPropsType} from "./MyPostsConteiner";


const MyPosts: React.FC<myPostsPropsType> = (props) => {

    const postsElements = props.profilePage.posts.map(p => <Post key={p.id} message={p.post} likes={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPostToo = () => {
      props.addPostToo();

     }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value;
        props.updateNewPostText(text)

    }
    return (
        <div>
            <div className={s.postBlock}>
                <h3>My post</h3>
            </div>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.profilePage.newPostText}
                          />
            </div>
            <div>
                <button onClick={addPostToo}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts