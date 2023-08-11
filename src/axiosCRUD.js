




import { profileURL } from "./Config";
import { profileInstance } from "./axiosInstance"


export const profileCreate = async (profileData) => {

  const response = await profileInstance.post('/profile_api', profileData);

  console.log(response);

}

/*export const getProfile = async () => {

  const response = await profileInstance.get('/profile_api');

  console.log(response);

}*/
export const getProfile = async () => {
    const response = await fetch(`${profileURL}/profile_api` );
    const profile = await response.json();
    return profile;
  }

/*export const profileGetID = async (profileId) => {

  const  data  = await profileInstance.get(`/profile_api/${profileId}`);

  console.log(data);

}*/
export const profileGetID = async (profileId) => {
    const response = await fetch(`${profileURL}/profile_api/${profileId}`);
    const profile = await response.json();
    return profile;
  }

/*export const updateProfile = async (profileId, profileData) => {

    const  data  = await profileInstance.PUT(`/profile_api/:id=${profileId}`,profileData);
    console.log(data)

}*/
export const updateProfile = async (profileId, profileData) => {
    const response = await fetch(
      `${profileURL}/profile_api/${profileId}`,
      {
        method: 'PUT',
        body: JSON.stringify(profileData),
        headers: { 'Content-Type': 'application/json' }
      }
    );
    const profile = await response.json();
    return profile;
  }

/*export const deleteProfile = async (profileId) => {
    const  data  = await profileInstance.delete(`/profile_api/:id=${profileId}`);
    console.log(data);
}*/
export const deleteProfile = async (profileId) => {
    const response = await fetch(
      `${profileURL}/profile_api/${profileId}`,
      {
        method: 'DELETE'
      }
    );
    const profile = await response.json();
    return profile;
  }
