import { createSlice } from "@reduxjs/toolkit";
import showcase from "../assets/showwcase.png"
import angular from "../assets/angular.png"

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
            {
                id: 2,
                title: "Angular",
                description: "A small web application created with Angular",
                image: angular,
                website: "https://angularjs.org/"
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
        deleteProject(state, action) {
            const id = action.payload;
            const index = state.project.findIndex((item) => item.id === id);
            // console.log("xxxxxxxxxxx", index);
            if (index !== -1) {
                state.project.splice(index, 1);
            }
        }
    }
})



export const projectsActions = projectsSlice.actions;
export default projectsSlice.reducer;