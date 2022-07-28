import React, { useState } from 'react'
import waterFront from '../assets/waterFront.mp4'


const Home = () => {
  const[message, setMessage] = useState({})
  const fetchURL = 'https://api.adviceslip.com/advice'

  const Advice = () => {
    fetch (fetchURL) 
    .then((response)=>
    {return response.json();
    })
    .then((data)=>{
      setMessage(data)
    })
    .catch((error)=>
    console.log(error))
  }

  console.log(message)

  return (
    <div className='w-full h-[100vh] relative'>
            <video className= 'w-full h-[100vh] object-cover' src={waterFront} autoPlay loop muted></video>
            <div className='absolute top-0 left-0 w-full h-full bg-black-rgba'></div>
            <div className='w-full h-full flex absolute top-0 justify-center '>
            
             <div>
            {
              typeof message.slip === 'undefined' ? (
                <div>
                  <h2 className='text-[8vmin] pt-5 text'>Press the button</h2>
                </div>
              ):(
                <div>
                  <h1 className='text-[5vmin] pt-5 text-center'>{message.slip.advice}</h1>
                </div>
              )
            }
             </div>
              <div className='w-full h-full flex absolute top-0 justify-center items-center'>
              <button onClick={Advice} className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Get Advice</button>
              </div>
            </div>
    </div>
  )
}

export default Home