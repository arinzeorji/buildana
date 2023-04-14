import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow:hidden;

    &:first-child{
        margin-right:7.5px;
    }
    &:last-child{
        margin-left:7.5px;
    }
  &:hover{
    cursor:pointer;

    & .backimg{
      transform: scale(1.1);
      transition:transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }

`;



const BackImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  
`;
const Content = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color:white;
    opacity:0.7;
    position:absolute;
`;

const Title = styled.h1`
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
`;

const Subtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;


const MenuItem = ({ title, id, images, history, linkUrl, match }) => {
  const navigate = useNavigate();
  return (
    <Menu onClick={() => { navigate(`shop`) }}>

      <BackImage className="backimg" style={{
        backgroundImage: `url(${images})`
      }}>

      </BackImage>
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>Shop Now</Subtitle>
      </Content>

    </Menu>
  )
}


export default MenuItem;