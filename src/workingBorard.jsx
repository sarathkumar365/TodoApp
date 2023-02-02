import React from 'react'
import { nanoid } from 'nanoid'

import { useState,useEffect,useRef } from 'react';

function WorkingBorard() {

    const [todos,setTodos] = useState({})
    const [storedData,setstoredData] = useState({})

    const currentTodo = useRef('')

    const addTask = () => {
    // check if todo field is empty, if so : return
    if(currentTodo.current.value === '' ) return

    // create todo's object and add currentTodo
    setTodos((oldVal) => {
        
        // chek if the todos is empty || is this the first value
        if(Object.keys(todos).length === 0) {
            const todoId = nanoid()

            return ({
                [todoId]:currentTodo.current.value
            })
        } 
        
        // if it's not the first value
        const todoId = nanoid()

        return ({
            ...oldVal,
            [todoId]:currentTodo.current.value
        })
        
    })
        
}

useEffect(()=> {
  // get locally stored data, if any
  // const data = JSON.parse(localStorage.getItem('todos'))
  // setstoredData(data)
  console.log('effect');


    // localStorage.setItem('todos',JSON.stringify(todos))
},[todos])

console.log('l');
return (
    <div className='workingBorard'>
          <div className="board">
              <div className="left-board">
                <div className="header-section--left">
                  <div className="header-name">TODO</div>
                    <div className="bttns">
                      <a onClick={()=> addTask()} className='add' href="#" >Add</a>
                    </div>           
                </div>
                <div className="sentance">
                      <p className='text'>These are yet to be done...</p>
                </div>
                <div className="inputArea">
                  <textarea ref={currentTodo} name="taskInput" id="taskInput" cols="30" rows="10" placeholder='start here ...'></textarea>
                </div>
              </div>
              <div className="right-board">right</div>
          </div>
    </div>
  )
}

export default WorkingBorard