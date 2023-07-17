import { configureStore } from '@reduxjs/toolkit'
import navbarSlice from '../reducers/navbar'

const store = configureStore({
    reducer: {
        [navbarSlice.name]: navbarSlice.reducer
    }
})

// export default the store 
export default store