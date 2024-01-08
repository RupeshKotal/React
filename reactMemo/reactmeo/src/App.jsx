import { useState, memo } from "react";

function App() {
  const [count, setcount] = useState("");

  function addcount() {
    setcount(Math.random());
  }

  return (
    <div>
      <button onClick={addcount}>click</button>
      <Header title={count}></Header>
      <Header title="hello"></Header>
      <Header title="world"></Header>
    </div>
  );
}

const Header = memo(function Header({ title }) {
  return (
    <>
      <p>{title}</p>
    </>
  );
});

export default App;
