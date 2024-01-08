import { useState } from "react";

function App() {
  let counter = 4;

  const [todos, setTodos] = useState([
    {
      id:1,
      title:"go to gym",
      description:"go to gym at 9 to 10"
    },{
      id:2,
      title:"go to class",
      description:"go to gym at 9 to 10"
    },{
      id:3,
      title:"go to ofc",
      description:"go to gym at 9 to 10"
    }
  ]);


  function addTodo() {
    setTodos([...todos,{
      id:counter++,
      title:"go to mall",
      description:Math.random()
    }])
  }

  return (
    <div>
 
   <button onClick={addTodo}>Add a todo</button>

      {
        todos.map((todo) =>(
          <TodosComponent title={todo.title} description={todo.description}/>
        )
         
        )
      }
    </div>
  );
}


function TodosComponent({ title ,description}) {
  return (
   <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
   </div>
  );
};

export default App;
