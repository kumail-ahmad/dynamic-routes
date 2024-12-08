import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

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

  const toggleFinished = (params) => {
    setshowFinished(!showFinished);
  };

  const handleEdit = (e, id) => {
    // console.log(e, id);
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
      <div className="md:container md:mx-auto my-5 rounded-xl p-5 bg-gray-200 min-h-[80vh] md:w-1/2">
        <h1 className="font-bold text-center text-3xl">
          iPlan-Plan your activities at one place
        </h1>
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <div className="flex">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              className=" rounded-md w-full"
            />
            <button
              onClick={handleAdd}
              disabled={todo.length < 3}
              className="disabled:bg-gray-400 bg-gray-700 hover:bg-gray-900 p-2 py-1 text-sm font-bold text-white rounded-md mx-6"
            >
              Save
            </button>
          </div>
        </div>
        <input
          onChange={toggleFinished}
          type="checkbox"
          checked={showFinished}
        />
        <span>Show Finished ({todos.length})</span>
        <div className="hr my-3 h-[2px] opacity-40 bg-black "></div>
        <h2 className="text-lg font-bold">Your todos</h2>
        <div className="todos">
          {todos.length === 0 && (
            <div className="m-5">No Todos to display </div>
          )}
          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div key={item.id} className="todo flex  my-3 justify-between">
                  <div className="Both-together flex gap-5">
                    <input
                      name={item.id}
                      type="checkbox"
                      checked={item.isCompleted}
                      className="checkbox"
                      onChange={handleCheckbox}
                      id=""
                    />
                    <div
                      className={`${
                        item.isCompleted ? "line-through " : ""
                      }md:w-full     sm:w-1/2    flex items-center justify-between overflow-hidden truncate`}
                    >
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons flex gap-2 h-full">
                    <button
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                      className=" bg-gray-500 hover:bg-gray-900 p-3 py-2 text-sm font-bold text-white rounded-md mx-1"
                    >
                      <MdModeEdit />
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="bg-gray-500 hover:bg-gray-900 p-3 py-2 text-sm font-bold text-white rounded-md mx-1"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
