import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Allitem from "./components/Allitem";
import Error from "./components/Error";
import Container from "./components/container";

function App() {
  // let foodItem= []
 let foodItem = ["Dal","rice","vegetable","Roti","Salad"]

  return (
   <Container>
    <h1>Healty Food</h1>
       <Error item = {foodItem}></Error>
      <Allitem menu={foodItem}></Allitem>
      </Container>
  );
}

export default App;
