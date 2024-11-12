import "./App.css";
import { ComponentA } from "./component/ComponentA";
import { ComponentB } from "./component/ComponentB";

function App() {
  return (
    <>
      <h1>Parent</h1>
      <ComponentA />
      <ComponentB />
    </>
  );
}

export default App;
