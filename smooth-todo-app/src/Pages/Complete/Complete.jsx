import React, { useContext } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import Breadcrum from "../../Components/BreadcrumTodo/Breadcrum";
import { appContext } from "../../context/Context";
import "./Complete.css";

const Complete = () => {
  const { setOpenAddForm, completeTodoList } = useContext(appContext);
  return (
    <div className="completed-container">
      <div className="completed-head">
        <h1>
          <span>Completed </span>Tasks
        </h1>
        <button onClick={() => setOpenAddForm(true)}>
          <IoAddCircleOutline />
        </button>
      </div>
      <div className="all-todo-container">
        {completeTodoList.map((item) => (
          <Breadcrum
            title={item.title}
            para={item.para}
            dueDate={item.dueDate}
          />
        ))}
        <div onClick={() => setOpenAddForm(true)} className="new-todo-add-box">
          <p>
            <IoMdAdd /> Add New Task
          </p>
        </div>
      </div>
    </div>
  );
};

export default Complete;
