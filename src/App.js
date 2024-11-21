import { Component } from "react";
import "./App.css";
import LeftComponent from "./component/LeftComponent";
import RightComponent from "./component/RghtComponent";

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
