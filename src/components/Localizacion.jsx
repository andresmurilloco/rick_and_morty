import React from 'react'

const Localizacion = ({localizacion}) => {
  const {id,titulo,type,dimension,residents,url} = localizacion;
  return (
    <>
      <div className='rounded-md bg-green-400 border-yellow-500 border-4 shadow-md shadow-orange-300 mt-5'>
        <h1 className='text-3xl font-bold font-gloria'>{titulo}</h1>
      </div>
    </>
  )
}

export default Localizacion