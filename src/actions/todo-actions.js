import {
    ADD_TODO_ITEM,
    EDIT_TODO_ITEM,
    DELETE_TODO_ITEM,
} from '../constants/todo-contants'

export const addTodoAction = (data) => {
    return {
        type: ADD_TODO_ITEM,
        payload: data
    }
}

export const deleteTodoAction = (id) => {
    return {
        type: DELETE_TODO_ITEM,
        payload: id
    }
}

export const editTodoAction = (value, id) => {
    const updatedData = {todo: value, todoId: id}
    return {
        type: EDIT_TODO_ITEM,
        payload: updatedData
    }
}