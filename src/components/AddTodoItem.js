import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../actions/todo-actions'

import './AddTodoItem.css'

const AddTodoItem = () => {
    const [addTodo, setAddTodo] = useState('')
    const [errorMessage, setErrorMessage] = useState(false)

    const dispatch = useDispatch()

    const addTodoHandler = () => {
        //Default is false because ''
        if (!!addTodo) {
            dispatch(addTodoAction({ todo: addTodo }))
            setErrorMessage(false)
            setAddTodo('')
        } else {
            setErrorMessage(true)
        }
    }

    return (
        <div className="todo_add_item_container">
            <div>
                <form onSubmit={e => e.preventDefault()}>
                    <button
                        className="button_add_item"
                        onClick={addTodoHandler}>
                        <i className={"fas fa-plus"}></i>
                    </button>
                </form>
            </div>
            <div className="input_container">
                <div>
                    <form onSubmit={e => e.preventDefault()}>
                        <input
                            className="input_add_item"
                            value={addTodo}
                            onChange={(e) => setAddTodo(e.target.value)}
                            type="text" />
                    </form>
                </div>
                {errorMessage && <h6 className="errorMsg">Can not add empty item</h6>}
            </div>

        </div>
    )
}

export default AddTodoItem
