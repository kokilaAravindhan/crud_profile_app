import React from 'react'


const CreateCard = ({value,inputTag}) => {
  return (
  
    <div className="container">
    <div className="row" >
        <div className='col-sm-3' >
            <h2>{value}</h2>
        </div>
        <div className='col-sm-3'>
            {inputTag}
        </div>
    </div>
    </div> 
   
  )
}

export default CreateCard