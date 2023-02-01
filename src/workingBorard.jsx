import React from 'react'
import { nanoid } from 'nanoid'

import { useState,useEffect,useRef } from 'react';

function WorkingBorard() { 

  const currentTodo = useRef('')
  
  const addTask = () => {
    console.log(currentTodo.current.value);
  }

  
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