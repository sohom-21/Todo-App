import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos } = props;
  const tabs = "All"
  const filteredTodosList= () =>{
         if(tabs === "All"){
            return todos;
         }
         else if(tabs === 'Completed'){
            return todos.filter((todo) => todo.completed === true)
         }
         else if(tabs === 'Open'){
               return todos.filter((todo) => todo.completed === false)    
         }
  }
  return (
    <>
      {filteredTodosList.map((todo, todoIndex) => {
        return <TodoCard 
        key={todoIndex} 
        todoIndex={todoIndex} 
        todo={todo} />;
      })}
    </>
  );
}
