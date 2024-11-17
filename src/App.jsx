import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"


function App() {
  const todos = [
    {input: "Hello! Add your first todo!", completed: true},
    {input: "Get the groceries!", completed: false},
    {input: "Learn how to Web Design", completed: false},
    {input: "Say hi to your friends!", completed: true},
  ]
  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos}/>
      <TodoList todos={todos}/>
      <TodoInput />
    </>
  )
}

export default App
