import React from 'react'
import rightArrow from '../resourses/icons/right-arroww.png';
import leftArrow from '../resourses/icons/left-arroww.png';

function pagination(props) {
  return (
        <>
            <div className="pagination fade-in">
                <div onClick={() => props.prev()} className="prev">
                    <img src={leftArrow} alt="right arrow" />
                </div>
                <div onClick={() => props.next()} className="next">
                    <img src={rightArrow} alt="right arrow" />
                </div>
            </div>
        </>
    )
}

export default pagination