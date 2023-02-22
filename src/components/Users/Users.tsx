import React, {useEffect} from "react";
import {FilterType, followTC, getUsers, unFollow} from "../../redux/Users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";
import {UsersSearchForm} from "./UsersSearchForm/UsersSearchForm";
import {useAppDispatch} from "../../redux/Hooks";
import {
    getCurrentPage,
    getFilter,
    getFollowingInProgress,
    getPageSize,
    getPageUsers,
    getPortionSize,
    getTotalUsersCount
} from "../../redux/users-selectors";
import {useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";

type UsersPropsType = {}

type QueryParamsType = {
    term?: string
    page?: string
    friend?: string
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
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()

    // useEffect(() => {
    //     const parsed = searchParams.get('pageSize')
    //     setSearchParams(searchParams)
    //
    //     let actualPage = currentPage
    //     let actualFilter = filter
    //
    //     if (!!parsed.page) actualPage = Number(parsed.page)
    //     if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}
    //     switch (parsed.friend) {
    //         case 'null':
    //             actualFilter = {...actualFilter, friend: null}
    //             break;
    //         case 'true':
    //             actualFilter = {...actualFilter, friend: true}
    //             break;
    //         case 'false':
    //             actualFilter = {...actualFilter, friend: false}
    //             break;
    //     }
    //
    //
    //     dispatch(getUsers(actualPage, pageSize, actualFilter))
    //
    // }, [])

    useEffect(() => {
        // searchParams.get('pageSize')
        // setSearchParams(searchParams)
        dispatch(getUsers(currentPage, pageSize, filter))

    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}

        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        const queryToString = new URLSearchParams(query)


        navigate('/users')
        setSearchParams(queryToString.toString())
    }, [filter, currentPage])

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