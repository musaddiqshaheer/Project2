import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export const ToDoList = () => {
  const [toDo, setToDo] = useState([]);
  const [copyToDo, setCopyToDo] = useState([]);
  const [text, setText] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [edit, setEdit] = useState(false);

  const handleAddTask = () => {
    if (edit) {
      const editedTask = toDo.map((elem, index) =>
        index === selectedIndex ? text : elem
      );
      setToDo(editedTask);
      setCopyToDo(editedTask);
      setText("");
      setEdit(false);
    } else {
      if (!text.trim()) return;
      setToDo([...toDo, text]);
      setCopyToDo([...toDo, text]);
      setText("");
    }
  };
  const hanldeDelete = (item, id) => {
    const remainTask = toDo.filter((elem, ind) => ind != id);
    setToDo(remainTask);
  };
  const handleSearchTask = (value) => {
    const searchedItem = copyToDo.filter((elem) =>
      elem.toUpperCase().includes(value.toUpperCase())
    );
    setToDo(searchedItem);
  }; 
  const handleEditTask = (item, ind) => {
    setText(item);
    setSelectedIndex(ind);
    setEdit(true);
  };
  return (
    <div className="div">
      <i>
        <h1 className="h1">To Do List</h1>
        <br />
        <br />
      </i>
      <TextField type="text"
        placeholder="Search here..."
        onChange={(e) => handleSearchTask(e.target.value)} ></TextField>{" "}
       <TextField type="text"
        placeholder="Add TO Do"
        onChange={(e) => setText(e.target.value)}
        value={text}></TextField>{" "}
      <Button onClick={() => handleAddTask()}>{edit ? "Edit" : "Add"} Task</Button>
      <br />
      <br />
      <br />
      <ol>
        {toDo.map((item, index) => {
          return (
            <i>
              {" "}
              <li className="li" key={index}>
                {item}{" "}
                <Button onClick={() => handleEditTask(item, index)}>
                  Edit
                </Button>
                <Button onClick={() => hanldeDelete(item, index)} color="error">
                  Delete
                </Button>
              </li>
            </i>
          );
        })}
      </ol>
    </div>
  );
};