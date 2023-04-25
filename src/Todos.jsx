import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import TodoCards from "./TodoCards";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);

  return (
    <div>
      {todos ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todos.slice(0, 20).map((todo) => (
            <TodoCards key={todo.id} todo={todo} />
          ))}
        </div>
      ) : (
        <CircularProgress color="inherit" />
      )}
    </div>
  );
}

export default Todos;
