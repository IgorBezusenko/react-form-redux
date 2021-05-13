import {AuthAPI} from "../../API/API";

const SET_TOKEN = "SET_TOKEN"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

const initialState = {
    token: null,
    loading:false
    // isAuth: false
}
console.log(initialState)

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN :
            return {
                ...state,
                token: action.token
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

const setToken = (token) => ({
    type: SET_TOKEN,
    token
})
const toggleIsFetching = (toggleIsFetching) => ({
    type: TOGGLE_IS_FETCHING,
    toggleIsFetching
})


export const getToken = (login, password) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const {data} = await AuthAPI.login(login, password)
    try {
        dispatch(toggleIsFetching(false))
        dispatch(setToken(data.data.token))

    } catch (e) {
        dispatch(toggleIsFetching(false))
        console.log(e.response)
    }
}