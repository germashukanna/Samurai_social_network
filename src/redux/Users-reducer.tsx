import {getAPI, ResultCodeEnumType} from "../Api/api";
import {Dispatch} from "redux";

const FOLLOW = "Users/FOLLOW"
const UNFOLLOW = "Users/UNFOLLOW"
const SET_USERS = "Users/SET_USERS"
const SET_CURRENT_PAGE = "Users/SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "Users/SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "Users/TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "Users/TOGGLE_IS_FOLLOWING_PROGRESS"

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
    portionSize: number
}
export const initialState: UserPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    portionSize: 10
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
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: number) => id !== action.userId)
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
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)

export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch<ActionsUsersTypes>) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        let data = await getAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnFollow = async (dispatch: Dispatch<ActionsUsersTypes>, id: number,
                              apiMethod: any,
                              actionCreator: (id: number) => ReturnType<typeof followSuccess> | ReturnType<typeof unfollowSuccess>) => {
    dispatch(toggleFollowingProgress(true, id));
    const data = await apiMethod(id)
    if (data.resultCode === ResultCodeEnumType.Success) {
        dispatch(actionCreator(id));
    }
    dispatch(toggleFollowingProgress(false, id));
}

export const follow = (id: number) => {
    return async (dispatch: Dispatch<ActionsUsersTypes>) => {
        let apiMethod = await getAPI.follow.bind(id)
        followUnFollow(dispatch, id, apiMethod, followSuccess)
    }
}

export const unFollow = (id: number) => {
    return async (dispatch: Dispatch<ActionsUsersTypes>) => {
        let apiMethod = await getAPI.unFollow.bind(id)
        followUnFollow(dispatch, id, apiMethod, unfollowSuccess)
    }
}

