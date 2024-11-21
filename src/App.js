import { Component } from "react";
import "./App.css";
import RightComponent from "./components/RghtComponent";
import LeftComponent from "./components/LeftComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      title: [],
    };
  }

  componentDidMount() {
    this.setState({
      title: [
        "Work",
        "Personal",
        "Fitness",
        "Shopping",
        "Study",
        "Chores",
        "Entertainment",
      ],
    });
  }

  handleItemChange = (selected) => {
    this.setState({ selected });
  };

  render() {
    return (
      <div className="container">
        <LeftComponent
          selected={this.state.selected}
          titles={this.state.title}
          onItemChange={this.handleItemChange}
        />
        <RightComponent selected={this.state.selected} />
      </div>
    );
  }
}

export default App;
