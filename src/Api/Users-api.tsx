import {GetUsersItems, instance, MeResponseDataType, ResponseApiType} from "./api";
import {profileAPI} from "./Profile-api";


export const getAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 1) {
        return instance.get<GetUsersItems>(`users?page=${currentPage}&count=${pageSize}`)
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

    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data) as Promise <ResponseApiType>
    },
    follow(id: number) {
        return instance.post<ResponseApiType>(`follow/${id}`)
            .then(response => response.data)
    }
}