import "./LeftComponent.css";

const title = [
  {
    id: 1,
    title: "ToDo 1",
  },
  {
    id: 2,
    title: "ToDo 2",
  },
  {
    id: 3,
    title: "ToDo 3",
  },
  {
    id: 4,
    title: "ToDo 4",
  },
  {
    id: 5,
    title: "ToDo 5",
  },
  {
    id: 6,
    title: "ToDo 6",
  },
  {
    id: 7,
    title: "ToDo 7",
  },
  {
    id: 8,
    title: "ToDo 8",
  },
  {
    id: 9,
    title: "ToDo 9",
  },
  {
    id: 10,
    title: "ToDo 10",
  },
];

export default function LeftComponent() {
  function toDo() {
    return title.map((item) => {
      return (
        <div key={item.id} className="todo-item">
          {item.title}
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
