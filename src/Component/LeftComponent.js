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

export default function LeftComponent() {
  function toDo() {
    // const title = generateRandomArray(5);
    const random = Math.floor(Math.random() * title.length);
    return title.map((item, index) => {
      return (
        <div
          key={index}
          className={`todo-item ${index === random ? "selected" : ""}`}
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
