import React from 'react'
import styled from 'styled-components';
import background from '../assets/background.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/m4.png';
import img3 from '../assets/m1.png';
import img4 from '../assets/img5.png';
import img5 from '../assets/m2.png';
import img6 from '../assets/m3.png';
import img7 from '../assets/p4.png';
import img8 from '../assets/p3.png';
import img9 from '../assets/m5.png';
import img10 from '../assets/img4.png';
import { ButtonLink } from './ButtonLink';



const imageList = [
  {src:img1},
  {src:img2},
  {src:img3},
  {src:img4},
  {src:img5},
  {src:img6},
  {src:img7},
  {src:img8},
  {src:img9},
  {src:img10}
]




const ConnectSection = () => {
  return (
    <Wrapper>
      
      <TopContainer>
        <div>join our community</div>
        <p>
          Are you  ready to connect with the future talent of the tech world
        </p>
        <div>meet up with other techstars and grow together</div>
      </TopContainer>
      <BottomContainer>
        <div>
            <img src={background} className="back" alt="background" />
            {imageList?.map((eachImg:any,index:number) =>
              <img src={eachImg.src} alt="profile img"/>
            )}
        </div>
      </BottomContainer>
      <ButtonWrapper  >
        <ButtonLink bg="var(--white-color)" color="var(--primary-color)" to="/community">
            Join Our Community
        </ButtonLink>
      </ButtonWrapper>

    </Wrapper>
  )
}

export default ConnectSection;


const Wrapper = styled.section`
  display:flex;
  justify-content:center;
  flex-direction:column;
  background-color:var(--primary-color);
  align-items:center;
  position:relative;
  padding:50px 0;
  gap:40px;

`
const TopContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    align-items:center;
    text-align:center;
    color:var(--white-color);
    & > div:first-of-type{
      text-transform:uppercase;
    }
    & > p:first-of-type{
      font-family:var(--font-2);
      font-weight:700;
      font-size:2.8vw;
      width:80%;
      margin:0;
    }

    & > div:last-of-type{
      text-transform:capitalize;
      font-size:14px;
    }



    @media screen and (max-width:810px){
      & > div:first-of-type{
        font-size:14px;
      }
      & > p:first-of-type{
        font-size:5.5vw;
      }
      & > div:last-of-type{
        font-size:12px;
      }
    }

`

const BottomContainer = styled.div`
    position:relative;
    display:flex;
    justify-content:center;

    width:100%;
    & > div{
      width:60%;
      display:flex;
      justify-content:center;
      align-items:center;
      position:relative;
    }
    & > div > img.back{
      width:100%;
      height:fit-content;
    }

    & > div > img:not(.back){
      position:absolute;
    }

    & > div > img:nth-of-type(2){
        left:10%;
        top:50px;
        width:40px;
    }
    
    & > div > img:nth-of-type(3){
      left:25%;
      top:100px;
      width:50px;
    }
    & > div > img:nth-of-type(4){
      left:35%;
      top:50px;
      width:40px;
    }
    & > div > img:nth-of-type(5){
      left:50%;
      top:120px;
      width:40px;
    }
    & > div > img:nth-of-type(6){
      left:62%;
      top:100px;
      width:40px;
    }
    & > div > img:nth-of-type(7){
      right:12%;
      top:40px;
      width:40px;
    }
    & > div > img:nth-of-type(8){
      left:28%;
      bottom:50px;
      width:40px;
    }
    & > div > img:nth-of-type(9){
      left:52%;
      bottom:60px;
      width:40px;
    }
    & > div > img:nth-of-type(10){
      right:12%;
      bottom:60px;
      width:40px;
    }
    & > div > img:nth-of-type(11){
      right:10%;
      bottom:150px;
      width:40px;
    }


    @media screen and (max-width:810px){
      & > div{
        width:90%;
      }
    }
    @media screen and (max-width:510px){
      & > div{
        width:100%;
      }
      & div > img:not(.back){
        width:20px;
      }
      & > div > img:nth-of-type(8){
        left:28%;
        bottom:0px;
      }
      & > div > img:nth-of-type(9){
        left:52%;
        bottom:20px;
      }
      & > div > img:nth-of-type(5){
        left:50%;
        top:70px;
       
      }
    }

`

const ButtonWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`