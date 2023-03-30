import React from 'react'
import styled from 'styled-components';

const ClientSection = () => {
  return (
    <Wrapper>
        <Containers>
            <TopContainer>
                <div>what our clients are saying</div>
                <p>
                    high-defination video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image</p>
            </TopContainer>

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
    width:var(--main-width);
    display:flex;
    flex-direction:column;
    gap:30px;
`
const TopContainer = styled.div`
    width:100%;
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