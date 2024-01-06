function Todos({Data}) {
    return(
     <>
  {
    Data.map((todos) => {
    //  <div key={todos.id} className="container">
    //     <div className="row">
    //       <div className="col-6">{todos.title}</div>
    //       <div className="col-4">{todos.description}</div>
    //       <div className="col-2">
    //         <button type="button"className="btn btn-danger">
    //           {todos.status == true?"Done":"Mark as done"}
    //         </button>
    //       </div>
    //     </div>
    //   </div>;
    

    <div>
        <div>{todos.title}</div>
        <div className="col-4">{todos.description}</div>
        <button type="button"className="btn btn-danger">
    //           {todos.status == true?"Done":"Mark as done"}
    //         </button>
    </div>
    })
  }
  </>
    )
}


export default Todos;
