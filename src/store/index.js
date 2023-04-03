import { configureStore } from '@reduxjs/toolkit'
import projectsSlice from './projects-slice'

const storeX = configureStore({
    reducer: {
        projects: projectsSlice,
    }
})

export default storeX;