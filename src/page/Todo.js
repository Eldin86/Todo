import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../components/Header'
import { editTodoAction, deleteTodoAction } from '../actions/todo-actions'
import AddTodoItem from '../components/AddTodoItem'
import TodoList from '../components/TodoList'

import './Todo.css'

const Todo = () => {
    const todos = useSelector(state => state)
    const { todoList } = todos

    const dispatch = useDispatch()

    const deleteTodoHandler = (id) => {
        dispatch(deleteTodoAction(id))
    }

    const editTodoHandler = (value, id) => {
        dispatch(editTodoAction(value, id))
    }

    return (
        <div>
            <Header />
            <div className="content">
                <AddTodoItem />
                <ul>
                    {
                        todoList.length > 0 ?  (todoList.map((todo, i) => {
                            return <TodoList
                                key={i + Date.now()}
                                value={todo.todo}
                                index={i}
                                onBlurEdit={editTodoHandler}
                                onDelete={() => { deleteTodoHandler(i) }}
                                icon={"fas fa-times"} />
                        })) : (
                            <h2>Todo list is empty</h2>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Todo
