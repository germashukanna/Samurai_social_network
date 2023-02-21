import React, {useEffect} from "react";
import {FilterType, getUsers, unFollow, followTC} from "../../redux/Users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";
import {UsersSearchForm} from "./UsersSearchForm/UsersSearchForm";
import {useAppDispatch} from "../../redux/Hooks";
import {
    getCurrentPage,
    getFilter,
    getFollowingInProgress,
    getPageSize,
    getPageUsers, getPortionSize,
    getTotalUsersCount
} from "../../redux/users-selectors";
import {useSelector} from "react-redux";

type UsersPropsType = {

}

export const Users = React.memo((props: UsersPropsType) => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getFilter)
    const users = useSelector(getPageUsers)
    const followingInProgress = useSelector(getFollowingInProgress)
    const portionSize = useSelector(getPortionSize)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize, filter))

    }, [])

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers(1, pageSize, filter))
    }

    const follow = (userId: number) => {
        dispatch(followTC(userId))
    }

    const unfollow = (userId: number) => {
        dispatch(unFollow(userId))
    }

    return (
        <div>
            <div><UsersSearchForm onFilterChanged={onFilterChanged}/></div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}
                       portionSize={portionSize}/>
            <div>
                {users.map(u => <User key={u.id} follow={follow}
                                      unfollow={unfollow}
                                      followingInProgress={followingInProgress}
                                      user={u}
                />)}
            </div>
        </div>
    )
})