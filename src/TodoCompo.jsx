import React, { useState } from 'react';
import { TextField, Button, ListItem } from "@mui/material"
export const TodoCompo = () => {
    const [text, setText] = useState("")
    const [todolist, setTodolist] = useState([])
    const [selectIndex, setSelectIndex] = useState(null)
    const [edit, setEdit] = useState(false)
    const handleAddTask = () => {
        if (edit) {
            const edited = todolist.map((elem, index) => index == selectIndex ? text : elem)
            setTodolist(edited);
            setEdit(false)
            setSelectIndex(null)
        } else {
            if (!text.trim()) return
            setTodolist([...todolist, text])
        }
        setText("")
    }
    const handleEdit = (val, id) => {
   
        setSelectIndex(id)
        setText(val)
        setEdit(true)
    }
    const handleDelete = (val, id) => {
        const remainTodos = todolist.filter((item, ind) => ind !== id)
        setTodolist(remainTodos)
    }
    return (
        <div>
            <TextField
                placeholder="Add to Task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button variant='contained' onClick={() => handleAddTask()}>  {edit ? "edit" : "Add"}Add Task</Button>
            {
                todolist && todolist.map((item, index) => {
                    return (
                        <ListItem>
                            {item}
                            <Button variant='contained' color='success'
                                onClick={() => handleEdit(item, index)}
                            >Edit</Button>
                            <Button variant='contained' color='error'
                                onClick={() => handleDelete(item, index)}
                            >Delete</Button>
                        </ListItem>
                    )
                })
            }
        </div>
    );
};

