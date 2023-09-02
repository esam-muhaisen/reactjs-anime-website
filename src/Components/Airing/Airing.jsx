import React, { useEffect, useState } from 'react'
import "./Airing.css"
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/context';
export default function Airing({rendered}) {
    const {airingAnime,isSearch, searchResults} = useGlobalContext()
    const [airing, setAiring] = useState([]);
    const conditionalRender =()=>{
        if(!isSearch && rendered === 'airing'){
          return(
            airingAnime.map((anime)=>{
              console.log(anime);
              return(
                <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                  <img src={anime.images.jpg.large_image_url} alt="" />
                </Link>
              )
             
            })
          )
        }else{
          return(
            searchResults.map((anime)=>{
              return(
                <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                  <img src={anime.images.jpg.large_image_url} alt="" />
                </Link>
              )
            })
          )
        }
      }
      const baseUrl = "https://api.jikan.moe/v4";
      const getAiringAnime = async () => {
        const response = await fetch(`${baseUrl}/top/anime?filter=airing`);
        const data = await response.json();
        setAiring(data.data)
        console.log(data.data);
      };
      useEffect(()=>{
        getAiringAnime();
      },[])
  return (
    <div className='parent-airing'>
    <div className="airing-anime">
   { airing.map((anime)=>{
          return(
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <img src={anime.images.jpg.large_image_url} alt="" />
            </Link>
          )
        })}
    </div>
  </div>
  )
}
