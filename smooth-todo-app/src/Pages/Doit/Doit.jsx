import React, { useContext } from "react";
import { appContext } from "../../context/Context";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import Breadcrum from "../../Components/BreadcrumTodo/Breadcrum";
import "./Doit.css";

const Doit = () => {
  const { setOpenAddForm, doitTodoList } = useContext(appContext);

  return (
    <div className="doit-container">
      <div className="doit-head">
        <h1>
          <span>Remaining </span>Tasks
        </h1>
        <button onClick={() => setOpenAddForm(true)}>
          <IoAddCircleOutline />
        </button>
      </div>
      <div className="all-todo-container">
        {doitTodoList.map((item) => (
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

export default Doit;
