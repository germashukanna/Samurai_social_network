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
}

export const loginAPI = {
    me(data: LoginParamsType) {
        return instance.get(`auth/me`, {data})
            .then(response => response.data)
    },
    login(userId?: number) {
        return instance.post(`auth/login/`, userId)
            .then(response => response.data)
    },
    loginOut(userId?: number) {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    },
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}






