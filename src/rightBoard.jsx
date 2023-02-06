import React from 'react'

function RightBoard(props) {
    const storedData = props.storedData.current
    
    const storedDataArr = Object.values(storedData).map((el,i) => {
      return (<p key={i}>{el}</p>)
    })
    // console.log(storedDataArr);


    return (
    <div className="right-board">
        {storedDataArr}
    </div>
  )
}

export default RightBoard