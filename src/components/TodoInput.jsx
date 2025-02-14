import { useState } from "react"

export function TodoInput(props) {
         const {handleAddTodo} = props

         const [inputvalue, setInputValue] = useState('')
         
         return (
                  <div className="input-container">
                           <input value={inputvalue} onChange={(e)=>{setInputValue(e.target.value)}} type="text" placeholder="Add task"/>
                           <button onClick={()=>{
                                    if(!inputvalue) {return}
                                    handleAddTodo(inputvalue)
                                    setInputValue('')
                           }}>
                           <i className="fa-solid fa-plus"></i>
                           </button>
                  </div>
         )
}