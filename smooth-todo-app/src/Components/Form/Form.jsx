import React, { useContext, useRef } from "react";
import './Form.css'
import { IoMdAdd } from "react-icons/io";
import { appContext } from "../../context/Context";
import { IoIosExit } from "react-icons/io";

const Form = () => {

    const { setOpenAddForm , setCreatPlace , creatPlace, handleTodoTaskPlace} = useContext(appContext);

    const titleRef = useRef();
    const paraRef = useRef();
    const dateRef = useRef();

    function handleSubmit(event){
        event.preventDefault();
        setOpenAddForm(false);
    }

    function handleCreatBtn(){
      const title = titleRef.current.value;
      const para = paraRef.current.value;
      const dueDate = dateRef.current.value;
      handleTodoTaskPlace(title , para , dueDate);
    }


  return (
    <div className="add-todo-form">
      <form onSubmit={(event)=>handleSubmit(event)}>
        <div className="form-headline">
        <h4>Creat a Task</h4>
        <div onClick={()=>setOpenAddForm(false)} className="cancel-form-btn">
        <IoIosExit />
        </div>
        </div>
        <div className="input-box">
          <p htmlFor="#">Title</p>
          <input type="text" placeholder="eg.have to do study" ref={titleRef} required/>
        </div>
        <div className="textarea-box">
          <p htmlFor="#">Description</p>
          <textarea placeholder="eg.have to do study" ref={paraRef} required></textarea>
        </div>
        <div className="input-box">
          <p htmlFor="#">Date</p>
          <input type="date" ref={dateRef} required/>
        </div>
        <div className="check-box">
          <p>Toggle Completed</p>
          <input onClick={()=>setCreatPlace('completed')} type="checkbox"/>
        </div>
        <div className="check-box">
          <p>Toggle Important</p>
          <input onClick={()=>setCreatPlace('important')} type="checkbox"/>
        </div>
        <div className="form-creat-btn">
            <button onClick={()=>{handleCreatBtn()}}><IoMdAdd /> Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
