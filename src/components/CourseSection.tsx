import React, { useState } from 'react'
import styled from 'styled-components';


const CourseSection = () => {
  return (
    <Wrapper>
        <div>
            <TopContainer>
                <div>browse our popular courses</div>
                <p>High-defination video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image</p>
            </TopContainer>
            <BottomContainer>
                <OptionDiv />
                <CourseContainer>

                </CourseContainer>
            </BottomContainer>
        </div>
    </Wrapper>
  )
}

export default CourseSection

const OptionDiv = (props:any) =>{
    const [active,setActive] = useState<number>(0);
    const handleActive = (index:number) =>{
        setActive(index);
    }
    const list = [
        'All Categories',
        'Design',
        'Development',
        'Marketing'

    ]
    return<OpitonWrapper>
        {list?.map((eOption:any,index:number) => <span className={active == index ? 'active':''} key={index} onClick={()=>handleActive(index)}>{eOption}</span>)}
    </OpitonWrapper>
}

const OpitonWrapper = styled.div`
    display:flex;
    width:fit-content;
    justify-content:center;
    align-items:center;
    gap:20px;
    & > span{
        padding:12px 30px;
        border-radius:5px;
        font-weight:600;
        color:var(--gray-color);
        cursor:pointer;
    }
    & > span.active{
        background-color:var(--white-color);
        color:var(--primary-color);
    }
`

const Wrapper = styled.section`
    display:flex;
    justify-content:center;
    position:relative;
    padding: 60px 0;
    background-color:var(--light-background);
    & > div{
        width:var(--main-width);
    }
`;

const TopContainer = styled.div`
    position:relative;
    display:flex;
    align-items:center;
    flex-direction:column;
    gap:20px;

    & > div{
        text-align:center;
        text-transform:capitalize;
        font-weight:700;
        font-size:3.5vw;
        font-family:var(--font-2);
        color:var(--dark-color);
    }
    & > p{
        margin:0;
        color:var(--gray-color);
        line-height:1.8;
        width:700px;
        text-align:center;
    }
    @media screen and (max-width:750px){
        & > div{
            font-size:5.5vw;
        }
        & > p{
            width:90%;
        }
    }
`;

const BottomContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:30px;
    align-items:center;
    margin-top:50px;
`

const CourseContainer = styled.div`
    diplay:grid;
    grid-template-columns:repeat(1fr,3);
    gap:20px;

`

const EachCourse = styled.div`

`