import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])

  const getdata = async () => {
    const response = await axios.get(
      'https://picsum.photos/v2/list?page=2&limit=100'
    )
    setUserData(response.data)
    console.log(response.data)
  }

  let printUserData = 'No user Availabel'


  return (
    <div className='bg-black h-screen overflow-auto text-white'>
      <button
        onClick={getdata}
        className='bg-green-600 active:scale-95 m-4 px-5 py-2 rounded text-white'
      >
        GET DATA
      </button>

      <p className='m-4'>Total Images: {userData.length}</p>

      <div className='flex flex-wrap gap-7'>
        {userData.map((item) => (
          <div key={item.id}>
            <img className='h-40 w-40 object-cover bg-white rounded-2xl' src={item.download_url} alt="" />

           <div className='flex gap-3'>
             <p>{item.author}</p>
            <p>{item.id}</p>
           </div>
          </div>

        ))}


      </div>

      <div className='flex '>
        {printUserData}
      </div>
    </div>
  )
}

export default App
