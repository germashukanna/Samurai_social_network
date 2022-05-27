import {FriendsType} from "../../../redux/store";
import {SidebarItem} from "./SadebarItem";
import s from '../SadebarFr.module.css'
import React from "react";

type FriendsPropsType = {
    sidebarFr: Array<FriendsType>
}

export const SidebarFr: React.FC<FriendsPropsType> = (props) => {

    let friendsList = props.sidebarFr.map((f) => {
        return <SidebarItem key={f.id} img={f.img} name={f.name}/>
    })

    return (
        <div className={s.friendsBlock}>
            <div className={s.title}>Friends</div>
            <ul className={s.list}>
                {friendsList}
            </ul>

        </div>
    );
};

