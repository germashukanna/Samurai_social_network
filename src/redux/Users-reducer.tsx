import {getAPI} from "../Api/api";
import {Dispatch} from "redux";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

export type UserType = {
    photos: { small: null | string, large: null | string },
    id: number,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: Array<UsersLocation>
}

export type UsersLocation = {
    city: string,
    country: string
}

type UserPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export const initialState: UserPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export type ActionsUsersTypes = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess> | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>


export const usersReducer = (state: UserPageType = initialState, action: ActionsUsersTypes): UserPageType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: number) => id != action.userId)
            }
        }
        default:
            return state
    }


}

export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const)

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionsUsersTypes>) => {

        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        getAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}
export const follow = (id: number) => {

    return (dispatch: Dispatch<ActionsUsersTypes>) => {

        dispatch(toggleFollowingProgress(true, id));
        getAPI.follow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(id));
                }
                dispatch(toggleFollowingProgress(false, id));
            });
    }
}
export const unFollow = (id: number) => {

    return (dispatch: Dispatch<ActionsUsersTypes>) => {

        dispatch(toggleFollowingProgress(true, id));
        getAPI.unFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(id));
                }
                dispatch(toggleFollowingProgress(false, id));
            });
    }
}