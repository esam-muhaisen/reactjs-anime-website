import React, { useEffect, useState } from 'react'
import "./Gallery.css"
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
export default function Gallery() {
    const baseUrl = "https://api.jikan.moe/v4";
    const [gallery, setGallery] = useState([])

    const {id} = useParams();
    const [index, setIndex] = useState(0);

    const handleImageClick = (i) => {
      setIndex(i)
    }


    const getAnimePictures = async(id) => {
        const response = await fetch(`${baseUrl}/characters/${id}/pictures`);
        const data = await response.json();
        setGallery(data.data)
        console.log(data.data);
    }
    useEffect(()=>{
        getAnimePictures(id)
    },[id])
    
  return (
    <div className='gallery'>
        <div className="back">
            <Link to="/">Back</Link>
        </div>
        <div className="big-image">
            <img src={gallery[index]?.jpg.image_url} alt="" />
        </div>
        <div className="small-images">
        {gallery.map((item, i)=>{
            return(
                <div className="pictures-con" key={i} onClick={()=>{
                    handleImageClick(i)
                }}>
                    <img src={item.jpg.image_url} alt="" 
                        style={{
                            border:i === index?"3px solid #27AE60":"3px solid #e5e7eb",
                            filter:i === index?"brightness(1.2)":"brightness(1)",
                            transform:i === index?"scale(1.1)":"scale(1)",
                            transition:"all 0.3s ease-in-out",
                            

                        }}

                    />
                </div>
            )
        })}
        </div>
       
    </div>
  )
}
