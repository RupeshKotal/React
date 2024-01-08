import { useEffect, useState } from "react";


function App(){

  const [todos,setTodos] =useState([])

  useEffect(()=>{
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos").then( async (res)=>{
      const jsom = await res.json();

      setTodos(jsom.todos)
    })
    },1000)
  },[])

  return(
   <div>
      {
        todos.map((to)=>(
          <Todos key={to.id} title={to.title} description={to.description}></Todos>
        ))
      }


   </div>
  )
}

function Todos({title,description}){
  return(
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  )
}

export default App;