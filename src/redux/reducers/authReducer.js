import {AuthAPI} from "../../API/API";

const SET_TOKEN = "SET_TOKEN"
const CLEAR_TOKEN = "CLEAR_TOKEN"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const SET_ERROR = "SET_ERROR"
const CLEAR_ERROR = "CLEAR_ERROR"

const initialState = {
    token: null,
    loading: false,
    errorMessage: null
    // isAuth: false
}
console.log(initialState)

export const authReducer = (state = initialState, action) => {
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

export const setToken = (token) => ({
    type: SET_TOKEN,
    token
})
export const clearToken = () => ({
    type: CLEAR_TOKEN,
})

export const setError = (error) => ({
    type: SET_ERROR,
    error
})

export const clearError = () => ({
    type: CLEAR_ERROR,

})

export const toggleIsFetching = (toggleIsFetching) => ({
    type: TOGGLE_IS_FETCHING,
    toggleIsFetching
})


export const getToken = (login, password) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    try {
        const {data} = await AuthAPI.login(login, password)
        dispatch(setToken(data.data.token))
        dispatch(clearError())
        dispatch(toggleIsFetching(false))
    } catch (e) {
        dispatch(setError(e.response.data.error.message))
        dispatch(toggleIsFetching(false))
    }
}