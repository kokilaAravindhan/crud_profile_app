import React, { useState } from 'react'
import { useFormik } from 'formik';
import CreateCard from './CreateCard';
import './CreateCard.css'
import { profileCreate } from '../axiosCRUD';

const Create = () => {
 
  const formik=useFormik({
    
    initialValues:{name:'',
    age:'',
    gender:''},
    onSubmit:async function(values,formHelpers){
     
      console.log(values);
       try{
        const response = await profileCreate(values);
        console.log("successfully uploaded "+response);
        alert("successfull submitted");
        formHelpers.resetForm();
       }catch(error){
        console.log("error in uploading"+error);
       }
    }

  })

  return (
    <>
    <h1>Create</h1>
    <form onSubmit={formik.handleSubmit}>
    <div className='container'>
      <div className='row' >
          <div className='col-sm-3' >
              <h2>Name</h2>
          </div>
          <div className='col col-sm-3'>
              <input type='text' id='name' value={formik.values.name}  onChange={formik.handleChange}/>
          </div>
      </div>
      <div className='row' >
          <div className='col-sm-3' >
              <h2>Age</h2>
          </div>
          <div className='col col-sm-3'>
              <input type='text' id='age' value={formik.values.age}  onChange={formik.handleChange}/>
          </div>
      </div>
      <div className='row' >
          <div className='col-sm-3' >
              <h2>Gender</h2>
          </div>
          <div className='col col-sm-3'>
              <input type='text' id='gender' value={formik.values.gender}  onChange={formik.handleChange}/>
          </div>
      </div>
      <button className="btn btn-primary" type="submit" >Button</button>
    </div> 
    </form>
    </>   
    
  )
}

export default Create