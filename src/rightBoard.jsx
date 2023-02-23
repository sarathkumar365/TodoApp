import React, { Fragment, useState } from 'react';
import Pagination  from './pagination';


function RightBoard(props) {
  const [currentPage,setcurrentPage] = useState(1)
  const [perPage,setperPage] = useState(5)

  const dataToDisplayArr = Object.keys(props.dataToDisplay).map((key, i) => (
    <Fragment key={i}>
      <div
        id='databox'
        onClick={() => props.setCurrentTodo(key)}
        className="databox fade-in"
      >
        <p className="text-cutoff">{props.dataToDisplay[key]}</p>
      </div>
    </Fragment>
  ));

  const lastPostIndex = currentPage * perPage;
  const firstPostIndex = lastPostIndex - perPage;

  const dataAfterPagination = dataToDisplayArr.slice(firstPostIndex, lastPostIndex);

  const next = () => {

    // calculate the number of total pages to display for all todos
    // eg. if total = 7, then pages required = 2 (coz each page displays 5 todos)
    // so when current page is 2, all the todos will be displayed

    if(currentPage === Math.ceil(dataToDisplayArr.length / perPage)) return;
    
    setcurrentPage(oldVal => oldVal + 1);
  };

  const prev = () => {
    // prevent current page from going to 0
    if(currentPage === 1) return;

    setcurrentPage(oldVal => oldVal - 1);
  };


  return (
    <div className="right-board">
      {/* <div className="databoxes">{dataToDisplayArr}</div> */}
      <div className="databoxes">{dataAfterPagination}</div>
      {/* {dataToDisplayArr.length > perPage ? <Pagination prev = {prev} next = {next} /> : ''} */}
      {dataToDisplayArr.length > perPage ? <Pagination prev = {prev} next = {next} /> :  
      currentPage === 2 ? <Pagination prev = {prev} next = {next} /> : '' }
    </div>
  );

  // return (
  //   <div className="right-board">
  //     {/* <div className="databoxes">{dataToDisplayArr}</div> */}
  //     <div className="databoxes">{dataAfterPagination}</div>
  //     <div className="pagination">
  //       <div onClick={() => prev()} className="prev">
  //         <img src={leftArrow} alt="right arrow" />
  //       </div>
  //       <div onClick={() => next()} className="next">
  //         <img src={rightArrow} alt="right arrow" />
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default RightBoard;
