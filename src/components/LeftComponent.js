import "./LeftComponent.css";
// import { generateRandomArray } from "../Helpers/utils";
const title = [
  "Work",
  "Personal",
  "Fitness",
  "Shopping",
  "Study",
  "Chores",
  "Entertainment",
];

export default function LeftComponent({ setSelected, selected }) {
  function toDo() {
    return title.map((item, index) => {
      return (
        <div
          key={index}
          className={`todo-item ${index === selected ? "selected" : ""}`}
          onClick={() => setSelected(index)}
        >
          {item}
        </div>
      );
    });
  }

  return (
    <div className="left-container">
      <h2>Task List</h2>
      <div>{toDo()}</div>
    </div>
  );
}
