import React, {useState, useEffect} from 'react'

export default function Count(){

    const [LastIndex, setIndex] = useState("0")
    const [input, setInput] = useState("");
    const [todolist, setTodolist] = useState ([
        "toto",
        "faire la vaiselle",
        "devenir millionaire"
    ])
    function addTodo() {
        setTodolist([...todolist, input]);
      }

    function deleteTodo(removeIndex){
        setTodolist(todolist.filter(function(item, index) { 
            if (index !== removeIndex) {
              return item;
            }
          }));
    }

    useEffect(() => {
        localStorage.setItem("Todos", todolist)
        setIndex(todolist.length -1)
    }, [todolist])


    return (
        <div>
          <input value={input} onInput={e => setInput(e.target.value)}/>
          <button onClick={() => addTodo()}>Add</button>
          <h1>Todo :</h1>
          { todolist.map((item, index) => {
            return (
              <div key={index}>
                <p style={{ color: index === LastIndex ? "red": ""}} >{index} {item} <span onClick={() => deleteTodo(index)}>Supprimer</span></p>
              </div>
            )
          })}
        </div>
      );
    }
    