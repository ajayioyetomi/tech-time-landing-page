import { useState } from 'react';
import styled from 'styled-components';
import client1 from '../assets/client-1.png';
import client2 from '../assets/client-2.png';
import client3 from '../assets/client-3.png';
import css from '../css/home.module.scss';

const clientList = [
    {
        text:'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world',
        name:'bella moon',
        title:'product designer',
        src:client1,
    },
    {
        text:'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world',
        name:'samuel fortune',
        title:'product designer',
        src:client2,
    },
    {
        text:'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world',
        name:'samuel fortune',
        title:'product designer',
        src:client3,
    },
    {
        text:'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world',
        name:'ajayi taiwo',
        title:'product designer',
        src:client1,
    }
    
]

const ClientSection = () => {
    const [active,setActive] = useState<any>(css.firstInd);
  return (
    <Wrapper>
        <Containers>
            <TopContainer>
                <div>what our clients are saying</div>
                <p>
                    high-defination video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image</p>
            </TopContainer>
            <BottomContainer>
                <div>
                    {clientList?.map((eachClient:any,index:number) => 
                        <EachClient key={index} className={active}>
                            <p>{eachClient.text}</p>
                            <div>
                                <img src={eachClient.src} alt="profile" />
                                <div>
                                    <span>{eachClient.name}</span>
                                    <span>{eachClient.title}</span>
                                </div>

                            </div>
                        </EachClient>
                    )}

                </div>
            </BottomContainer>
            <Indicator onChange={setActive}/>
            
        </Containers>
    </Wrapper>
  )
}

export default ClientSection;

const Wrapper = styled.section`
    display:flex;
    justify-content:center;
    background-color:var(--light-background);
`
const Containers = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:30px;
`
const TopContainer = styled.div`
    width:var(--main-width);
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:15px;
    & > div{
        font-family:var(--font-2);
        font-weight:700;
        font-size:3.5vw;
        color:var(--dark-color);
        text-align:center;
        text-transform:capitalize;
    }
    & > p{
        margin:0;
        color:var(--gray-color);
        text-align:center;
        width:700px;
        line-height:1.5;
    }

    @media screen and (max-width:810px){
        & > div{
            font-size:5.5vw;
        }
        & > p{
            width:85%;
            font-size:14px;
        }
    }
` 

const BottomContainer = styled.div`
    width:100%;
    overflow:hidden;
    padding:30px 0;
    & > div{
        width:fit-content;
        display:flex;
        gap:20px;
    }
`
const EachClient = styled.div`
    background-color:var(--white-color);
    width:38vw;
    padding:35px 20px ;
    border-radius:8px;
    display:flex;
    flex-direction:column;
    position:relative;
    transition:all 0.4s linear;
    gap:10px;
    flex-shrink:0;
    & > p{
        margin:0;
        font-size:16px;
        color:var(--gray-color);
        line-height:1.5;
    }
    & > div{
        margin-top:10px;
        display:flex;
        align-items:center;
        gap:10px;
    }
    & > div > div{
        display:flex;
        flex-direction:column;
        text-transform:capitalize;
    }
    & > div > div > span:first-of-type{
        font-weight:bold;
    }
    & > div > div > span:last-of-type{
        color:var(--gray-color);
        font-size:12px
    }

    @media screen and (max-width:810px){
        width:75vw;
        & > p{
            font-size:14px;
        }
        
    }

`

const Indicator = (props:any) =>{
    const [ind,setInd] = useState<number>(0);
    const onChange = props.onChange;
    const handleIndicator = (className:any,index:number) =>{
        onChange(className);
        setInd(index)
    }
    const list = [
        {className:css.firstInd},
        {className:css.secondInd},
        {className:css.thirdInd},
        {className:css.forthInd},
    ]
    return <IndicatorDiv>
        {list?.map((eachInd:any,index:number) =>
            <span onClick={()=>handleIndicator(eachInd.className,index)}  className={ind == index?'active':''} ></span>
        )}
    </IndicatorDiv>
}

const IndicatorDiv = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5px;
    margin-bottom:40px;
    & > span{
        display:inline-block;
        width:8px;
        height:8px;
        border-radius:50%;
        background-color:var(--secondary-background);
        cursor:pointer;
    }
    & > span.active{
        background-color:var(--primary-color);
    }
`