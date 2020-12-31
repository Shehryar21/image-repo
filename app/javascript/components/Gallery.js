import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from './Image'

const Gallery = () => {
    const [images, setImages] = useState([])

    useEffect( () => {
        axios.get('/api/v1/images.json')
        .then( resp => {
          setImages(resp.data.data)
        })
        .catch( resp => {
          console.log(resp)
        })
      }, [])
    
      const grid = images.map( (image, index) => { 
        return (
          <Image 
            key={index} 
            attributes={image.attributes}
          />
        )
      })

    return(
        <div className="home">
            <div className="header">
                <h1>My Image Gallery</h1>
                <p className="subheader">My beautiful images</p>
            </div>
            <div className="grid">
                <ul>
                    {grid}
                </ul>
            </div>
        </div>
    )
}

export default Gallery