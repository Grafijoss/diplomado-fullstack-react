import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        token: null,
        isAuth: false,
        email: null
    },
    reducers: {
        setTokenAction: (state, action) => {
            return {
                ...state,
                token: action.payload
            }
        },
        setIsAuthAction: (state, action) => {
            return {
                ...state,
                isAuth: action.payload
            }
        },
        setEmailAction: (state, action) => {
            return {
                ...state,
                email: action.payload
            }
        }
    }
})

export const { setTokenAction, setIsAuthAction, setEmailAction } = authSlice.actions
export default authSlice.reducer