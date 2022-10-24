import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false }
]

const taskSlice = createSlice({ name: "task", initialState, reducers: {
    update(state, action) {
        const elementIndex = state.findIndex((el) => el.id === action.payload.id)
        state[elementIndex] = { ...state[elementIndex], ...action.payload }
    },
    remove(state, action) {
        return state.filter(el => el.id !== action.payload.id)
    }
} })

// const taskReducer = createReducer(initialState, (builder) => {
//     builder
//         .addCase(update, (state, action) => {
//             const elementIndex = state.findIndex((el) => el.id === action.payload.id)
//             state[elementIndex] = { ...state[elementIndex], ...action.payload }
//         })
//         .addCase(remove, (state, action) => {
//             return state.filter(el => el.id !== action.payload.id)
//         })
// })

// function taskReducer(state = [], action) {
//     switch (action.type) {
//         case update.type: {
//             const newArray = [...state]
//             const elementIndex = newArray.findIndex((el) => el.id === action.payload.id)
//             newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload }
//             return newArray
//         }
//         case remove.type: {
//             const newArray = [...state]
//             const filteredArray = newArray.filter(el => el.id !== action.payload.id)
//             return filteredArray
//         }
//         default:
//             return state
//     }
// }

const { actions, reducer: taskReducer } = taskSlice
const { update, remove } = actions

export function taskCompleted(id) {
    return update({ id, completed: true })
}

export function titleChanged(id) {
    return update({ id, title: `New title for ${id}` })
}

export function taskDeleted(id) {
    return remove({ id })
}

export default taskReducer
