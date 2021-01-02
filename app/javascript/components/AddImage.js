import React, { useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Field = styled.div`
  border-radius: 4px;
  input {
    width: 96%;
    min-height:50px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
  }
  
  textarea {
    width: 100%;
    min-height:80px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;      
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

  const ReviewWrapper = styled.div`
  background:white;
  padding:20px;
  margin-left: 15px;
  border-radius: 0;
  padding-bottom:80px;
  border-left: 1px solid rgba(0,0,0,0.1);
  height: 100vh;
  padding-top: 100px;
  background: black;
  padding-right: 80px;
`

const ReviewHeadline = styled.div`
  font-size:20px;
  padding: 15px 0;
  font-weight: bold;
  color: #fff;
`

const RatingBoxTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`

const AddImage = (props) => {
    
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [selectedFile, setSelectedFile] = useState(null);

    const submitForm = () => {
      
      axios
        .post('/api/v1/images.json', {
          "name" : name,
          "description" : description,
          "image_url" : "https://shopify-image-repo-bucket.s3.amazonaws.com/linkedin+photo.png"
        })
        .then((res) => {
          alert("Image Upload success");
        })
        .catch((err) => alert("File Upload Error"));
    };

    return (
        <ReviewWrapper>
        <form>
          <ReviewHeadline>Please add an image</ReviewHeadline>
          <Field>
            <input 
            value = {name}
            onChange={e => setName(e.target.value)} type="text" name="title" placeholder="Image Name"/>
          </Field>
          <Field>
            <input value = {description} onChange={e => setDescription(e.target.value)} type="text" name="description" placeholder="Image Description"/>
          </Field>
          <input type="file" onChange={e => setSelectedFile(e.target.files[0])}/>
          {console.log(selectedFile)}
          <Add>
              <Link to= {"/"} onClick={submitForm}>Add Image</Link>
          </Add>
        </form>
      </ReviewWrapper>
    )
  }
  
  export default AddImage