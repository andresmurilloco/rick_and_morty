import React from 'react'
import { useState, useEffect, lazy, Suspense } from 'react';
import { getLocationsInfo, getLocations } from '../api/api';

//Components
import Cargando from '../components/Cargando'
const Localizacion = lazy(()=>import('../components/Localizacion'))

//Styles
import '../css/cuentaPaginas.css'

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
    if (page > 1) {
      setPage(page - math);
    }
  };

  return (
    <>
      <div className="contenedor-top">
        <button
          className="boton"
          onClick={() => previousPage()}
        >
          Previous
        </button>
        <p className="page-counter">
          Page {page} of {pageCount}
        </p>
        <button
          className="boton"
          onClick={() => nextPage()}
        >
          Next
        </button>
      </div>
      <div className='ml-24 mt-5 mr-24'>
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