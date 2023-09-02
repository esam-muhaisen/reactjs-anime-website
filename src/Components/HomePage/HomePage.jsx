import React, { useState } from 'react'
import "./HomePage.css"
import { Popular } from '../exports'
import { useGlobalContext } from '../../context/context'
import Upcoming from '../Upcoming/Upcoming'
import Airing from '../Airing/Airing'
export default function HomePage() {
   const {handleSubmit,
     search,
     searchAnime,
      handleChange,
      getAiringAnime,
      getUpcomingAnime,
      getPouplarAnime,
    }= useGlobalContext()

    const [rendered, setRendered] = useState('popular')

    const switchComponent=()=>{
        switch(rendered){
            case 'popular':
                return <Popular rendered={rendered}/>
            case 'airing':
                return <Airing rendered={rendered}/>
            case 'upcoming':
                return <Upcoming rendered={rendered}/>
            default:
                return <Popular rendered={rendered}/>
        }
    }
  return (
    <div className='parent-home' >
      <header>
        <div className="logo">
            <h1>
                {rendered ==="popular"?'Popular Anime' : rendered ==='airing' ? 'Airing Anime':'Upcoming Anime'}
            </h1>
        </div>
        <div className="search-container">
            <div className="filter-btn Popular-filter" >
                <button onClick={()=>{
                    setRendered('popular')
                }}>
                    Popular
                </button>
            </div>
            <form action="" className="search-form" onSubmit={handleSubmit}>
                <div className="input-control">
                    <input type="text" placeholder='Search Anime' value={search} onChange={handleChange}/>
                    <button type='submit'>Search</button>
                </div>
            </form>
            <div className="filter-btn airing-filter" >
                <button onClick={()=>{
                    setRendered('airing')
                    getAiringAnime()
                }}>
                    Airing
                </button>
            </div>
            <div className="filter-btn upcoming-filter" >
                <button onClick={()=>{
                    setRendered('upcoming')
                    getUpcomingAnime()
                }}>
                    Upcoming
                </button>
            </div>
        </div>
      </header>
      {switchComponent()}
    </div>
  )
}
