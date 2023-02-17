import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a52700d3-7991-48d5-ac35-fcdb339c5b05'
    }
})

export const getAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getProfile(userId: number) {
        console.warn("Obsolete method. Please profileAPI object")
        return profileAPI.getProfile(userId)

    },
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put<ResponseApiType<updatePhotoResponseType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart-from-data'
            }
        })
    },
    saveProfile(photoFile: getProfileResponseType) {
        return instance.put<ResponseApiType<ResponseApiType>>(`profile`, photoFile)
    },
}

export const loginAPI = {
    login(email: string, password: string, rememberMe: boolean, captchaUrl: null | string = null) {
        return instance.post<ResponseType<{ userId: number }>>(`auth/login`, {email, password, rememberMe, captchaUrl})
            .then(response => response.data)
    },
    loginOut() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    },
}

export const securityAPI = {
    getCaptchaUtl() {
        return instance.get(`security/get-captcha-url`)
            .then(response => response.data)
    },

}

export type PostsType = {
    id: number,
    post: string,
    likesCount: number,

}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

export type ResponseType<T> = {
    data: T
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
}

export enum ResultCodeEnumType {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}
export type ResponseApiType<D = {}> = {
    resultCode: ResultCodeEnumType
    messages: Array<string>
    data: D
}

export type updatePhotoResponseType = {
    small: string | null
    large: string | null
}

export type getProfileResponseType = {
    userId?: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk?: string
        facebook: string
        instagram: string
        twitter?: string
        website: string
        youtube?: string
        mainLink?: string
    }
    photos?: {
        small: string
        large: string
    }
}









