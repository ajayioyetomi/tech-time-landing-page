import React from 'react'
import styled from 'styled-components';
import zoom from '../assets/zoom.png';
import stripe from '../assets/stripe.png';
import monday from '../assets/monday.png';
import slack from '../assets/slack.png';
import dropbox from '../assets/dropbox.png';

const imageList = [
  {src:zoom,className:''},
  {src:stripe,className:''},
  {src:monday,className:''},
  {src:slack,className:''},
  {src:dropbox,className:''},
]


const SoftSection = () => {
  return (
    <Wrapper>
        <div>
          {imageList?.map((eImg:any) => <img src={eImg.src} alt="alt" className={eImg.className} />)}
        </div>
    </Wrapper>
  )
}

export default SoftSection;


const  Wrapper = styled.section`
    background-color:var(--secondary-background);
    display:flex;
    justify-content:center;
    padding:35px 0;
    & > div{
        width:75%;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    & > div > img{
      width:8vw;
      fit-object:contain;
    }
    @media screen and (max-width:600px){
      &{
        padding:18px 0;
      }
      & > div{
        width:85%;
      }
      & > div > img{
        width:13vw;
      }
    }

`