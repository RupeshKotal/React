function AddToDo(){
   return <div className="container text-center">
        <div className="row">
          <div className="col-6"><input type="text" placeholder="Enter to do here"/></div>
          <div className="col-4"><input type="text" placeholder="description"/></div>
          <div className="col-2"><button type="button" className="btn btn-success">Add</button></div>
        </div>
        </div> 
}


export default AddToDo;