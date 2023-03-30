import React,{useState} from 'react';
import styled from 'styled-components';
import yellowZigZag from '../assets/yellow-zig-zag.png';
import css from '../css/home.module.scss';
import rightLump from '../assets/left-lump.png';
import leftLump from '../assets/right-lump.png';
import blueRing from '../assets/blue-ring.png';
import o from '../assets/o.png';

const faqList = [
    {
        question:'Is there a free trial available?',
        answer:'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. '
    },
    {
        question:'Can I change my plan later?',
        answer:'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. '
    },
    {
        question:'Are the courses lifetime?',
        answer:'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. '
    },
    {
        question:'Do i get certified after taking courses?',
        answer:'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. '
    },
    {
        question:'How do i reach out to mentors?',
        answer:'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. '
    },
    {
        question:'Do we get job ready after taking courses?',
        answer:'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. '
    }
]

const FaqSection = () => {
    const [menuIndex,setMenuIndex] = useState<null | number>(null);
    const handleFaq = (index:number) =>{
        if(index == menuIndex){
            setMenuIndex(null);
            return;
        }
        setMenuIndex(index);
    }
  return (
    <Wrapper>
        <Container>
            <TopContainer>
                <div>frequently asked questions</div>
                <p>
                    High-defination video is video of higher resolution and quality than standard definition. While there's no standard meaning for high definition, generally any standard video image
                </p>
            </TopContainer>
            <BottomContainer>
                {faqList?.map((eachFaq:any,index:number) =>
                    <EachFAQ>
                        <div style={index == menuIndex?{color:'var(--primary-color)'}:{color:'var(--dark-color)'}} onClick={()=>handleFaq(index)}>
                            <div>{eachFaq.question}</div>
                            <span>{index == menuIndex?'-':'+'}</span>
                        </div>
                        {index == menuIndex ?<div>
                            {eachFaq.answer}
                        </div>:''}
                    </EachFAQ>
                )}

            </BottomContainer>

        </Container>
        <img src={yellowZigZag} alt="yellow-z" className={css.yZig}/>
        <img src={rightLump} alt="right" className={css.rightLump}/>
        <img src={leftLump} alt="left" className={css.leftLump}/>
        <img src={blueRing} alt="blue" className={css.blueRing}/>
        <img src={o} alt="yellow o" className={css.o} />
    </Wrapper>
  )
}

export default FaqSection;

const Wrapper = styled.section`
    display:flex;
    justify-content:center;
    padding:40px 0;
    position:relative;
`;

const Container = styled.div`
    width:700px;
    display:flex;
    flex-direction:column;
    gap:50px;

    @media only screen and (max-width:810px){
        width:92%;
    }
`;

const TopContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    text-align:center;
    & > div{
        font-family:var(--font-2);
        font-weight:700;
        color:var(--dark-color);
        font-size:3.5vw;
        text-transform:capitalize;
      
    }
    & > p{
        color:var(--gray-color);
        margin:0;
        line-height:1.5;
    }

    @media screen and (max-width:750px){
        & > div{
            font-size:5.5vw;
        }
        & > p{
            font-size:14px;

        }
    }
`

const BottomContainer = styled.div`
    display:flex;
    gap:20px;
    flex-direction:column;
`
const EachFAQ = styled.div`
    display:flex;
    flex-direction:column;
    gap:5px;
    padding:0 0 20px;
    border-bottom:1px solid var(--gray-border);
    & > div:first-of-type{
        display:flex;
        padding-right:10px;
        justify-content:space-between;
        align-items:center;
        cursor:pointer;
    
    }
    & > div:first-of-type > div{
        font-weight:700;
        font-size:20px;
    }
    & > div:first-of-type > span{
        font-size:20px;
    }
    & > div:nth-of-type(2){
        font-size:14px;
        color:var(--gray-color);
        line-height:1.6;
    }
    @media screen and (max-width:810px){
        & > div:first-of-type > div{
            font-size:17px;
        }
    }

`