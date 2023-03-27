import styled from 'styled-components'
import pattern from '../assets/pattern.png';

const Home = () => {
  return (
    <main>
      <BannerWrapper>
        <img src={pattern}  alt="background-pattern"/>
      </BannerWrapper>
    </main>
  )
}

export default Home


const BannerWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;
  height:100vh;
  background-color:var(--primary-background);
  position:relative;
  & > img{
    width:100%;
    height:auto;
    position:absolute;
    top:0;
    left:0%;
  }
`