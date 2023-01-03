import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number
    name: string

}
const DialogItem: React.FC<DialogItemPropsType> = React.memo((props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
})


export default DialogItem