import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function TodoCards({ todo }) {
  const { id, title, completed } = todo;
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        backgroundColor: "red",
        margin: "10px",
        padding: "30px",
        width: "200px"
      }}
      onClick={() => navigate(`/todo/${id}`)}
    >
      <CardContent>
        <Typography>
          <h4>Title: {title}</h4>
        </Typography>
        <Typography>
          <h5>Completed: {`${completed}`}</h5>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TodoCards;
