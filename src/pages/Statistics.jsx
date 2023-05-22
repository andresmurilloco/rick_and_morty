import React from 'react'
import { useState, useEffect } from 'react'
import { speciesSorter, getInhabitants, genderSorter, dimensionSorter } from '../api/api'

//Components
import PieDemographic from '../components/PieDemographic'
import PieGender from '../components/PieGender'
import BarInhabitants from '../components/BarInhabitants'
import Cargando from '../components/Cargando'

const Statistics = () => {
  const [loading, setLoading] = useState(true);
  //API data is dataN. Then it is mapped to get the data to dataSet and Labels
  const [dataSpecies, setDataSpecies] = useState([])
  const [species, setSpecies] = useState({})

  const [dataInhabitants, setDataInhabitants] = useState([])
  const [inhabitants, setInhabitants] = useState({})

  const [dataGenre, setDataGenre] = useState([])
  const [genre, setGenre] = useState({})

  const [dataDimensions, setDataDimensions] = useState([])
  const [dimension, setDimension] = useState({})

  
  useEffect(() => {
   const getApiInfo = async() =>{
    setDataSpecies(await speciesSorter());
    setDataInhabitants(await getInhabitants());
    setDataGenre(await genderSorter());
    setDataDimensions(await dimensionSorter())
   }
   getApiInfo()
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
      setInhabitants(
        {
          labels: dataInhabitants.map((data)=>{data.location;return data.location}),
          datasets:[{
            label: "Inhabitants per location",
            data: dataInhabitants.map((data)=>{data.inhabitants;return data.inhabitants}),
            backgroundColor: 'blue',
          }]
        }
      )
      setGenre(
        {
          labels: dataGenre.map((data)=>{data.gender;return data.gender}),
          datasets:[{
            label: "Distribution per Gender",
            data: dataGenre.map((data)=>{data.count;return data.count}),
          }]
        }
      )
      setDimension(
        {
          labels: dataDimensions.map((data)=>{data.dimension;return data.dimension}),
          datasets:[{
            label: "Locations per Dimension",
            data: dataDimensions.map((data)=>{data.count;return data.count}),
            backgroundColor: 'red',
          }]
        }
      )
    }
  }, [dataDimensions])

  return (
    <>
      {loading ? 
        <div className='ml-[50%] mt-10 mb-10'>
          <Cargando></Cargando>
        </div> :
        <div>
          <div className='flex flex-row justify-evenly mt-5 mb-5'>
            <div className='w-[38%] bg-white bg-opacity-80 rounded-md'>
              <h1 className='text-3xl text-center font-gloria bold'>Species demography</h1>
              <PieDemographic chartData={species}></PieDemographic>
            </div>
            <div className='w-[38%] bg-white bg-opacity-80 rounded-md'>
              <h1 className='text-3xl text-center font-gloria bold'>Gender distribution</h1>
              <PieGender chartData={genre}></PieGender>
            </div>
          </div>
          <div className='flex flex-col ml-[8%] mt-5 mb-5'>
            <div className=' w-[92%] bg-white bg-opacity-80 rounded-md mt-5'>
                <h1 className='text-3xl text-center font-gloria bold'>Population per location</h1>
                <BarInhabitants chartData={inhabitants}></BarInhabitants>
            </div>
            <div className=' w-[92%] bg-white bg-opacity-80 rounded-md mt-5'>
                <h1 className='text-3xl text-center font-gloria bold'>Locations count per dimension</h1>
                <BarInhabitants chartData={dimension}></BarInhabitants>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Statistics