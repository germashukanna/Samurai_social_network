import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string,
    likes: number,
}

const Post: React.FC<PostPropsType> = React.memo((props) => {
    return (
        <div className={s.items}>
            <img
                src={'https://classic.armadon-theme.com/wp-content/uploads/sites/11/avatars/6/6-bpfull.jpg'}
                alt={''}/>
            <span className={s.messagePost}>{props.message}</span>
            <span className={s.like}>{props.likes}</span>
        </div>

    )
})

export default Post