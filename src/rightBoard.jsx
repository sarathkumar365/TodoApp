import React from 'react'

function RightBoard(props) {

  const dataToDisplayArr = props.dataToDisplay.map((el,i) => <p key={i}>{el}</p>)

    return (
    <div className="right-board">
        {dataToDisplayArr}
    </div>
  )
}

export default RightBoard