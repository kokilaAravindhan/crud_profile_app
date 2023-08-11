import React, {useState,useEffect}  from 'react'
import { useSearchParams,useNavigate } from 'react-router-dom'

import { profileGetID, updateProfile} from '../axiosCRUD'
import  './Edit.css'

const Edit = () => {
  const initialState = {
    name: '',
    age: '',
    gender: '',
   }

  const [params] = useSearchParams();
   console.log(params);

  const [formData, setFormData] = useState(initialState);
 
 
   const navigate = useNavigate();

  const fetchData = async () => {
    const response = await profileGetID(params.get('id'));
    setFormData(response);
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(formData.name)
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, for example, by sending the data to a server or performing other actions.
    console.log('Form data:', formData);
    await updateProfile(params.get('id'), formData);
    navigate('/profile_api/' + params.get('id'));
  };

  

  return (
    
    <><h1>Edit</h1><form onSubmit={handleSubmit} style={{ padding: '16px' }}>
      <div className='row'>
        <div className='col-sm-1'>
          <h2 >Name:</h2>
        </div>
        <div className='col-sm-2'>
          <input
            type="text"
            id="names"
            value={formData.name}
            onChange={handleChange}
            required />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-1'>
          <h2 >Age:</h2>
        </div>
        <div className='col-sm-2'>
          <input
            type="text"
            id="age"
            value={formData.age}
            onChange={handleChange}
            required />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-1'>
          <h2 >Gender:</h2>
          </div>
        <div className='col-sm-2'>
          <input
            type="text"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            required />
        </div>
      </div>
      <button className='btn btn-secondary' type="submit">Submit</button>
    </form></>
    
  )
}

export default Edit