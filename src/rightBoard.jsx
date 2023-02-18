import React, { Fragment } from 'react';
import rightArrow from '../resourses/icons/right-arroww.png';
import leftArrow from '../resourses/icons/left-arroww.png';

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

  // return <div className="right-board">{dataToDisplayArr}</div>;
  return (
    <div className="right-board">
      <div className="databoxes">{dataToDisplayArr}</div>
      <div className="pagination">
        <div className="prev">
          <img src={leftArrow} alt="right arrow" />
        </div>
        <div className="next">
          <img src={rightArrow} alt="right arrow" />
        </div>
      </div>
    </div>
  );
}

export default RightBoard;
