import styled from 'styled-components'
import pattern from '../assets/pattern.png';
import { Link } from 'react-router-dom';
import css from '../css/home.module.scss';
import {FiArrowUpRight as ArrowIcon1} from 'react-icons/fi';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import hero_girl from '../assets/hero-girl.png';
import imgoo from '../assets/oo.png';
import imgo from '../assets/o.png';
import zigZag from '../assets/zig-zag.png';
import vsCode from '../assets/vs-code.png';
import bulb from '../assets/bulb.png';
import triangle from '../assets/triangle.png';
import figma from '../assets/figma.png';
import wordPress from '../assets/word-press.png';
import { SoftSection } from '../components';

const imgList = [
  {src:img1},
  {src:img2},
  {src:img3},
  {src:img4},
  {src:img5}
]
const imgList2 = [
  {src:vsCode,className:css.vsCode},
  {src:bulb,className:css.bulb},
  {src:imgoo,className:css.imgoo2},
  {src:triangle,className:css.triangle},
  {src:figma,className:css.figma},
  {src:wordPress,className:css.wordPress},
  {src:imgo,className:css.imgo2},
]
const Home = () => {
  return (
    <main>
      <BannerWrapper>
        <img src={pattern}  alt="background-pattern"/>
        <img src={pattern}  alt="background-pattern"/>
        <img src={pattern}  alt="background-pattern"/>
        <img src={pattern}  alt="background-pattern"/>
        <BannerContent>
          <div className='textDiv'>
            <h1>
              Grow your skills to advance your career path 
            </h1>
            <p>
              build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
            </p>
            <ButtonWrapper>
              <div>
                <ButtonLink to="/" color="var(--white-color)" bg="transparent" border="1px solid var(--white-color)">
                  Get Started Now  <span><ArrowIcon1/></span>
                </ButtonLink>
                <ButtonLink bg="var(--white-color)" color="var(--primary-color)" border="var(--white-color)"  to="/enroll">Enroll Now</ButtonLink>
              </div>
              <div>
                <ImageWrapper>
                    {imgList?.map((eImg:any,index:number) => <img alt={`profile${index+1}`} className={index == 2?'':index%2?css.ani2:css.ani1} src={eImg.src} />)}
                </ImageWrapper>
                <div>
                  <span>255k+</span>
                  <span>Previews</span>
                </div>
              </div>
            </ButtonWrapper>
            <img className={css.imgoo} src={imgoo} alt="oo" />
            <img className={css.imgo} src={imgo} alt="o" />
            <img className={css.zigZag} src={zigZag} alt="zig-zag" />
          </div>
          <HeroWrapper>
              <div>
                <img src={hero_girl}  alt="hero"/>
              </div>
              {imgList2?.map(({src,className},index:number)=> <img src={src} className={className} alt={`alt-${index}`}/>)}
              
          </HeroWrapper>
        </BannerContent>
      </BannerWrapper>
      <SoftSection />
    </main>
  )
}

export default Home;

const BLink = (props:any)=>{
  return <Link {...props}>{props.children}</Link>
}


const BannerWrapper = styled.section`
  display:flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;
  height:115vh;
  background-color:var(--primary-background);
  position:relative;
  & > img{
    width:100%;
    height:auto;
    position:absolute;
    top:0;
    left:0%;
  }
  @media screen and (max-width: 810px){
    height:fit-content;
    min-height:400px;
  }
`
const BannerContent = styled.div`
    position:relative;
    z-index:1;
    display:flex;
    width:var(--main-width);
    & > div{
      width:50%;
    }
    & > div.textDiv{
      display:flex;
      flex-direction:column;
      justify-content:center;
      gap:30px;
      position:relative;
    }
    & h1{
      
      font-family:var(--font-2);
      font-size:3.5vw;
      color:var(--white-color);
      line-height:1.3;
      margin:0;
      margin-top:15vh;
    }
    &  p{
      color:var(--light-color);
      margin:0;
      width:75%;
      line-height:1.5;

    }
    @media screen and ( max-width :810px ){
      &{
        padding-top:30px;
        flex-direction:column;
        gap:30px;
      }
      & > div{
        width:100%;
      }
      & > div.textDiv{
        align-items:center;
      }
      & h1{
        
        text-align:center;
        font-size:6vw;
      }
      & p{
        width:100%;
        text-align:center;
      }
      
    }
`

const ButtonWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    & > div:first-of-type{
      display:flex;
      gap:20px;
    }
    & > div:nth-of-type(2){
      display:flex;
      gap:10px;
      align-items:center;
    }
    & > div:nth-of-type(2) > div:nth-of-type(2){
      display:flex;
      flex-direction:column;
      color:var(--white-color);
      align-items:center;

    }
    & > div:nth-of-type(2) > div:nth-of-type(2) > span:first-of-type{
      font-family:var(--font-2);
      font-weight:900;
      font-size:21px;
    }
`;

const ButtonLink = styled(BLink)`
    display:flex;
    padding:12px 30px;
    gap:10px;
    align-items:center;
    background-color:${props => props.bg};
    color:${props => props.color};
    border:${props => props.border};
    border-radius:5px;
    cursor:pointer;
    font-weight:500;
    & > span{
      font-size:20px;
      display:flex;
      align-items:center;
    }
    @media only screen and (max-width: 470px){
      &{
        padding:9px 20px;
        font-size:15px;
      }
      & > span{
        font-size:17px;
      }
    }
`

const ImageWrapper = styled.div`
    position:relative;
    & > img{
      position:relative;
      width:60px;
      margin-left:-20px;
    }
    & > img:first-of-type{
      margin-left:0;
    }
  
    
`

const HeroWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-end;
    position:relative;
    & > div{
      height:80%;
      display:flex;
      justify-content:center;
    }
    & > div > img{
      height:100%;
    }
    @media screen and (max-width:810px){
      & > div{
        height:fit-content;
      }
      & > div > img{
        width:80%;
      }
    }
    @media screen and (max-width:600px){
      & > div{
        height:fit-content;
      }
      & > div > img{
        width:90%;
      }
    }
`


