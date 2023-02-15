import React, { Fragment } from 'react';

function RightBoard(props) {
  // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  const dataToDisplayArr = Object.keys(props.dataToDisplay).map((key, i) => (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <Fragment key={i}>
      <div
        onClick={() => props.setCurrentTodo(key)}
        className="databox fade-in"
      >
        <p className="text-cutoff">{props.dataToDisplay[key]}</p>
      </div>
    </Fragment>
  ));

  return <div className="right-board">{dataToDisplayArr}</div>;
}

export default RightBoard;
