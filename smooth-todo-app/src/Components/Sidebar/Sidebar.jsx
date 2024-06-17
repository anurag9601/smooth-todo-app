import React, { useState } from "react";
import "./Sidebar.css";
import user_icon from "../../assets/images/user.png";
import { AiFillHome } from "react-icons/ai";
import { MdMenuBook } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { RiTodoFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  let [activeBar, setActiveBar] = useState("");

  let navigate = useNavigate();

  return (
    <div className="sidebar-container">
      <div className="user-box">
        <div className="user-icon">
          <img src={user_icon} alt="" />
        </div>
        <h3>Anurag.M</h3>
      </div>
      <div className="side-menu">
        <ul>
          <div
            onClick={() => {setActiveBar("home"), navigate('/')}}
            className={`side-bar ${activeBar === "home" ? "active" : ""}`}
          >
            <li className={`${activeBar === "home" ? "active-li" : ""}`}>
              <AiFillHome />
              Home
            </li>
            {activeBar === "home" && <hr />}
          </div>
          <div
            onClick={() => {setActiveBar("important") , navigate('/important')}}
            className={`side-bar ${activeBar === "important" ? "active" : ""}`}
          >
            <li className={`${activeBar === "important" ? "active-li" : ""}`}>
              <MdMenuBook />
              Important
            </li>
            {activeBar === "important" && <hr />}
          </div>
          <div
            onClick={() => {setActiveBar("complete"), navigate('/completed')}}
            className={`side-bar ${activeBar === "complete" ? "active" : ""}`}
          >
            <li className={`${activeBar === "complete" ? "active-li" : ""}`}>
              <LuListTodo />
              Completed
            </li>
            {activeBar === "complete" && <hr />}
          </div>
          <div
            onClick={() => {setActiveBar("doit") , navigate('/doit')}}
            className={`side-bar ${activeBar === "doit" ? "active" : ""}`}
          >
            <li className={`${activeBar === "doit" ? "active-li" : ""}`}>
              <RiTodoFill />
              Do it now
            </li>
            {activeBar === "doit" && <hr />}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
