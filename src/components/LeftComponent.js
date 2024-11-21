import { Component } from "react";
import "./LeftComponent.css";

export default class LeftComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selected, titles } = this.props;
    return (
      <div className="left-container">
        <h2>Task List</h2>
        <div>
          {titles.map((item, index) => (
            <div
              key={index}
              className={`todo-item ${index === selected ? "selected" : ""}`}
              onClick={() => this.props.onItemChange(index)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
