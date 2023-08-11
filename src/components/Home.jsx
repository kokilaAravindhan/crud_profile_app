import React,{useState,useEffect} from 'react'
import  './Home.css'
import { Link } from 'react-router-dom';
import { deleteProfile, getProfile } from '../axiosCRUD'; 


const Home = () => {
    const [userData,setUserData]=useState([]);
    const fetchData = () => {
        return fetch("https://64b3c5500efb99d862685a32.mockapi.io/movies_desc/profile_api")
              .then((response) => response.json())
              .then((post) => setUserData(post))
              .catch(error => console.error('Error fetching post:', error));
              
      }
      {/*const fetchData = async () => {
        try{
            const res = await getProfile();
            setUserData(res);
            console.log("data response "+res);
        }catch(error)
        {
            console.log("ERror in retrieve Datas "+error)
        }
      }*/}
     
      useEffect(() => {
        fetchData();
      },[]);
  
      const removeFromUi = async (profileId) => {
        
        const res=await deleteProfile(profileId);
        console.log(res)
        
        const newIds = userData.filter(({ id }) => profileId !== id);
        setUserData(newIds);

      }
     console.log("userData "+userData);
  return (
    <><h1 >Home Page</h1>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-2'>
                  <h2>Id</h2>
                </div>
                <div className='col-sm-2'>
                <h2> Name</h2>
                </div>
                <div className='col-sm-2'>
                <h2>Age</h2>
                </div>
                <div className='col-sm-2'>
                <h2>Gender</h2>
                </div>
                <div className='col-sm-2'>
                </div>
            </div>
                {userData && userData.map((post) => (
                    
                <>
                
                    <div className='row'>
                        <div className='col-2'><span>{post.id}</span></div>
                        <div className='col-2'><span>{post.name}</span></div>
                        <div className='col-2'><span>{post.age}</span></div>
                        <div className='col-2' ><span>{post.gender}</span></div>
                        <div className='col-3' >
                        <Link to={`/profile/edit?id=${post.id}`}>
                        <i
                            className="fa-solid fa-pen-to-square fa-2x"
                            style={{
                            color: "blue",                          
                            }}
                        ></i>
                        </Link>
                        <i className="fa-solid fa-trash-can fa-2x" style={{
                            color: "blue",
                            cursor:"pointer"
                            
                            
                            }}
                        onClick={() => removeFromUi(post.id)}
                        ></i>
                        </div>
                        {/*<div className='col-sm-3'><button  onClick={nextPage}>Go to Next Page</button></div>*/}
                    </div>
                </>
                    ))}  
                    
            </div>
         
    </>

  )
}

export default Home