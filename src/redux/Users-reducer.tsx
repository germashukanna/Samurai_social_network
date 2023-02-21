import {ResponseApiType, ResultCodeEnumType} from "../Api/api";
import {Dispatch} from "redux";
import {getAPI} from "../Api/Users-api";

const FOLLOW = "Users/FOLLOW"
const UNFOLLOW = "Users/UNFOLLOW"
const SET_USERS = "Users/SET_USERS"
const SET_CURRENT_PAGE = "Users/SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "Users/SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "Users/TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "Users/TOGGLE_IS_FOLLOWING_PROGRESS"
const SET_FILTER = "Users/SET_FILTER"

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
export type UserPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    portionSize: number
    filter: {
        term: string
        friend: null | boolean
    }
}
export const initialState: UserPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    portionSize: 10,
    filter: {
        term: '',
        friend: null as null | false
    }
}

type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter

export type FollowAT = ReturnType<typeof followSuccess>
export type UnfollowAT = ReturnType<typeof unfollowSuccess>
export type SetUsersAT = ReturnType<typeof setUsers>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
export type ToggleIsFetchingAT = ReturnType<typeof toggleIsFetching>
export type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
export type ToggleFollowingProgressAT = ReturnType<typeof toggleFollowingProgress>
export type setFilter = ReturnType<typeof setFilter>

export type UsersReducerAT = FollowAT | UnfollowAT | SetUsersAT |
    SetCurrentPageAT | SetTotalUsersCountAT | ToggleIsFetchingAT | ToggleFollowingProgressAT
    | setFilter

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerAT): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
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
        case SET_FILTER: {
            return {...state, filter: action.payload}
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
export const setFilter = (filter: FilterType) => ({type: SET_FILTER, payload:filter} as const)
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

export const getUsers = (currentPage: number, pageSize: number, filter: FilterType) => {
    return async (dispatch: Dispatch<UsersReducerAT>) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        dispatch(setFilter(filter));
        let data = await getAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnFollow = async (dispatch: Dispatch<UsersReducerAT>, userId: number,
                              apiMethod: (userId: number) => Promise<ResponseApiType>,
                              actionCreator: (userId: number) => FollowAT | UnfollowAT) => {
    dispatch(toggleFollowingProgress(true, userId));
    const response = await apiMethod(userId)
    if (response.resultCode === ResultCodeEnumType.Success) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number) => {
    return async (dispatch: Dispatch<UsersReducerAT>) => {
        await followUnFollow(dispatch, userId, getAPI.follow.bind(getAPI), followSuccess)
    }
}

export const unFollow = (userId: number) => {
    return async (dispatch: Dispatch<UsersReducerAT>) => {
        await followUnFollow(dispatch, userId, getAPI.unFollow.bind(getAPI), unfollowSuccess)
    }
}

