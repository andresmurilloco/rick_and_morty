import React from 'react'
import PieDemographic from '../components/PieDemographic'
import { useState, useEffect } from 'react'
import { speciesSorter } from '../api/api'
import Cargando from '../components/Cargando'

const Statistics = () => {
  const [loading, setLoading] = useState(true);
  const [dataSpecies, setDataSpecies] = useState([])
  const [species, setSpecies] = useState({})
  useEffect(() => {
   const getSpeciesInfo = async() =>{
    setDataSpecies(await speciesSorter());
   }
   getSpeciesInfo()
  }, []);

  useEffect(() => {
    if(dataSpecies.length != 0){
      setLoading(false);
      setSpecies(
        {
          labels: dataSpecies.map((data)=>{data.species;return data.species}),
          datasets: [{
            label: "Species",
            data: dataSpecies.map((dataCount)=>{dataCount.count;return dataCount.count}),
          }]
        }
      )
    }
  }, [dataSpecies])
  return (
    <>
      {loading ? 
        <div className='ml-[50%] mt-10 mb-10'>
          <Cargando></Cargando>
        </div> :
        <div className=' w-[500px] bg-white rounded-md ml-24 mt-5 mb-5'>
          <h1 className='text-3xl text-center font-gloria bold'>Species demography</h1>
          <PieDemographic chartData={species}></PieDemographic>
        </div>
      }
    </>
  )
}

export default Statistics