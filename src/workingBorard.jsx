import React from 'react'
import RightBoard from './rightBoard';
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
        
        // chek if the todos is empty || is this the first value
        if(Object.keys(todos).length === 0) {
          const todoId = nanoid()

          return ({
            ...storedData.current,
            [todoId]: currentTodo.current.value
          })
          
          // return ({
            //   [todoId]:currentTodo.current.value
            // })
          } 
          
          // if it's not the first value
          const todoId = nanoid()
          
          return ({
            ...oldVal,
            [todoId]:currentTodo.current.value
          })
        
      })
}

  // this logic is for updating the curent state with the existing data stored and 
  // is used to det state combining existing and new data
  const existingData = JSON.parse(localStorage.getItem('todos'))
  if(existingData){
    if(Object.keys(existingData).length > 0) {
      storedData.current = existingData
    }
  }

  // if data exists in todos(state) then give it to rightBoard TO DISPLAY them
  // if not : give data in existingData
  let dataToDisplay = []
  if(Object.keys(todos).length > 0) {
    dataToDisplay = Object.values(todos).map(el => el)
  } else if(existingData){
    dataToDisplay = Object.values(existingData).map(el => el) 
  }

useEffect(() => {
  // check if todos is empty when refreshing the page.(if yes : don't setItem, 
  // bcz it will overwrite and remove all the data from localStorage)
  if(Object.keys(todos).length > 0) {
    localStorage.setItem('todos', JSON.stringify(todos))

    //clear the input field
    currentTodo.current.value = ''
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
              <RightBoard dataToDisplay = {dataToDisplay}/>
          </div>
    </div>
  )
}

export default WorkingBorard