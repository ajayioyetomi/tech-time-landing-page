import styled from 'styled-components'

const Home = () => {
  return (
    <main>
      <BannerWrapper>

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
  background-color:var(--primary-background);
  & > img{

  }
`