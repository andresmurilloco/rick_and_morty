import React from 'react'
import { useState, useEffect, lazy, Suspense } from 'react';
import { getLocationsInfo, getLocations } from '../api/api';

//Components
import Cargando from '../components/Cargando'
const Localizacion = lazy(()=>import('../components/Localizacion'))

const Localizaciones = () => {
  const [localizaciones, setLocalizaciones] = useState([]);
  const [pageCount, setPageCount] = useState()
  const [page, setPage] = useState(1)

  useEffect(() => {
    const ConsultarApi=async()=>{
      setPageCount(await getLocationsInfo());
      setLocalizaciones(await getLocations({page}));
    }
    ConsultarApi();
  }, [])

  useEffect(() => {
    const consultarApi=async()=>{
      setLocalizaciones(await getLocations(page));
    }
    consultarApi();
  }, [page])

  const nextPage = () => {
    const math = 1;
    if (page < pageCount) {
      setPage(page + math);
    }
  };

  const previousPage = () => {
    const math = 1;
    if (page > 0) {
      setPage(page - math);
    }
  };

  return (
    <>
      <div className='ml-24 mt-5 mr-24'>
      <div>
          <div className="font-gloria flex justify-between ml-[72%] mt-7 bg-green-800 rounded-md border-2 border-yellow-500 p-1 mb-[-20px]">
            <button
              className="border-2 p-2 border-green-900 rounded-md hover:bg-green-600"
              onClick={() => previousPage()}
            >
              Previous
            </button>
            <p className="border-1 p-2 rounded-md">
              Page {page} of {pageCount}
            </p>
            <button
              className="border-2 border-green-900 p-2 rounded-md hover:bg-green-600"
              onClick={() => nextPage()}
            >
              Next
            </button>
          </div>
        </div>
        {localizaciones.map(localizacion=>(
          <Suspense fallback={Cargando}>
            <Localizacion localizacion={localizacion} key={localizacion.id}></Localizacion>
          </Suspense>
        ))}
      </div>
    </>
  )
}

export default Localizaciones