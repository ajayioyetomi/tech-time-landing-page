import React from 'react'
import styled from 'styled-components';
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';
import instagram from '../assets/Instagram.png';
import discord from '../assets/discord.png';
import { Link } from 'react-router-dom';

const imgList = [
  {src:facebook},
  {src:twitter},
  {src:youtube},
  {src:instagram},
  {src:discord},
]

const linkList = [
  {name:'Home',path:'/'},
  {name:'About Us',path:'/about'},
  {name:'Our Courses',path:'/courses'},
  {name:'Home',path:'/'},
  {name:'Our Community',path:'/community'},
]
const linkList2 = [
  {name:'Help Center',path:'/help'},
  {name:'Partner',path:'/partner'},
  {name:'Suggestion',path:'/suggestion'},
  {name:'Blog',path:'/blog'},
  {name:'NewLetter',path:'/news'},
]

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FirstDiv>
          <img src={logo} alt="logo" />
          <div>Reach out to us on any of our social media networks</div>
          <div>
              {imgList?.map((src:any,index:number) => <Link key={index} to="#">
                <img src={src.src} alt="socials" />
              </Link>)}
          </div>
        </FirstDiv>
        <ListDiv>
          <div>Useful Links</div>
          {linkList?.map((eLink:any,index:number) => 
            <Link to={eLink.path}>{eLink.name}</Link>
          )}
        </ListDiv>
        <ListDiv>
          <div>Community</div>
          {linkList2?.map((eLink:any,index:number) => 
            <Link to={eLink.path}>{eLink.name}</Link>
          )}
        </ListDiv>
        <FormDiv>
          <div>subscribe us</div>
          <form>
            <input type="text"/><button type='submit'>Send Message</button>
          </form>

        </FormDiv>
        


      </Container>
    </Wrapper>
  )
}

export default Footer;

const Wrapper = styled.footer`
  padding:70px 0 160px;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:var(--dark-background);
`;

const Container = styled.div`;
  width:var(--main-width);
  display:flex;
  justify-content:space-between;
  @media screen and (max-width:930px){
    flex-wrap:wrap;
    row-gap:30px;
    & > *{
      width:50%;

    }
  }
  @media screen and (max-width:700px){
    & > *{
      width:100%;

    }
  }
`;

const FirstDiv = styled.div`
 
  max-width:230px;
  & > img{
    width:100px;
  }
  & > div:first-of-type{
    margin-top:12px;
    color:var(--white-color);
    font-weight:300;
  }
  & > div:last-of-type{
    margin-top:20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  @media screen and (max-width:500px){
    &:first-of-type{
      margin-bottom:50px;
    }
  }
`

const ListDiv = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
  & > div{
    font-weight:bold;
    font-family:var(--font-2);
    color:var(--white-color);
    margin-bottom:20px;
    font-size:18px
  }
  & > a{
    color:var(--white-color);
  }
`

const FormDiv = styled.div`
  display:flex;
  flex-direction:column;
  gap:35px;
  & > div{
    font-weight:bold;
    font-family:var(--font-2);
    color:var(--white-color);
    text-transform:capitalize;
  }
  & > form > input{
    background-color:var(--input-back);
    border:1px solid var(--primary-color);
    padding:10px 5px 10px;
    width:180px;
  }
  & > form > button{
    padding:11px;
    border-radius: 0 3px 3px 0;
    background-color:var(--primary-color);
    color:var(--white-color);
    outline:none;
    border:none;

  }
  @media only screen (max-width:810px){
    & > form > input{
      width:fit-content;
    }
  }

`