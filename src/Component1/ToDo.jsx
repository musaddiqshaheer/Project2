import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export const ToDo = () => {
  const [text, setText] = useState("");
  const [todo, setToDo] = useState([]);
  const [copyToDo, setCopyToDo] = useState("");
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  //   console.log(copyToDo);
  const handleAdd = () => {
    if(edit){
        const EditTask =todo.map((item, index)=>index===editIndex?text:item)
        setCopyToDo(EditTask)
        setToDo(EditTask)
        setText('')
        setEdit(false)

    }else{
    if (!text.trim()) return;
    setToDo([...todo, text]);
    setCopyToDo([...todo, text]);
    setText("");
  }};
  //   console.log(todo);
  const handleDelete = (item, index) => {
    const remainTask = todo.filter((elem, ind) => index != ind);
    setToDo(remainTask);
  };
  const searchTask = (value) => {
    const search = copyToDo.filter((item, index) =>
      item.toUpperCase().includes(value.toUpperCase())
    );
    setToDo(search);
  };
 const handleEdit = (item, index) => {
setText(item)
setEditIndex(index)
setEdit(true)
 }
  return (
    <div>
      <h1>This ToDo</h1>
      <TextField
        variant="standard"
        label="Search Here..."
        onChange={(e) => searchTask(e.target.value)}
      />{" "}
      <TextField
        value={text}
        variant="standard"
        label="Add Value"
        onChange={(e) => setText(e.target.value)}
      />{" "}
      <Button variant="contained" color="success" onClick={handleAdd}>
        Add
      </Button>
      <ol>
        {todo.map((item, index) => {
          return (
            <li key={index}>
              {item}{" "}
              <Button color="error" onClick={() => handleDelete(item, index)}>
                Delete
              </Button>
              <Button onClick={()=>handleEdit(item, index)}>edit</Button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
