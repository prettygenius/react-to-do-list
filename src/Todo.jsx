import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

function Todo() {
  const { id } = useParams();
  const [todoInfo, setTodosInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const resTodo = res.data;
        setTodosInfo(resTodo);
      });
  }, [id]);
  const { id: todoId, userId, title, completed } = todoInfo || {};
  return (
    <div>
      {todoInfo ? (
        <div>
          <h1> {`Title: ${title}`}</h1>
          <h1> {`User Id: ${userId}`}</h1>
          <h1> {`Id: ${todoId}`}</h1>
          <h1> {`completed: ${completed}`}</h1>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default Todo;
