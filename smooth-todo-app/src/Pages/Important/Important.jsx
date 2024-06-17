import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import Breadcrum from "../../Components/BreadcrumTodo/Breadcrum";
import { IoMdAdd } from "react-icons/io";
import './Important.css'
import { appContext } from "../../context/Context";
import { useContext } from "react";


const Important = () => {

    const { setOpenAddForm, importantTodoList } = useContext(appContext);

  return (
    <div className="importanttodo-container">
      <div className="important-head">
        <h1>
          <span>Important </span>Tasks
        </h1>
        <button onClick={() => setOpenAddForm(true)}>
          <IoAddCircleOutline />
        </button>
      </div>
      <div className="all-todo-container">
      {importantTodoList.map((item)=>(
        <Breadcrum title={item.title} para={item.para} dueDate={item.dueDate}/>
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

export default Important;
