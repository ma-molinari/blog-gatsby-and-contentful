import React from "react"
import styled from "styled-components"

import LinkedinIcon from "../assets/images/linkedin.svg"
import InstagramIcon from "../assets/images/instagram.svg"
import Github from "../assets/images/github.svg"
import ArrowToTop from "../assets/images/arrow-to-top.svg"

const Footer = () => {

  function scrollToTop(scrollDuration) {
    if(typeof window !== "undefined"){
      let scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function() {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep)
          } else clearInterval(scrollInterval)
        }, 15)
    }
  }

  return (
    <Container>
      <div>
        <div className="footer" >
          <div className="container">
            <div className="footer-container">
              <span><b>Redes sociais</b></span>
              <div className="container-thumb">
                <a 
                  style={{marginRight:"1em"}}
                  href="https://pt.linkedin.com/in/matheus-molinari-da-silva-454650184/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedinIcon} alt="" />
                </a>
                <a
                  style={{marginRight:"1em"}}
                  href="https://www.instagram.com/ma_molinari/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={InstagramIcon} alt="" />
                </a>
                <a
                  href="https://github.com/ma-molinari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    style={{borderRadius:"10em"}}
                    src={Github} alt="" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <BackToTop className="row-2" onClick={() => scrollToTop(1000)}>
          <img src={ArrowToTop} alt="" /> <span>VOLTAR AO TOPO</span>
        </BackToTop>
      </div>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  .container {
    display: flex;
    justify-content:space-between;
    width:100%;
    max-width: 1300px;
    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .footer {
    display: flex;
    background-color: #000;
    padding: 2em 0 0em 0;
    justify-content:center;

    @media (max-width: 1000px) {
      padding: 0;
    }

    .footer-container {
      display: flex;
      flex-direction: column;

      @media (min-width: 1000px) {
        min-height: 130px;
      }

      @media (max-width: 1000px) {
        width: 100%;
        align-items: center;
      }

      h2,
      span {
        margin-top: 0;
        color: #999;
        font-size:1.2rem;
        font-weight: bold;
        margin-bottom: 1em;
        @media (max-width: 1000px) {
          margin-top:1em;
          font-size: 1rem;
          font-weight: 500;
          text-align: center;
        }
      }
      a {
        text-decoration: none;
        cursor: pointer;
        font-size: 1.2rem;
        color: #999;
        line-height: 2.5;
        &:hover {
          text-decoration: underline;
        }
      }
      .container-thumb {
        display: flex;
        flex-direction: row;

        img {
          width:40px;
          :hover{
            opacity:.8;
            transition: .3s;
          }
        }
        @media (max-width: 1000px) {
          margin: auto;
          text-align: center;
          img {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
`
const BackToTop = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  > img {
    margin-bottom: 10px;
  }
  > span {
    font-size: 12px;
    color: #999;
  }
`
