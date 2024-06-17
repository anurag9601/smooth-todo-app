import React, { useContext } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import "./Home.css";
import { appContext } from "../../context/Context";
import Breadcrum from "../../Components/BreadcrumTodo/Breadcrum.jsx";

const Home = () => {
  const { setOpenAddForm, homeTodoList } = useContext(appContext);

  return (
    <div className="home-container">
      <div className="home-head">
        <h1>
          <span>All </span>Tasks
        </h1>
        <button onClick={() => setOpenAddForm(true)}>
          <IoAddCircleOutline />
        </button>
      </div>
      <div className="all-todo-container">
        {homeTodoList.map((item)=>(
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

export default Home;
