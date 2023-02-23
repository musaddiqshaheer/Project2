import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export const ToDoPrectice = () => {
  const [text, setText] = useState("");
  const [toDo, setToDo] = useState([]);

  const [copyToDo, setCopyToDo] = useState([]);

  const [editIndex,setEditIndex]=useState(null)
  const [edit,setEdit]=useState(false)


  const handleAdd = () => {
    if (edit){
        const EditTsk=toDo.map((item,index)=>index===editIndex?text:item)
        setToDo(EditTsk)
        setCopyToDo(EditTsk)
        setText('')
        setEdit(false)
    }else{
    if (!text.trim()) return;
    setToDo([...toDo, text]);
    setCopyToDo([...toDo, text]);
    setText("");
  }}
  const handleDelete = (item, index) => {
    const remainTask = toDo.filter((elem, ind) => index != ind);
    setToDo(remainTask);
  };

  const SearchTask = (value) => {
    const search = copyToDo.filter((item, index) =>
      item.toUpperCase().includes(value.toUpperCase())
    );
    setToDo(search);
  };
  const handleEdit=(item,index)=>{
    setText(item)
    setEditIndex(index)
    setEdit(true)
  }

  console.log(copyToDo);

  return (
    <div>
      <h1>To Do list</h1>
      <TextField
        placeholder="Searhe Here"
        type="text"
        onChange={(e) => SearchTask(e.target.value)}
      />

      <TextField
        placeholder="To Do List"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={() => handleAdd()}>
        Add
      </Button>

      <ol>
        {toDo.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <Button color="secondary" onClick={()=>handleEdit(item,index)}>Edit</Button>
              <Button color="error" onClick={() => handleDelete(item, index)}>
                Delete
              </Button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
