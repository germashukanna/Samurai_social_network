import React from 'react';
import s from './New.module.css'

type NewsPropsType = {}

const New: React.FC<NewsPropsType> = () => {
    return (
        <div className={s.newContainer}>
            New
        </div>
    )
}

export default New