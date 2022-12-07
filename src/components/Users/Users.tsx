import React from "react";
import {UserType} from "../../redux/Users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    onPageChanged: (page: number) => void
}

export let Users = React.memo((props: UsersPropsType) => {

    return (
        <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
            <div>
                {props.users.map(u => <User key={u.id} follow={props.follow}
                                            unfollow={props.unfollow}
                                            followingInProgress={props.followingInProgress}
                                            user={u}
                />)}
            </div>
        </div>
    )
})