import { createSlice } from "@reduxjs/toolkit";
import showcase from "../assets/showwcase.png"

const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        project: [
            {
                id: 1,
                title: "Show Case",
                description: "A small web application that lets manage the list of showcased works",
                image: showcase,
                website: "https://veziv.ro/"
            },
        ],
    },
    reducers: {
        setProjectsList(state, action) {
            const newProject = action.payload;
            const existingProject = state.project.find((item) => item.id === newProject.id);
            if (!existingProject) {
                state.project.push({
                    id: newProject.id,
                    title: newProject.title,
                    description: newProject.description,
                    image: newProject.image,
                    website: newProject.website,
                })
            }
            console.log(state.project)
        },
        // setProjectsEdited(state, action) {

        // }
    }
})



export const projectsActions = projectsSlice.actions;
export default projectsSlice.reducer;