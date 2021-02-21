import React, { useState, useRef, useEffect } from 'react'

import './TodoList.css'

const TodoList = ({ onDelete, onBlurEdit, todoBlurAction, value, index }) => {
    const [todoValue, setTodoValue] = useState(value)
    const inputRef = useRef(null)
    const [isEdit, setisEdit] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)

    const setToEditHandler = () => {
        setisEdit(true)
    }

    const updateOnBlur = (value, index) => {
        if (!todoValue) {
            setErrorMsg(true)
        } else {
            onBlurEdit({ todo: value }, index)
            setErrorMsg(false)
            setisEdit(false)
        }
    }

    useEffect(() => {
        if (isEdit) {
            inputRef.current.focus()
        }
    }, [isEdit])

    return (
        <li className="todo_list_item">
            <div className="item_container">
                <div>
                    <button
                        className="button_todo_item"
                        onClick={onDelete}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="item_value_container">
                    <div>
                        {
                            !isEdit ? (
                                <span
                                    onClick={setToEditHandler}
                                    className="todo_item_value"
                                    onBlur={todoBlurAction}>{value}</span>
                            ) : (
                                    <form onSubmit={e => e.preventDefault()}>
                                        <input className="input_add_item" onBlur={(e) => updateOnBlur(e.target.value, index)} ref={inputRef} value={todoValue} onChange={e => setTodoValue(e.target.value)} />
                                    </form>
                                )
                        }
                    </div>
                    {errorMsg && <h6 className="errorMsg">Can not update empty todo</h6>}
                </div>

            </div>
        </li>
    )
}

export default TodoList
