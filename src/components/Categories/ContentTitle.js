import React from "react"
import styled from "styled-components"

const ContentTitle = props => {
  return (
    <ContainerTitlePage>
      <TitlePage style={{ color: props.colorTitleCategory }}>
        {props.titleCategory}
      </TitlePage>
    </ContainerTitlePage>
  )
}

export default ContentTitle

const ContainerTitlePage = styled.div`
`

const TitlePage = styled.h1`
  margin: 0;
  font-size: 38px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.45;
  letter-spacing: normal;
  color: #666;
`

