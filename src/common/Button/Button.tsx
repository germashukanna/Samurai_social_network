import React, {ReactNode} from "react";
import s from './Button.module.css'

type childrenPropsType = {
    children: ReactNode
    onClick?: () => void
}

export const CustomButton: React.FC<childrenPropsType> =
    ({children, onClick}) => {

    return <div>
        <button className={s.classNameButton} onClick={onClick}>{children}</button>
    </div>

}