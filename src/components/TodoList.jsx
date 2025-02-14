import { TodoCard } from "./TodoCard";
import PropTypes from 'prop-types';
export function TodoList(props) {
  const { todos, tabs } = props; // Receive tabs state

  console.log(todos);
  const tabs = "All"
  const filteredTodosList = () => {
    if (tabs === "All") {
      return todos;
    }
    else if (tabs === 'Completed') {
      return todos.filter((todos) => todos.completed === true);
    }
    else if (tabs === 'Open') {
      return todos.filter((todos) => todos.completed === false);
    }
  }
  return (
    <>
      {filteredTodosList().map((todo, todoIndex) => {
        return (<TodoCard
          key={todoIndex}
          todo={todo} />);
      })}
    </>
  );
}
