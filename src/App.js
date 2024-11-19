import { Component } from "react";
import "./App.css";
import Box from "./component/Box";

// function App() {
//   return <div className="container">Hello World</div>;
// }

export default class App extends Component {
  render() {
    return (
      <>
        <div className="container">Hello World</div>
        <Box />
      </>
    );
  }
}

// export default App;
