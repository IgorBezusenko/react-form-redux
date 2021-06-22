import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.portal.idc.md/api/"
})

type LorinResponseType = {
    status: number,
    success: boolean,
    data:{
        token: string | null
    }
}
export const AuthAPI = {
    login(login: string, password: string) {
        return instance.post<LorinResponseType>(`/get_token`, {login, password}).then(r=>r.data)
    }
}