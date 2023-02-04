import React from 'react'
import { nanoid } from 'nanoid'

import { useState,useEffect,useRef } from 'react';

function WorkingBorard() {
  
  const [todos,setTodos] = useState({})
  const currentTodo = useRef('')
  const storedData = useRef({})


    const addTask = () => {
      // check if todo field is empty, if so : return
      if(currentTodo.current.value === '' ) return
      
      // create todo's object and add currentTodo
      setTodos((oldVal) => {

        // if stored data exists, 
        // if(Object.keys(todos).length > 0){
        //   const todoId = nanoid()
          
        //  setTodos((oldVal) => {

        //   return ({

        //   })
        //  })
        // }
        
        // chek if the todos is empty || is this the first value
        if(Object.keys(todos).length === 0) {
          const todoId = nanoid()

          //test
          return ({
            ...storedData.current,
            [todoId]: currentTodo.current.value
          })
          
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
      
      console.log('ADD');
}

useEffect(() => {
  const existingData = JSON.parse(localStorage.getItem('todos'))
 if(existingData){
  if(Object.keys(existingData).length > 0) {
    console.log('data exists',existingData);
    storedData.current = existingData
  }
 }

  // check if todos is empty when refreshing the page.(if yes : don't setItem, 
  // bcz it will overwrite and remove all the data from localStorage)
  if(Object.keys(todos).length > 0) {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

},[todos])


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