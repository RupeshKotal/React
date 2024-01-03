import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Allitem from "./components/Allitem";
import Error from "./components/Error";

function App() {
  // let foodItem= []
 let foodItem = ["Dal","rice","vegetable","Roti","Salad"]

  return (
    <>
    <h1>Healty Food</h1>
       <Error item = {foodItem}></Error>
      <Allitem menu={foodItem}></Allitem>
    </>
  );
}

export default App;
