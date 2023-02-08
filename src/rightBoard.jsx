import React,{Fragment} from 'react'

function RightBoard(props) {
  

  const dataToDisplayArr = Object.keys(props.dataToDisplay).map((key,i) => {

       return (
        <Fragment key={i}>
          <div  onClick={()=> props.setCurrentTodo(key)}  className='databox'>
            <p>{props.dataToDisplay[key]}</p>
          </div>
        </Fragment>
      )
  })


    return (
    <div className="right-board">
        {dataToDisplayArr}
    </div>
  )
}

export default RightBoard