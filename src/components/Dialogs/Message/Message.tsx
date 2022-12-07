import React from 'react';
import s from './../Dialogs.module.css'

type MessagePropsType = {
    message: string
}

const Message: React.FC<MessagePropsType> = React.memo((props) => {
    return (

        <div className={s.message}>{props.message}</div>

    )
})




export default Message;