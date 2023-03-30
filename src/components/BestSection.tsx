import styled from 'styled-components'
import best from '../assets/best.png';
import mentors from '../assets/montors.png';
import prices from '../assets/prices.png';
import meeting from '../assets/meeting.png';
import oneOnOne from '../assets/one-on-one.png';
import greenTriangle from '../assets/green-triangle.png';
import purpleCircle from '../assets/purple-circle.png';


const item2List = [
  {src:mentors,title:'Experienced Mentors',content:'High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. '},
  {src:oneOnOne,title:'One-on-one meetings',content:'High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. '},
  {src:meeting,title:'One-on-one meetings',content:'High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. '},
  {src:prices,title:'Affordable Prices',content:'High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. '},
]

const BestSection = () => {
  return (
    <Wrapper>
      <Container>
        <Item1>
          <div>This is why we are best from others</div>
          <p>
            high-defination video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image
          </p>
          <img className="best" src={best} alt="best" />
          
        </Item1>
        <Item2>
          {item2List?.map(({src,title,content}:any)=>
            <EachCard>
              <img src={src} alt={title} />
              <div>{title}</div>
              <p>{content}</p>
            </EachCard>          
          
          )}
          
        </Item2>
      </Container>
      <img className='green-triangle' src={greenTriangle} alt="triangle"/>
      <img src={purpleCircle} alt="purple" className='circle' />
    </Wrapper>
  )
}

export default BestSection

const EachCard = styled.div`
 
  width:calc(50% - 10px);
  background-color:var(--white-color);
  padding:25px 15px;
  display:flex;
  flex-direction:column;
  gap:10px;
  border-radius:8px;
  
  & > p{
    color:var(--gray-color);
    line-height:1.5;

  }
  & > div{
    font-weight:600;
    font-size:18px;
    margin-top:15px;
  }
  & > img{
    width:45px;
    height:fit-content;
  }
  @media screen and (max-width:810px){
    width:calc(50% - 5px);
  }
  @media screen and (max-width:610px){
    padding: 20px 8px;
    & > img{
      width:35px
    }
    & > div{
      font-size:14px;
      maring-top:2px
    }
    & > p{
      font-size:13px;
    }
  }
`

const Wrapper = styled.section`
    background-color:var(--light-background);
    display:flex;
    justify-content:center;
    align-item:center;
    position:relative;
    padding:80px 0;
    & > div{
        width:var(--main-width);
    }
    & > img.green-triangle{
      position:absolute;
      bottom:15vw;
      left:30px;
      width:15px;
    }
    & > img.circle{
      position:absolute;
      bottom:40px;
      right:50px;
      width:15px
    }

    @media screen and (max-width:810px){
      padding:30px 0;
      & > img.green-triangle{
        bottom:35vw;
        left:5px;
        width:10px
      }
      & > img.circle{
        bottom:70vw;
        width:10px;
        right:5px;
      }
    }

`;

const Container = styled.div`
    display:flex;
    position:relative;
    align-items:center;
    gap:50px;
    & > div{
      width:calc(50% - 25px);
    }

    @media screen and (max-width:950px){
      flex-direction:column;
      & > div{
        width:90%;
      }
    }
    @media screen and (max-width:767px){
      & > div{
        width:100%;
      }
    }
`;

const Item1 = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
    gap:30px;
    & > div:first-of-type{
        font-size:3.5vw;
        font-weight:700;
        font-family:var(--font-2);
        color:var(--dark-color);
    }
    & > p{
      color:var(--gray-color);
      line-height:1.5;
      width:90%;
    }
    & > img.best{
      width:100%;
      height:fit-content;
    }
    
    @media screen and (max-width:810px){
      & > div:first-of-type{
        text-align:center;
        font-size:5.5vw;
      }
      & > p{
        text-align:center;
        width:100%;
      }
    

    }
`;

const Item2 = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:20px;  
   
   
    @media screen and (max-width:810px){
      gap:10px;
    }
`;