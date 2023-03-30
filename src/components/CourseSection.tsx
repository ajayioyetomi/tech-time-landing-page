import React, { useState } from 'react'
import styled from 'styled-components';
import l1 from '../assets/l1.png';
import l2 from '../assets/l2.png';
import l3 from '../assets/l3.png';
import l4 from '../assets/l4.png';
import l5 from '../assets/l5.png';
import l6 from '../assets/l6.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import lesson from '../assets/lession.png';
import time from '../assets/time.png';
import rating from '../assets/grade.png';
import { ButtonLink } from './ButtonLink';

const listOfCourses = [
    {
        src1:l1,
        src2:p1,
        category:'Design',
        title:'Introduction to user research in UX Design',
        duration:'23hrs 50mins',
        lessons:15,
        price:15.00,
        rating:4.7,
        total_rated:32.7,
        name:'leonard victor'
    },
    {
        src1:l2,
        src2:p2,
        category:'Marketing',
        title:'Introduction to  new marketing audience',
        duration:'22hrs 30mins',
        lessons:22,
        price:32.00,
        rating:4.7,
        total_rated:8.7,
        name:'Jeffrey williams'
    },
    {
        src1:l3,
        src2:p3,
        category:'Development',
        title:'Introduction to HTML, CSS & Bootstrap',
        duration:'45hrs 50mins',
        lessons:55,
        price:55.00,
        rating:4.7,
        total_rated:12.7,
        name:'claretta mason',
    },
    {
        src1:l4,
        src2:p4,
        category:'Development',
        title:'Introduction to Javascript, Git & GitHub',
        duration:'30hrs 55mins',
        lessons:22,
        price:45.00,
        rating:4.7,
        total_rated:32.7,
        name:'Jessica duke'
    },
    {
        src1:l5,
        src2:p5,
        category:'Marketing',
        title:'Introduction to outroom  marketing analysis',
        duration:'33hrs 50mins',
        lessons:26,
        price:25.00,
        rating:4.7,
        total_rated:4.7,
        name:'Samuel jacobs'
    },
    {
        src1:l6,
        src2:p6,
        category:'Marketing',
        title:'Introduction to live  marketing analysis',
        duration:'10hrs 50mins',
        lessons:32,
        price:25.00,
        rating:4.7,
        total_rated:15.7,
        name:'adam smith'
    },
]

const CourseSection = () => {
    const [activeCategory, setActiveCategory] = useState<null | string>(null);
    const handleActive = (category:string | null) =>{
        setActiveCategory(category);
    }
  return (
    <Wrapper>
        <div>
            <TopContainer>
                <div>browse our popular courses</div>
                <p>High-defination video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image</p>
            </TopContainer>
            <BottomContainer>
                <OptionDiv onChange={handleActive} />
                <CourseContainer>
                    {listOfCourses?.map((eachCourse:any,index:number) =>
                        <EachCourse key={index} style={!activeCategory?{display:'flex'}:activeCategory.toLocaleLowerCase() == eachCourse.category.toLocaleLowerCase()?{display:'flex'}:{display:'none'}}>
                            <img src={eachCourse.src1} alt="course" />
                            <EachCategoryDisplay>
                                <span>{eachCourse.category}</span>
                                <div>
                                    <span>{eachCourse.rating}K <img src={rating} alt="rating"/></span>
                                    <span>
                                        ( {eachCourse.total_rated} K+ )
                                    </span>
                                </div>
                            </EachCategoryDisplay>
                            <div>
                                {eachCourse.title}
                            </div>
                            <EachTimeDisplay>
                                <div>
                                    <img src={time} alt="time" />
                                    <span>{eachCourse.duration}</span>
                                </div>
                                <div>
                                    <img src={lesson} alt="lesson" />
                                    <span>{eachCourse.lessons} Lessons</span>
                                </div>
                            </EachTimeDisplay>
                            <EachPriceDisplay>
                                <div>
                                    <img src={eachCourse.src2} alt="tutor" />
                                    <span>{eachCourse.name}</span>
                                </div>
                                <div>${eachCourse.price}.00</div>
                            </EachPriceDisplay>
                        </EachCourse>
                    )}
                </CourseContainer>
                <ExploreDiv>
                    <ButtonLink to="/courses" bg="var(--primary-background)"
                        color="var(--white-color)" border="var(primary-color)"
                    >
                        Explore All Courses
                    </ButtonLink>
                </ExploreDiv>
            </BottomContainer>
        </div>
    </Wrapper>
  )
}

