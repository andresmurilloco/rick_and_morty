import React from "react";
import { useEffect, useState } from "react";
import { importarEpisodios } from "../data/apiConnection";
import { getEpisodes, getEpisodesInfo } from "../api/api";

//Components
import Capitulo from "../components/Capitulo";

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
      <div className="ml-24 mt-5 mr-24">
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
        <div>
          {episodes.map((episode) => (
            <Capitulo episodio={episode} key={episode.id} />
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Capitulos;
