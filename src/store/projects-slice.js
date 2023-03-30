import { createSlice } from "@reduxjs/toolkit";
import showcase from "../assets/showwcase.png"
import angular from "../assets/angular.png"
import { v4 as uuidv4 } from "uuid";



const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        project: [
            {
                id: uuidv4(),
                title: "Show Case",
                description: "A small web application that lets manage the list of showcased works",
                image: showcase,
                website: "https://veziv.ro/"
            },
            {
                id: uuidv4(),
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
        },
        // updateProject(state, action) {



        //     state.project.map((project) => {
        //         console.log(project.id);
        //         console.log(project.title)
        //         console.log(action.payload.id)
        //         if (project.id === action.payload.id) {
        //             return {
        //                 ...project,
        //                 title: action.payload.title,
        //                 description: action.payload.description,
        //                 image: action.payload.image,
        //                 website: action.payload.website,
        //             };
        //         }
        //         return project;
        //     })
        // }
        updateProject(state, action) {
            const { id, title, description, image, website } = action.payload;
            const index = state.project.findIndex((project) => project.id === id);
            if (index !== -1) {
                state.project[index] = {
                    ...state.project[index],
                    title,
                    description,
                    image,
                    website,
                };
            }
        }
    }
})



export const projectsActions = projectsSlice.actions;
export default projectsSlice.reducer;