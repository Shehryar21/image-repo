import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from './Image'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Home = styled.div`
  text-align:center;
`

const Header = styled.div`
  padding:100px 100px 10px 100px;
  
  h1 {
    font-size:42px;
  }
`
const Add = styled.div`
  margin: 20px 0;
  height:50px;

  a {
    color: #fff;
    background-color: #71b406;
    border-radius: 4px;
    padding: 10px 30px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #71b406;
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
  }
`

const Subheader = styled.p`
  font-weight:300;
  font-size:26px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding:20px;
`


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
        <Home>
            <Header>
                <h1>My Image Gallery</h1>
                <Subheader>My beautiful images</Subheader>
            </Header>
            <Add>
              <Link to= {"/add_image"}>Add Image</Link>
            </Add>
            <Grid>
                {grid}
            </Grid>
        </Home>
    )
}

export default Gallery