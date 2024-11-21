import { Component } from "react";
import "./LeftComponent.css";

export default class LeftComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: [
        "Work",
        "Personal",
        "Fitness",
        "Shopping",
        "Study",
        "Chores",
        "Entertainment",
      ],
      selected: null,
    };
  }

  componentDidMount() {
    const randomIndex = Math.floor(Math.random() * this.state.title.length);
    this.setState({ selected: randomIndex });
  }

  render() {
    return (
      <div className="left-container">
        <h2>Task List</h2>
        <div>
          {this.state.title.map((item, index) => (
            <div
              key={index}
              className={`todo-item ${
                index === this.state.selected ? "selected" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