export default CourseSection

const OptionDiv = (props:any) =>{
    const [active,setActive] = useState<number>(0);
    const onChange = props.onChange;
    const handleActive = (index:number,category:string) =>{
        if(index == 0)onChange(null)
        else onChange(category);
        setActive(index);
    }
    const list = [
        'All Categories',
        'Design',
        'Development',
        'Marketing'

    ]
    return<OpitonWrapper>
        {list?.map((eOption:any,index:number) => <span className={active == index ? 'active':''} key={index} onClick={()=>handleActive(index,eOption)}>{eOption}</span>)}
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
    @media screen and (max-width:700px){
        gap:10px;
        & > span{
            font-size:2.5vw;
            padding:.5rem 1rem;
        }
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
    @media screen and (max-width:600px){
        padding:30px 0;
        & > div{
            width:96%;
        }
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
    width:100%;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:20px;
    @media screen and (max-width:910px){
        grid-template-columns:repeat(2,1fr);
        row-gap:20px;
        column-gap:10px;
    }

`

const EachCourse = styled.div`
    padding:12px 12px 20px;
    border-radius:8px;
    display:flex;
    flex-direction:column;
    background-color:var(--white-color);
    gap:5px;
    & > img:first-of-type{
        width:100%;
    }
    & > div:nth-of-type(2){
        font-family:var(--font-2);
        font-weight:600;
        color:var(--dark-color);
        padding:15px 0;
        font-size:1.5vw;
    }
    @media screen and (max-width:600px){
        & > div:nth-of-type(2){
            font-size:13px;
        }
    }
`
const EachCategoryDisplay = styled.div`
    display:flex;
    flex:1;
    justify-content:space-between;
    align-items:center;
    & > span:first-of-type{
        font-size:11px;
        padding:2px 10px;
        color:var(--primary-color);
        border-radius:10px;
        background-color:var(--secondary-background);
        height:fit-content;
    }
    & > div{
        display:flex;
        gap:10px;
        align-items:center;
        font-size:10px;
        color:var(--gray-color);
    }
    & > div > span{
        display:flex;
        align-items:center;
        gap:3px;
    }
    & > div > span > img{
        width:11px;
        position:relative;
        top:-1px;
    }
    @media screen and (max-width:600px){
        & > div {
            flex-direction:column;
            gap:5px;
        }
    }
`

const EachTimeDisplay = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:var(--gray-color);
    & > div{
        display:flex;
        align-item:center;
        gap:10px;
        font-size:13px;
    }
    & > div > img{
        height:14px;
    }
    @media screen and (max-width:600px){
        & > div{
            gap:4px;
        }
        & > div > span{
            font-size:9px;
        }
        & div > img{
            height:10px;
        }
    }
`

const EachPriceDisplay = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    margin-top:13px;
    justify-content:space-between;
    & > div:first-of-type{
        display:flex;
        gap:10px;
        align-items:center;
    }
    & > div:first-of-type > span{
        text-transform:capitalize;
        font-weight:600;  
    }
    & > div:last-of-type{
        font-family:var(--font-2);
        color:var(--primary-color);
        font-size:22px;
        font-weight:600;
    }
    @media screen and (max-width:810px){
        & > div:first-of-type > img{
            width:20px;
        }
        & > div:first-of-type > span{
            font-size:12px;
        }
        & > div:last-of-type{
            font-size:14px;
        }
    }


`

const ExploreDiv = styled.div`
    display:flex;
    justify-content:center;
    margin-top:20px;
`