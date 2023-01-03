import {AppStateType} from "./redux-store";

export const getPageUsers = (state: AppStateType) => {
    return state.usersPage.users
}

// export const getPageUsersSelector = (state: AppStateType) => {
//     return state.usersPage.users
// }
//
// export const getUsersSuperSelector = createSelector (() => {
//     state.usersPage.users
// })

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}

export const getPortionSize = (state: AppStateType) => {
    return state.usersPage.portionSize
}
