import {GetUsersItems, instance, MeResponseDataType, ResponseApiType} from "./api";
import {profileAPI} from "./Profile-api";


export const getAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 1, term: string = '', friend: null | boolean = null) {
        return instance.get<GetUsersItems>(`users?page=${currentPage}&count=${pageSize}&term=${term}`
            + (friend === null ? '' : `&friend=${friend}`) )
            .then(response => response.data)
    },

    getProfile(userId: number) {
        console.warn("Obsolete method. Please profileAPI object")
        return profileAPI.getProfile(userId)
    },
    getAuthMe() {
        return instance.get<ResponseApiType<MeResponseDataType>>(`auth/me`)
            .then(response => response.data)
    },

    unFollow(userId: number) {
        return instance.delete<ResponseApiType>(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<ResponseApiType>(`follow/${userId}`)
            .then(response => response.data)
    }
}