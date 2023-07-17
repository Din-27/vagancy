import { createSlice } from '@reduxjs/toolkit'

// create a slice 
export const navbarslice = createSlice({
    name: "navbar",
    initialState: {
        navbar: false,
        dropdown: false
    },
    reducers: {
        setNavbarState(state, action) {
            state.navbar = action.payload;
            if (!action.payload) state.dropdown = false
        },
        setDropdownState(state, action) {
            state.dropdown = action.payload
        },
    }
})
// export the action
export const { setNavbarState, setDropdownState } = navbarslice.actions
export const navbarState = (state: any) => state.navbar;
export default navbarslice