import React, {ReactNode} from "react";
import s from './Button.module.css'

type childrenPropsType = {
    children: ReactNode
    onClick?: () => void
    disabled?: boolean | undefined
}

export const CustomButton: React.FC<childrenPropsType> =
    ({children,disabled, onClick}) => {

    return <div>
        <button className={s.classNameButton} disabled={disabled} onClick={onClick}>{children}</button>
    </div>

}