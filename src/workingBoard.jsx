import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { nanoid } from 'nanoid';
import RightBoard from './rightBoard';

function WorkingBorard() {
  const [todos, setTodos] = useState({});
  const [activeTodo, setactiveTodo] = useState('');
  const [deleted, setdeleted] = useState(false);

  const currentTodo = useRef('');
  const storedData = useRef({});

  const addTask = () => {
    // check if todo field is empty, if so : return

    if (currentTodo.current.value === '') return;

    // create todo's object and add currentTodo
    setTodos((oldVal) => {
      // chek if the todos is empty || is this the first value
      if (Object.keys(todos).length === 0) {
        // eslint-disable-next-line no-shadow
        const todoId = nanoid();

        return {
          ...storedData.current,
          [todoId]: currentTodo.current.value,
        };

        // return ({
        //   [todoId]:currentTodo.current.value
        // })
      }

      // if it's not the first value
      const todoId = nanoid();

      return {
        ...oldVal,
        [todoId]: currentTodo.current.value,
      };
    });
  };

  const delTask = () => {
    // 1.check if the activeTodo is empty
    if (!activeTodo) {
      // eslint-disable-next-line no-console
      console.log('nothing to delete');
      return;
    }

    // 2.delete the current todo in activeTodo from a) todos state b)storedData
    // a)
    if (Object.keys(todos).length > 0) {
      const oldStoredData = todos;
      delete oldStoredData[activeTodo];
      setTodos(oldStoredData);
      localStorage.setItem('todos', JSON.stringify(todos));
      setdeleted(true);
      currentTodo.current.value = '';
    } else {
      const oldStoredData = storedData.current;
      delete oldStoredData[activeTodo];
      storedData.current = oldStoredData;
      localStorage.setItem('todos', JSON.stringify(storedData.current));
      setdeleted(true);
      currentTodo.current.value = '';
    }
  };

  // this logic is for updating the curent state with the existing data stored in localStorage and
  // is used to set state combining existing and new data
  const existingData = JSON.parse(localStorage.getItem('todos'));
  if (existingData) {
    if (Object.keys(existingData).length > 0) {
      storedData.current = existingData;
    }
  }

  // if data exists in todos(state) then give it to rightBoard TO DISPLAY them
  // if not : give data from existingData
  let dataToDisplay = [];
  if (Object.keys(todos).length > 0) {
    // dataToDisplay = Object.values(todos)
    dataToDisplay = todos;
  } else if (existingData) {
    // dataToDisplay = Object.values(existingData)
    dataToDisplay = storedData.current;
  }

  // set current active todo
  const setCurrentTodo = (clickedTodo) => {
    // update setactiveTodo to current todo
    setactiveTodo(clickedTodo);
  };

  useEffect(() => {
    // check if todos is empty when refreshing the page.(if yes : don't setItem,
    // bcz it will overwrite and remove all the data from localStorage)
    if (Object.keys(todos).length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
      // clear the input field
      currentTodo.current.value = '';
    }
  }, [todos]);

  useEffect(
    () => () => {
      setdeleted(false);
    },
    [deleted]
  );

  // update the textarea display to current activeTodo
  useEffect(() => {
    if (Object.keys(todos).length > 0) {
      currentTodo.current.value = todos[activeTodo];
    } else {
      currentTodo.current.value = storedData.current[activeTodo] || '';
    }
  }, [activeTodo]);

  // console.log(todos,deleteInitiated);

  return (
    <div className="workingBorard">
      <div className="board">
        <div className="left-board">
          <div className="header-section--left">
            <div className="header-name">TODO</div>
            <div className="bttns">
              <a onClick={() => addTask()} className="add button" >
                Add
              </a>
              <a onClick={() => delTask()} className="del button" >
                Del
              </a>
            </div>
          </div>
          <div className="sentance">
            <p className="text">These are yet to be done...</p>
          </div>
          <div className="inputArea">
            <textarea
              ref={currentTodo}
              name="taskInput"
              id="taskInput"
              cols="30"
              rows="10"
              placeholder="start here ..."
            />
          </div>
        </div>
        <RightBoard
          setCurrentTodo={setCurrentTodo}
          dataToDisplay={dataToDisplay}
        />
      </div>
    </div>
  );
}

export default WorkingBorard;
