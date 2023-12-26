import React from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

 const Github = () => {
    // OLD WAY TO FETCH DATA FROM API
//   const [data, setData] = useState([]);
//   useEffect(()=>{
//     fetch('https://api.github.com/users/DuaaAzhar')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         setData(data);
//     })
//   },[])

// OPTIMIZED WAY by fetching data through router loaders
const data = useLoaderData();
    return (
    <div className=' h-screen flex flex-col text-center bg-gray-500 text-white text-2xl'>
      Github Followers: {data.followers}
      <img className='flex w-3/12 h-3/12 rounded-full mx-auto pb-2' src={data.avatar_url} alt="profile image" />
    </div>
   
  )
}
export default Github

export const githubInfoLoader= async()=>{
    const response = await fetch('https://api.github.com/users/DuaaAzhar');
    return response.json();
  }