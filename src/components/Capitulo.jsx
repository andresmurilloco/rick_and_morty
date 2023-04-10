import React from 'react'

const Capitulo = ({episode}) => {
    const {id, name,air_date,episodio,characters,link,created} = episode;
  return (
    <>
      <div className='rounded-md bg-green-400 border-yellow-500 border-4 shadow-md shadow-orange-300 mt-5'>
        <h1 className='text-3xl font-bold font-gloria' key={id}>{name}</h1>
      </div>
    </>
  )
}

export default Capitulo