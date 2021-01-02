import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`;

const Image_Div = styled.div`
  padding: 20px;
  height: 300px;
`;

const Name = styled.div`
  padding: 20px;
`;
const Description = styled.div`
  padding: 20px;
`;

const Image = (props) => {
  const { name, image_url, description } = props.attributes;

  return (
    <Card>
      <Image_Div>
        <img src={image_url} alt={name} width="200" />
      </Image_Div>
      <Name>{name}</Name>
      <Description>{description}</Description>
    </Card>
  );
};

export default Image;
