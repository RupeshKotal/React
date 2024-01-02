import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import Todo1 from "./components/Todo1";
import Todo2 from "./components/Todo2";
import "./App.css";

function App() {
  return (
    <center class="">
      <AppName></AppName>
      <AddToDo></AddToDo>
      <div class="todo-container">
      <Todo1></Todo1>
      <Todo2></Todo2>
      </div>
     
    </center>
  );
}

export default App;
