import "./RightComponent.css";
import { Component } from "react";
export default class RightComponent extends Component {
  render() {
    const { selected, todos } = this.props;
    const currentVal = todos.length > 0 ? todos[selected] : {};
    return (
      <div className="right-container">
        {todos.length > 0 && (
          <>
            <h2>{currentVal.title}</h2>

            <div>
              <h4>Entries</h4>
              {currentVal.entries.map((item, index) => (
                <div key={index} className="task-item">
                  {item}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}
