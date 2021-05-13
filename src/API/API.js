import * as axios from "axios"

const instance = axios.create({
    baseURL:"https://api.portal.idc.md/api/"
})

export const AuthAPI = {
    login(login,password){
        return instance.post(`/get_token`,{login,password})
    }
}