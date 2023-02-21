import React from "react";
import {Preloader} from "../common/Preloader/Preloader";
import {getIsFetching} from "../../redux/users-selectors";
import {Users} from "./Users";
import {useSelector} from "react-redux";




type UsersPagePropsType = {}

export const UsersPage: React.FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)
    return <>
        {isFetching ? <Preloader/> : null}
        <Users/>
    </>
}


