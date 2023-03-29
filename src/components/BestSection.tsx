import React from 'react'
import styled from 'styled-components'

const BestSection = () => {
  return (
    <Wrapper>BestSection</Wrapper>
  )
}

export default BestSection


const Wrapper = styled.section`
    background-color:var(--light-background);
    display:flex;
    justify-content:center;
    align-item:center;
    padding:50px 0;
    & > div{
        width:var(--main-width);
    }

`