import React, { useContext } from "react";
import "./Breadcrum.css";
import { MdEditDocument } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { appContext } from "../../context/Context";

const Breadcrum = ({title , para , dueDate}) => {
  const { completeTask, setCompleteTask } = useContext(appContext);

  return (
    <div className="breadcrum-todo">
      <div className="breadcrum-head-para">
        <h1>{title.slice(0,30)}..</h1>
        <p>{para.slice(0,80)}..</p>
      </div>
      <div className="breadcrum-date-delete-edit">
        <div className="breadcrum-date-indication">
          <span>{dueDate}</span>
          <button
            onClick={() => setCompleteTask(prev=>!prev)}
            className={`${completeTask === true ? "green" : "red"}`}
          >{completeTask === true? "Completed": "incomplete"}
          </button>
        </div>
        <div className="breadcrum-control-btns">
          <MdEditDocument className="breadcrum-edit"/>
          <MdDelete className="breadcrum-delete"/>
        </div>
      </div>
    </div>
  );
};

export default Breadcrum;
