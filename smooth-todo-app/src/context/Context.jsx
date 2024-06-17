import { createContext, useState } from "react";

export const appContext = createContext();

function ContextStorage({ children }) {
  let [openAddForm, setOpenAddForm] = useState(false);

  let [completeTask, setCompleteTask] = useState(false);

  let [homeTodoList, setHomeTodoList] = useState([]);
  let [importantTodoList, setImportantTodoList] = useState([]);
  let [completeTodoList, setCompleteTodoList] = useState([]);
  let [doitTodoList, setDoitTodoList] = useState([]);

  let [creatPlace, setCreatPlace] = useState("");

  const handleTodoTaskPlace = (title, para, dueDate) => {
    if (creatPlace === "important") {
      const newData = [
        {
          title: title,
          para: para,
          dueDate: dueDate,
        },
        ...importantTodoList,
      ];
      setImportantTodoList(newData);
    } else if (creatPlace === "completed") {
      const newData = [
        {
          title: title,
          para: para,
          dueDate: dueDate,
        },
        ...completeTodoList,
      ];
      setCompleteTodoList(newData);
    }
    const newData = [
      {
        title: title,
        para: para,
        dueDate: dueDate,
      },
      ...homeTodoList,
    ];
    setHomeTodoList(newData);
    handleDoitPage(title , para , dueDate);
    setCreatPlace('');
  };

  const handleDoitPage = (title , para , dueDate) =>{
    if(creatPlace !== "completed"){
      const newData = [
        {
          title: title,
          para: para,
          dueDate: dueDate,
        },
        ...doitTodoList,
      ];
      setDoitTodoList(newData);
    }
  }

  const values = {
    openAddForm,
    setOpenAddForm,
    completeTask,
    setCompleteTask,
    homeTodoList,
    setHomeTodoList,
    importantTodoList,
    setImportantTodoList,
    completeTodoList,
    setCompleteTodoList,
    doitTodoList,
    setDoitTodoList,
    creatPlace,
    setCreatPlace,
    handleTodoTaskPlace
  };

  return <appContext.Provider value={values}>{children}</appContext.Provider>;
}

export default ContextStorage;
