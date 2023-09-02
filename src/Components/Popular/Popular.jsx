import React from 'react'
import { useGlobalContext } from '../../context/context'
import { Link } from 'react-router-dom'
import "./Popular.css"
export default function Popular({rendered}) {
  const {popularAnime,isSearch, searchResults} = useGlobalContext()
  const conditionalRender =()=>{
    if(!isSearch && rendered === 'popular'){
      return(
        popularAnime.map((anime)=>{
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
  
  return (
    <div className='parent-popular'>
      <div className="Popular-anime">
        {conditionalRender()}
      </div>
      
    </div>
  )
}
