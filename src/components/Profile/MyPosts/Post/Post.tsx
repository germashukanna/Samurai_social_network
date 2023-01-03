import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string,
    likes: number,
}

const Post: React.FC<PostPropsType> = React.memo((props) => {
    return (
        <div className={s.items}>
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-qGG3UEHF3EVHsnBJOPeHb2cuI1sJXeIEw&usqp=CAU'} alt={''}/>
            {props.message}
          <span className={s.like}>{props.likes}</span>
        </div>

)
})

export default Post