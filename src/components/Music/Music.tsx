import React from 'react';
import s from './Music.module.css'

type MusicPropsType = {}

const Music: React.FC<MusicPropsType> = React.memo((props) => {
    return (
        <div className={s.musicContainer}>
            Music
        </div>
    )
})

export default Music