import React, { useContext } from "react";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Home from "./Pages/Home/Home.jsx";
import "./App.css";
import { appContext } from "./context/Context.jsx";
import Form from "./Components/Form/Form.jsx";
import { Routes , Route } from "react-router-dom";
import Important from "./Pages/Important/Important.jsx";
import Complete from "./Pages/Complete/Complete.jsx";
import Doit from "./Pages/Doit/Doit.jsx";
import { Link } from "react-router-dom";

const App = () => {
  const { openAddForm } = useContext(appContext);

  return (
    <div className="app-container">
      {openAddForm === true && <Form />}
      <Sidebar />
      <div className="app-second-box">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/important' element={<Important />}/>
          <Route path='/completed' element={<Complete />}/>
          <Route path='/doit' element={<Doit />}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
