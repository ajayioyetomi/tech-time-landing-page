import styled from 'styled-components';
import crown from '../assets/crown.png';
import audioClass from '../assets/audio-class.png';
import liveClass from '../assets/live-class.png';
import recordedClass from '../assets/record-class.png';
import imgoooo from '../assets/oooo.png';
import ring from '../assets/ring.png';
import yellowZigZap from '../assets/yellow-zig-zag.png';
import droplet from '../assets/droplet.png';
import profile from '../assets/enrolled-student.png';
import notes from '../assets/notes.png';
import { ButtonLink } from './ButtonLink';

const HighQualitySection = () => {
  return (
    <Wrapper>
        <Container>
            <Item1>
                <div>
                    <img src={crown} alt="crown"/>
                    high quality video, audio & live classes
                </div>
                <div>
                    <p>
                        high-defination video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image
                    </p>
                    <div>
                        <ButtonLink color="var(--white-color)" bg="var(--primary-color)" border="var(--primary-color)">
                            View Courses
                        </ButtonLink>

                    </div>
                </div>
                

            </Item1>
        </Container>
    </Wrapper>
  )
}

export default HighQualitySection;


const Wrapper = styled.section`
    display:flex;
    padding:50px 0;
    justify-content:center;
    align-items:center;
    positon:relative;
    background-color:var(--light-background);
`

const Container = styled.div`
    width:85%;
    position:relative;
    display:flex;
    align-items:center;
    & > div{
        width:50%;
    }
    @media screen and (max-width:810px){
        &{
            flex-direction:column;
        }
    }

`
const Item1 = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    & > div:first-of-type{
        positon:relative;
        font-size:3.3vw;
        font-weight:700;
        font-family:var(--font-2);
        color:var(--dark-color);

    }
    & > div:first-of-type > img{
        position:absolute;
        top:-23px;
        left:-28px;
        width:45px;
        
    }

    & > div:nth-of-type(2){
        display:flex;
        flex-direction:column;
        gap:20px;
    }

    & > div:nth-of-type(2) > p{
        line-height:1.5;
        color:var(--gray-color);
        margin:0;
    }
    & > div:nth-of-type(2) > div{
        flex:1;
    }
    & > div:nth-of-type(2) > div > a{
        width:fit-content;
    }
`
const Item2 = styled.div`

`