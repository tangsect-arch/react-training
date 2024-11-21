import { Component } from "react";
import "./App.css";
import RightComponent from "./components/RghtComponent";
import LeftComponent from "./components/LeftComponent";

class App extends Component {
  render() {
    return (
      <div className="container">
        <LeftComponent />
        <RightComponent />
      </div>
    );
  }
}

export default App;
