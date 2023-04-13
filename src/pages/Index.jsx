import React from 'react'
import styled from "@emotion/styled";
import { useState, useEffect } from 'react';

//css
import '../css/index.css';

//Estilos
const Parrafo = styled.p`
  margin-top: 5px;
`;

const Index = () => {
  const [estadoTexto, setEstadoTexto] = useState(true);
  return (
    <>
      <div className='ml-24 mr-24 mt-5 mb-5 max-[850px]:ml-5 max-[850px]:mr-5'>
        <div className='rounded-md bg-green-400  border-yellow-500 border-4 shadow-md shadow-orange-300 mt-5 p-3'>
          <h1 className='text-3xl font-bold font-gloria'>WHAT'S RICK AND MORTY?</h1>
          <Parrafo className={estadoTexto ? 'ocultarParrafo':'mostrarParrafo'}>Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. It is distributed internationally by Warner Bros. Television Distribution. The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and an alcoholic grandfather dragging his grandson into hijinks.<br/>
          Roiland voiced the eponymous characters, with Chris Parnell, Spencer Grammer, and Sarah Chalke voicing the rest of Rick and Morty's family. The series originated from an animated short parody film of Back to the Future created by Roiland for Channel 101, a short-film festival cofounded by Harmon. Since its debut, the series has received critical acclaim for its originality, creativity, and humor. It has been nominated for three Primetime Emmy Awards for Outstanding Animated Program and won the award in 2018 and 2020. The series has also received two Annie Awards. At times, the series has been the most viewed television comedy for adults between 18 and 24. The popularity of Rick and Morty has made it a hundred-million dollar merchandising and media franchise.
          </Parrafo>
          <button onClick={()=>{
            setEstadoTexto(!estadoTexto);
          }}>Show more</button>
        </div>
        <div className='rounded-md bg-green-400 h-36 border-yellow-500 border-4 shadow-md shadow-orange-300 mt-5 p-3 text-right'>
          <h1 className='text-3xl font-bold font-gloria'>CHARACTERS</h1>
          <Parrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem, iure molestias cumque praesentium dolorem minus assumenda deleniti necessitatibus aut vel deserunt fugiat quam, perspiciatis consequuntur aliquid provident corporis nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit repellendus amet ut possimus iusto praesentium dolores modi! Sed, possimus? Sapiente vero laborum ab numquam, veritatis vel hic quia inventore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolore molestias repellendus quo incidunt unde, soluta repellat praesentium recusandae officia quidem quod ipsam accusantium, nemo vitae quam. Vitae, vel dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas non at fugiat asperiores quia dignissimos consequatur cupiditate, dolores, maiores aliquid reprehenderit eveniet mollitia inventore vero minus, voluptatem quasi voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quasi ullam rem nam quo ipsum dolore? Vitae facilis quibusdam ducimus a eum mollitia repellat, cupiditate maiores possimus perferendis molestias voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptate ullam unde maxime. Provident consequatur beatae voluptates esse qui ad exercitationem voluptatem rem totam vero, eaque hic, asperiores quis voluptatibus.</Parrafo>
        </div>
        <div className='rounded-md bg-green-400 h-36 border-yellow-500 border-4 shadow-md shadow-orange-300 mt-5 p-3'>
          <h1 className='text-3xl font-bold font-gloria'>EPISODES</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem, iure molestias cumque praesentium dolorem minus assumenda deleniti necessitatibus aut vel deserunt fugiat quam, perspiciatis consequuntur aliquid provident corporis nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit repellendus amet ut possimus iusto praesentium dolores modi! Sed, possimus? Sapiente vero laborum ab numquam, veritatis vel hic quia inventore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolore molestias repellendus quo incidunt unde, soluta repellat praesentium recusandae officia quidem quod ipsam accusantium, nemo vitae quam. Vitae, vel dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas non at fugiat asperiores quia dignissimos consequatur cupiditate, dolores, maiores aliquid reprehenderit eveniet mollitia inventore vero minus, voluptatem quasi voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quasi ullam rem nam quo ipsum dolore? Vitae facilis quibusdam ducimus a eum mollitia repellat, cupiditate maiores possimus perferendis molestias voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptate ullam unde maxime. Provident consequatur beatae voluptates esse qui ad exercitationem voluptatem rem totam vero, eaque hic, asperiores quis voluptatibus.</p>
        </div>
        <div className='rounded-md bg-green-400 h-36 border-yellow-500 border-4 shadow-md shadow-orange-300 mt-5 p-3 text-right'>
          <h1 className='text-3xl font-bold font-gloria'>LOCATIONS</h1>
          <Parrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem, iure molestias cumque praesentium dolorem minus assumenda deleniti necessitatibus aut vel deserunt fugiat quam, perspiciatis consequuntur aliquid provident corporis nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit repellendus amet ut possimus iusto praesentium dolores modi! Sed, possimus? Sapiente vero laborum ab numquam, veritatis vel hic quia inventore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolore molestias repellendus quo incidunt unde, soluta repellat praesentium recusandae officia quidem quod ipsam accusantium, nemo vitae quam. Vitae, vel dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas non at fugiat asperiores quia dignissimos consequatur cupiditate, dolores, maiores aliquid reprehenderit eveniet mollitia inventore vero minus, voluptatem quasi voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quasi ullam rem nam quo ipsum dolore? Vitae facilis quibusdam ducimus a eum mollitia repellat, cupiditate maiores possimus perferendis molestias voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptate ullam unde maxime. Provident consequatur beatae voluptates esse qui ad exercitationem voluptatem rem totam vero, eaque hic, asperiores quis voluptatibus.</Parrafo>
        </div>
      </div>
    </>
  )
}

export default Index