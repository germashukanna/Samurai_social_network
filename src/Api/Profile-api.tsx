import {getProfileResponseType, getStatusResponseType, instance, ResponseApiType, updatePhotoResponseType} from "./api";

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<getProfileResponseType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get<getStatusResponseType>(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseApiType>(`profile/status`, {status})
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