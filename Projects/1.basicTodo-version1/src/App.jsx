import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
// import Todo1 from "./components/Todo1";
// import Todo2 from "./components/Todo2";
import "./App.css";
import { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [data,setdata] = useState([])

  fetch('http://localhost:3000/Todos').then(async(res)=>{
    const json = await res.json()
    setdata(json.get)
  })



  return (
    <center className="">
      <AppName></AppName>
      <AddToDo></AddToDo>
      {/* <div className="todo-container"> */}
      {/* <Todo1></Todo1>
      <Todo2></Todo2> */}

    <Todos Data = {data}></Todos>
      {/* </div> */}
     
    </center>
  );
}

export default App;
