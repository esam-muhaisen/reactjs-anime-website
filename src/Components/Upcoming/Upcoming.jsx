import React, { useEffect, useState } from 'react'
import "./Upcoming.css"
import { useGlobalContext } from '../../context/context'
import { Link } from 'react-router-dom'
export default function Upcoming({rendered}) {
    const {upcominAnime,isSearch, searchResults} = useGlobalContext()
    const [upcoming, setUpcoming] = useState([]);
    const conditionalRender =()=>{
        if(!isSearch && rendered === 'upcoming'){
          return(
            upcominAnime.map((anime)=>{
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
      const getUpcomingAnime = async () => {
        const response = await fetch(`${baseUrl}/top/anime?filter=upcoming`);
        const data = await response.json();
        setUpcoming(data.data)
        console.log(data.data);
      };
      useEffect(()=>{
        getUpcomingAnime();
      },[])
  return (
    <div className='parent-upcoming'>
    <div className="upcoming-anime">
   { upcoming.map((anime)=>{
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
