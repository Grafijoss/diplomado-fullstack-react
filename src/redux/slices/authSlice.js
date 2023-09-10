import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        token: null,
        isAuth: false,
        email: null
    },
    reducers: {
        setTokenAction: (state, action) => { // reciben dos argumentos
            return {
                ...state,
                token: action.payload
            }
        }
    }
})

export const { setTokenAction } = authSlice.actions
export default authSlice.reducer