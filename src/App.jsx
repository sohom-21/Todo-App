import { useState } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"


function App() {
  
  const [todos, setTodos] = useState([
    {
      input : 'Hello! Add your First todo!',
      completed:true
    },
    {
      input : 'Get the groceries!',
      completed:false
    },
    {
      input: 'Learn how to web design',
      completed:false,
    },
    {
      input:'Say hi to Gran gran',
      completed:false
    }
  ])
  const [tabs, setTabs] = useState("All");

  function HandleAddTodo (newTodo){
    const newTodos = [...todos, {input: newTodo, completed: false}]
    setTodos(newTodos)
  }

  function HandleDeleteTodo (index){
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  function HandleCompleteTodo (index){
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }
  function HandleEditTodo (index, newTodo){
    const newTodos = [...todos]
    newTodos[index].input = newTodo
    setTodos(newTodos)
  }
  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos}  tabs={tabs} setTabs={setTabs}/>
      <TodoList todos={todos} tabs={tabs}/>
      <TodoInput HandleAddTodo={HandleAddTodo} />
    </>
  )
}

export default App

// const todos = [
  //   {input: "Hello! Add your first todo!", completed: true},
  //   {input: "Get the groceries!", completed: false},
  //   {input: "Learn how to Web Design", completed: false},
  //   {input: "Say hi to your friends!", completed: true},
  // ]