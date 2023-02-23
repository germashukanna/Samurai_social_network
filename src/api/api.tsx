import axios from "axios";
import {UserType} from "../redux/Users-reducer";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a52700d3-7991-48d5-ac35-fcdb339c5b05'
    }
})

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

export enum ResultCodeEnumType {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

export type getStatusResponseType = string

export type ResponseApiType<D = {}> = {
    resultCode: ResultCodeEnumType
    messages: Array<string>
    data: D
    fieldsErrors?: string[]
}

export type MeResponseDataType = {
    id: number
    email: string
    login: string
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

export type GetUsersItems = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type getCaptchaUtlResponseType = {
    url: string
}









