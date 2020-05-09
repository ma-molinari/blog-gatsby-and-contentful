import React from "react"
import { Link } from "@reach/router"
import styled from "styled-components"

// icons
import react from "../../assets/icons/react.svg"
import css3 from "../../assets/icons/css3.svg"
import html5 from "../../assets/icons/html5.svg"
import flutter from "../../assets/icons/flutter.svg"

const GridLinks = (props) => {
  return (
    <Grid>
      <CustomLink to="categorias/html5-css3">
        <BoxCard>
          <RowIcons>
            <IconCard draggable="false" src={html5}/>
            <IconCard draggable="false" src={css3}/>
          </RowIcons>
          <TitleCard>HTML5 e CSS3</TitleCard>
        </BoxCard>
      </CustomLink>
      <CustomLink to="categorias/react">
        <BoxCard>
          <IconCard draggable="false" src={react}/>
          <TitleCard>React</TitleCard>
        </BoxCard>
      </CustomLink>
      <CustomLink to="categorias/react-native">
        <BoxCard>
          <IconCard draggable="false" src={react}/>
          <TitleCard>React Native</TitleCard>
        </BoxCard>
      </CustomLink>
      <CustomLink to="categorias/flutter">
        <BoxCard>
          <IconCard draggable="false" src={flutter}/>
          <TitleCard>Flutter</TitleCard>
        </BoxCard>
      </CustomLink>
    </Grid>
  )
}

export default GridLinks;

const Grid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 30px;
  @media(max-width: 1024px){
    grid-template-columns: repeat(2,1fr);
  }
  @media(max-width: 768px){
    display: none;
  }
`

const BoxCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 1024px){
    align-items: flex-start;
  }
`

const RowIcons = styled.div`
  display:flex;
`

const IconCard = styled.img`
  width: 50px;
  height: 60px;
`
const TitleCard = styled.div`
  font-size: 19px;
  margin-top: .5rem;
  color: #ffffff;
  font-weight: 600;
`

const DescriptionCard = styled.p`
  margin: 0;
  font-size: 15px;
  margin-top: .5rem;
  color: #ffffff;
  font-weight: 500;
`

const CustomLink = styled(Link)`
  text-decoration: none;
  :hover{
    opacity:.8;
  }
`