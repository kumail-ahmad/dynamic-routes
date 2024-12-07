import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveTOLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleEdit = (e, id) => {
    console.log(e, id);
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveTOLS();
  };
  const handleDelete = (e, id) => {
    // console.log(id);
    let res = confirm("Do you really want to delete");
    if (res) {
      let index = todos.findIndex((item) => {
        return item.id === id;
      });
      let newTodos = todos.filter((item) => {
        return item.id !== id;
      });
      // newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos);
      saveTOLS();
    }
  };

  const handleAdd = () => {
    if (todo === "") {
      alert("Please enter a todo before saving!!!");
      return;
    }
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveTOLS();
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
    console.log(todos);
  };
  const handleCheckbox = (e) => {
    let id = e.target.name;
    // todos.filter()
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveTOLS();
  };
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-gray-200 min-h-[80vh] min-w-fit">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-[60vh] rounded-md"
          />
          <button
            onClick={handleAdd}
            className="bg-gray-500 hover:bg-gray-900 p-2 py-1 text-sm font-bold text-white rounded-md mx-6"
          >
            Save
          </button>
        </div>
        <h2 className="text-lg font-bold">Your todos</h2>
        <div className="todos">
          {todos.length === 0 && (
            <div className="m-5">No Todos to display </div>
          )}
          {todos.map((item) => {
            return (
              <div
                key={item.id}
                className="todo flex w-1/4 my-3 justify-between"
              >
                <div className="Both-together flex gap-5">
                  <input
                    name={item.id}
                    type="checkbox"
                    value={item.isCompleted}
                    className="checkbox"
                    onChange={handleCheckbox}
                    id=""
                  />
                  <div className={item.isCompleted ? "line-through" : ""}>
                    {item.todo}
                  </div>
                </div>
                <div className="buttons flex gap-2 h-full">
                  <button
                    onClick={(e) => {
                      handleEdit(e, item.id);
                    }}
                    className=" bg-gray-500 hover:bg-gray-900 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                    className="bg-gray-500 hover:bg-gray-900 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
