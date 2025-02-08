import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader';
import axios from 'axios';

export default function Tv() {

  const [data, setData] = useState()
  const [Isloading,setIsloading] = useState(true)
 useEffect(()=>{
  getData().then((data)=>{
    console.log(data.data.results)
    setData(data.data.results)
    setIsloading(false)
  }).catch((err)=>{
    console.log("error")
    setIsloading(false)
  })
  console.log("hi")
 },[]);



async function getData(){
  return await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=5284390038f237b3ff3956a92797ced0");
  
}

  return (
    <>
    <div className="mt-20 bg-black">
        <div className="flex flex-wrap">
          {Isloading?<div className='text-5xl text-red-500 mt-40 mx-auto text-center'><Loader/></div> : data.map((movie) => <div className="w-full md:w-1/3 lg:w-1/4 p-4 border-4 border-red overflow-hidden ">
            <p className='text-red-500'>rate: {movie.vote_average}</p>
         <div className='img p-2'> <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" /></div>
        <h2 className='text-red-500 text-center text-2xl'>{movie.name}</h2>
        <p className='text-white text-sm p-2 text-center'>Date : {movie.first_air_date}</p>
          </div>)}
         
        </div>
       </div>
    </>
  )
}
