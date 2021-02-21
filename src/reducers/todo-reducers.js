import {
    ADD_TODO_ITEM,
    EDIT_TODO_ITEM,
    DELETE_TODO_ITEM,
} from '../constants/todo-contants'

const initialState = {
    todoList: [
        { todo: 'Buy whole milk' },
        { todo: 'Take out the dog' },
        { todo: 'Write this React view' }
    ]
}

export const todoReducer = (state = initialState, action) => {
    //console.log(state.todoList)
    switch (action.type) {
        case ADD_TODO_ITEM:
            return {
                ...state,
                todoList: [...state.todoList, action.payload]

            }
        case EDIT_TODO_ITEM:
            const { todo, todoId } = action.payload

            const updatedLIst = [...state.todoList]
            updatedLIst[todoId] = todo

            return {
                ...state,
                todoList: updatedLIst
            }
        case DELETE_TODO_ITEM:
            const id = action.payload
            const newList = [...state.todoList]
            newList.splice(id, 1)
            return {
                ...state,
                todoList: newList
            }
        default:
            return state
    }
}

