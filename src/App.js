import { Component } from "react";
import "./App.css";
import RightComponent from "./components/RghtComponent";
import LeftComponent from "./components/LeftComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      todos: [],
      useLocalStorage: false,
      // isChecked: false,
    };
  }

  componentDidMount() {
    console.log(this.state.useLocalStorage);
    const storageKey = this.state.useLocalStorage ? "todos" : "todos_session";
    const savedTodos = JSON.parse(
      window[
        this.state.useLocalStorage ? "localStorage" : "sessionStorage"
      ].getItem(storageKey)
    );

    if (savedTodos) {
      this.setState({ todos: savedTodos });
    }
  }

  saveTodos = () => {
    const storageKey = this.state.useLocalStorage ? "todos" : "todos_session";
    window[
      this.state.useLocalStorage ? "localStorage" : "sessionStorage"
    ].setItem(storageKey, JSON.stringify(this.state.todos));
  };

  handleAddTodo = (newTitle, newEntries) => {
    this.setState(
      (prevState) => ({
        todos: [
          ...prevState.todos,
          {
            id:
              prevState.todos.length > 0
                ? prevState.todos[prevState.todos.length - 1].id + 1
                : 1,
            title: newTitle,
            entries: newEntries,
          },
        ],
      }),
      this.saveTodos
    );
  };

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  handleEditTodo = (id, updatedTitle, updatedEntries) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id
          ? { ...todo, title: updatedTitle, entries: updatedEntries }
          : todo
      ),
    });
  };

  toggleStorage = (params) => {
    this.setState(
      {
        useLocalStorage: params,
      },
      () => {
        console.log("State updated:", this.state.useLocalStorage);
        this.componentDidMount();
      }
    );
  };

  handleStorageChange = (event) => {
    this.setState({ useLocalStorage: JSON.parse(event.target.value) }, () => {
      this.componentDidMount();
    });
  };

  handleItemChange = (selected) => {
    this.setState({ selected });
  };

  render() {
    return (
      <div className="container">
        <LeftComponent
          selected={this.state.selected}
          todos={this.state.todos}
          onItemChange={this.handleItemChange}
          handleAddTodo={this.handleAddTodo}
          handleEditTodo={this.handleEditTodo}
          handleDeleteTodo={this.handleDeleteTodo}
          handleStorageChange={this.handleStorageChange}
          toggleStorage={this.toggleStorage}
          localStorage={this.state.useLocalStorage}
        />
        <RightComponent
          selected={this.state.selected}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
