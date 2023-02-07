import React from 'react'

function RightBoard(props) {

  const dataToDisplayArr = props.dataToDisplay.map((el,i) => {
    return (
      <>
        <div className='databox'>
          <p key={i}>{el}</p>
        </div>
      </>
    )
  })

    return (
    <div className="right-board">
        {dataToDisplayArr}
        {/* <div className="databox">
          <p>data ...</p>
        </div> */}

    </div>
  )
}

export default RightBoard