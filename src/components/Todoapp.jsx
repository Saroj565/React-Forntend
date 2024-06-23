import { Box } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
const Todoapp = () => {
  const [color, setColor] = useState(false);
  const [Alltodo, setAlltodo] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleButton = () => {
    const newTodoItem = {
      newTitle: title,
      newDescription: description,
    };

    let updatedTodo = [...Alltodo];
    updatedTodo.push(newTodoItem);
    setAlltodo(updatedTodo);
  };

  return (
    <>
      <h1>Todo app</h1>
      <Box className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label htmlFor="Title">Title</label>
            <br />
            <input
              type="text"
              placeholder="Whats the task title?"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="todo-input-item">
            <label htmlFor="Title">Description</label>
            <br />
            <input
              type="text"
              placeholder="Whats the task Description?"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="todo-input-item">
            <button
              className="primaryBtn s"
              type="button"
              onClick={handleButton}
            >
              Add
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button
            className={`"secondaryBtn ${color === false && "active"}`}
            onClick={() => {
              setColor(false);
            }}
          >
            Todo
          </button>
          <button
            className={`"secondaryBtn ${color === true && "active"}`}
            onClick={() => {
              setColor(true);
            }}
          >
            Completed
          </button>
        </div>
        <div className="todo-list">
          {Alltodo.map((item, index) => (
            <div
              className="todo-list-item"
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h3>{item.newTitle}</h3>
                <p>{item.newDescription}</p>
              </div>
              <div className="icon" style={{ display: "flex", gap: "10px" }}>
                <AiOutlineDelete />
                <BsCheckLg />
              </div>
            </div>
          ))}
        </div>
      </Box>
    </>
  );
};

export default Todoapp;
