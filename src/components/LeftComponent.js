import { Component } from "react";
import "./LeftComponent.css";
import Modal from "./Modal";

export default class LeftComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currentTodo: null,
      newTitle: "",
      newEntries: "",
      isAdd: false,
    };
  }

  openModal = (todo) => {
    this.setState({
      modalVisible: true,
      currentTodo: todo ?? [],
      newTitle: todo?.title ?? "",
      newEntries: todo?.entries ?? [],
      isAdd: todo?.title ? false : true,
    });
  };

  closeModal = () => {
    this.setState({
      modalVisible: false,
      currentTodo: null,
      newTitle: "",
      newEntries: "",
      isAdd: false,
    });
  };

  handleSaveChanges = () => {
    if (this.state.newTitle.trim() && this.state.newEntries.length > 0) {
      !this.state.isAdd
        ? this.props.handleEditTodo(
            this.state.currentTodo.id,
            this.state.newTitle,
            this.state.newEntries
          )
        : this.props.handleAddTodo(this.state.newTitle, this.state.newEntries);

      this.closeModal();
    }
  };

  handleTitleChange = (event) =>
    this.setState({ newTitle: event.target.value });

  handleEntriesChange = (event, index) => {
    const updatedEntries = [...this.state.newEntries];
    updatedEntries[index] = event.target.value;
    this.setState({ newEntries: updatedEntries });
  };

  handleAddEntry = () => {
    this.setState((prevState) => ({
      newEntries: [...prevState.newEntries, ""],
    }));
  };

  handleDeleteEntry = (index) => {
    const updatedEntries = [...this.state.newEntries];
    updatedEntries.splice(index, 1);
    this.setState({ newEntries: updatedEntries });
  };

  render() {
    const { selected, todos, handleStorageChange, localStorage } = this.props;
    const { modalVisible, newTitle, newEntries, currentTodo } = this.state;
    return (
      <div className="left-container">
        <h2>Todo List</h2>
        <div className="todo-button">
          <div className="storage-dropdown">
            <select
              onChange={handleStorageChange}
              value={localStorage === true ? "true" : "false"}
            >
              <option value="false">Session Storage</option>
              <option value="true">Local Storage</option>
            </select>
          </div>
          <button
            key={`add-button`}
            onClick={() => {
              this.openModal();
            }}
          >
            Add
          </button>
        </div>

        <div>
          {todos.length > 0 &&
            todos.map((item, index) => (
              <div
                className={`todo-item ${index === selected ? "selected" : ""}`}
              >
                <div
                  className="todo-title"
                  key={item.id}
                  onClick={() => this.props.onItemChange(index)}
                >
                  {item.title}
                </div>
                <div className="todo-button" key={`button-div ${item.id}`}>
                  <label
                    className="edit-label"
                    key={`edit ${item.id}`}
                    onClick={() => this.openModal(item)}
                  >
                    Edit
                  </label>
                  <label
                    className="delete-label"
                    key={`delete ${item.id}`}
                    onClick={() => this.props.handleDeleteTodo(item.id)}
                  >
                    Delete
                  </label>
                </div>
              </div>
            ))}
        </div>
        {modalVisible && (
          <Modal
            isAdd={this.state.isAdd}
            currentTodo={currentTodo}
            newTitle={newTitle}
            newEntries={newEntries}
            handleTitleChange={this.handleTitleChange}
            handleEntriesChange={this.handleEntriesChange}
            handleSaveChanges={this.handleSaveChanges}
            handleClose={this.closeModal}
            handleAddEntry={this.handleAddEntry}
            handleDeleteEntry={this.handleDeleteEntry}
            handleCheckboxChange={this.props.toggleStorage}
            isChecked={this.props.localStorage}
          />
        )}
      </div>
    );
  }
}
