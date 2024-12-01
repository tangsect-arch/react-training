import { Component } from "react";
import "./App.css";
import RightComponent from "./components/RghtComponent";
import LeftComponent from "./components/LeftComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      todos: [
        {
          id: 1,
          title: "Work",
          entries: [
            "Complete project report",
            "Attend team meeting",
            "Reply to client emails",
            "Finish documentation",
          ],
        },
        {
          id: 2,
          title: "Personal",
          entries: [
            "Call family",
            "Buy groceries",
            "Clean the house",
            "Schedule doctor's appointment",
          ],
        },
        {
          id: 3,
          title: "Fitness",
          entries: [
            "Morning run",
            "Yoga session",
            "Gym workout",
            "Track calories",
          ],
        },
        {
          id: 4,
          title: "Shopping",
          entries: [
            "Buy new shoes",
            "Pick up groceries",
            "Order phone accessories",
            "Buy a gift for a friend",
          ],
        },
        {
          id: 5,
          title: "Study",
          entries: [
            "Read chapter 5",
            "Complete assignment",
            "Review notes",
            "Prepare for exam",
          ],
        },
        {
          id: 6,
          title: "Chores",
          entries: [
            "Wash dishes",
            "Take out trash",
            "Vacuum the floor",
            "Laundry",
          ],
        },
        {
          id: 7,
          title: "Entertainment",
          entries: [
            "Watch a movie",
            "Play video games",
            "Read a book",
            "Attend a concert",
          ],
        },
      ],
      useLocalStorage: false,
    };
  }

  componentDidMount() {
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

  toggleStorage = (event) => {
    this.setState({ useLocalStorage: event.target.checked }, () => {
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
