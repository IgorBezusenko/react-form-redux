import {AuthAPI} from "../../API/API";

const SET_TOKEN = "SET_TOKEN"
const CLEAR_TOKEN = "CLEAR_TOKEN"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const SET_ERROR = "SET_ERROR"
const CLEAR_ERROR = "CLEAR_ERROR"


type InitialStateType = {
    token: string | null,
    loading: boolean,
    errorMessage: string | null
}
const initialState = {
    token: null,
    loading: false,
    errorMessage: null

}
console.log(initialState)

export const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_ERROR :
            return {
                ...state,
                errorMessage: action.error
            }
        case CLEAR_ERROR :
            return {
                ...state,
                errorMessage: null
            }
        case SET_TOKEN :
            return {
                ...state,
                token: action.token
            }
        case CLEAR_TOKEN :
            return {
                ...state,
                token: null
            }

        case  TOGGLE_IS_FETCHING:
            return {
                ...state,
                loading: action.toggleIsFetching
            }
        default:
            return state
    }
}

type SetTokenActionType = {
    type: typeof SET_TOKEN,
    token: string | null
}
export const setToken = (token: string): SetTokenActionType => ({
    type: SET_TOKEN,
    token
})

type ClearTokenActionType ={
    type: typeof CLEAR_TOKEN
}
export const clearToken = ():ClearTokenActionType => ({
    type: CLEAR_TOKEN,
})

type SetErrorActionType ={
    type: typeof SET_ERROR,
    error: string
}
export const setError = (error: string):SetErrorActionType => ({
    type: SET_ERROR,
    error
})

type ClearErrorActionType ={ type: typeof CLEAR_ERROR}
export const clearError = ():ClearErrorActionType => ({
    type: CLEAR_ERROR,

})

type ToggleIsFetchingActionType ={
    type: typeof TOGGLE_IS_FETCHING,
    toggleIsFetching: boolean
}
export const toggleIsFetching = (toggleIsFetching: boolean):ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    toggleIsFetching
})


export const getToken = (login: string, password: string) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    try {
        const response = await AuthAPI.login(login, password)
        dispatch(setToken(response.data.token))
        dispatch(clearError())
        dispatch(toggleIsFetching(false))
    } catch (e) {
        dispatch(setError(e.response.data.error.message))
        dispatch(toggleIsFetching(false))
    }
}