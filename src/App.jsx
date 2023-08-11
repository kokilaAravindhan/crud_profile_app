import { useState } from 'react'
import {BrowserRouter,Routes,Route,Link,Navigate} from 'react-router-dom'
import './App.css'
import Create from './components/Create'
import Home from './components/Home'
import Edit from './components/Edit'
import Delete from './components/Delete'

function App() {
  return (
    <>
    <div className='flex-container'>
      <h1 className='heading'>CRUD OPERATION</h1>
      <BrowserRouter> 
          <headers>

          <Link to="/">Home</Link>&nbsp;&nbsp;
          <Link to="/profile/edit">Edit</Link>&nbsp;&nbsp;
          <Link to="/profile/create">Create</Link>&nbsp;&nbsp;
          

          </headers>
          <Routes>
              <Route index path="/" element={<Home/>}/>
              <Route path='profile' >
                <Route index element={<Home/>} />
                <Route path='create' element={<Create/>} ></Route>
                <Route path='edit' element={<Edit/>} ></Route>
                <Route path='delete' element={<Delete/>} ></Route>
              </Route>
              <Route path="/404" element={<h3>Page not found, please check url</h3>} />
              <Route path="*" element={<Navigate to="/404" replace />} />    
          </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
