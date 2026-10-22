import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import { Card } from './componets/Card';

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const respose = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

    setUserData(respose.data)
  }
  useEffect(function () {
    getData()
  }, [index])

  let dataPrint = <h3 className='text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 font-semibold'>Loadding.......</h3>
  if (userData.length > 0) {

    dataPrint = userData.map(function (i, index) {
      return <div key={index}>

        <Card i={i} />
      </div>
    })
  }

  return (
    <div className='overflow-auto bg-black text-white h-screen p-4'>
      {/* <h1 className='bg-red-950 text-white text-7xl fixed'>{index}</h1> */}
      <div className='flex h[80%] flex-wrap gap-4 px-27 py-2'>
        {dataPrint}
      </div>
      <div className='flex justify-center gap-4 items-center p-1'>
        <button style={{ opacity: index == 1 ? 0.5 : 1 }}
          className='bg-amber-500 font-semibold text-black rounded px-6 text-lx cursor-pointer active:scale-95 py-2' onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserData([])
            }
          }}>Prev</button>

        <h2>page{index}</h2>


        <button onClick={() => {
          setUserData([])
          setIndex(index + 1)

        }} className='bg-amber-500 font-semibold text-black rounded px-6 text-lx cursor-pointer active:scale-95 py-2'>Next</button>
      </div>
    </div>
  )
}
export default App
