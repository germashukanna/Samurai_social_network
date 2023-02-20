import {getCaptchaUtlResponseType, instance, ResponseApiType} from "./api";

export const loginAPI = {
    login(email: string, password: string, rememberMe: boolean, captchaUrl: null | string = null) {
        return instance.post<ResponseApiType<{ userId: number }>>(`auth/login`, {email, password, rememberMe, captchaUrl})
            .then(response => response.data)
    },
    loginOut() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    },
}

export const securityAPI = {
    getCaptchaUtl() {
        return instance.get<getCaptchaUtlResponseType>(`security/get-captcha-url`)
            .then(response => response.data)
    },
}