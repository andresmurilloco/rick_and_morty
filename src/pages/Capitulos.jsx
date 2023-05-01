import React from "react";
import { useEffect, useState, lazy, Suspense } from "react";
import { getEpisodes, getEpisodesInfo } from "../api/api";

//Components
const Capitulo = lazy(()=>import ("../components/Capitulo"))
import Cargando from "../components/Cargando";

const Capitulos = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const consultarAPI = async () => {
      setEpisodes(await getEpisodes(page));
      setPageCount(await getEpisodesInfo());
    };
    consultarAPI();
  }, []);

  useEffect(() => {
    const consultarAPI = async () => {
      setEpisodes(await getEpisodes(page));
    };
    consultarAPI();
  }, [page]);

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
      <div className="ml-24 mt-5 mr-24">
        <div>
          {episodes.map((episode) => (
            <Suspense fallback={Cargando}>
              <Capitulo episodio={episode} key={episode.id} />
            </Suspense>
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Capitulos;
