import React from 'react'
import styled from 'styled-components'

const ComingSoon = () => {
  return (
    <Wrapper>
        Coming Soon<br/><br/>
        Page Currently Under Maintenance
    </Wrapper>
  )
}

export default ComingSoon

const Wrapper = styled.section`
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    position:relative;
    z-index:-1;
    color:var(--primary-color);
    font-weight:bold;
`