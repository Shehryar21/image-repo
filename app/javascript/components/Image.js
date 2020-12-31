import React from 'react'

const Image = (props) => {
  const {name, image_url, description} = props.attributes

  return (
    <div className="card">
      <div className="image">
        <img src={image_url} alt={name} width="50" />
      </div>
      <div className="image-name">
        {name}
      </div>
      <div className="image-description">
        {description}
      </div>
    </div>
  )
}

export default Image