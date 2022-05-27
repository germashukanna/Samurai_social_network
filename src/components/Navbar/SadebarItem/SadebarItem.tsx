import React from 'react';
import s from './SidebarItem.module.css'

type SidebarItemPropsType = {
    key: number,
    img: string,
    name: string
}

export const SidebarItem: React.FC<SidebarItemPropsType> = (props) => {
    return (
        <li className={s.item}>
            <img src={props.img} alt={''}/>
            <span>{props.name}</span>
        </li>
    );
};

