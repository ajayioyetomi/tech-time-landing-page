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
import { ButtonLink,Button } from './ButtonLink';
import bigClass from '../assets/big-class.png';
import smallClass from '../assets/small-class.png';

const buttonStyle={
    fontWeight:'600',
}

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
                        <ButtonLink to="/courses" color="var(--white-color)" bg="var(--primary-color)" border="var(--primary-color)">
                            View Courses
                        </ButtonLink>
                    </div>
                </div>
                <div>
                    <ButtonContainer>
                        <Button style={buttonStyle} bg="var(--white-color)" border="var(--white-color)" color="var(--dark-color)">
                            <img src={audioClass}alt="audio class"/>
                            Audio Classes
                        </Button>
                        <Button style={buttonStyle} bg="var(--white-color)" border="var(--white-color)" color="var(--dark-color)">
                            <img src={liveClass}alt="audio class"/>
                            Life Classes
                        </Button>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button style={buttonStyle} color="var(--dark-color)" bg="var(--white-color)" border="var(--white-color)">
                            <img src={recordedClass}alt="audio class"/>
                            Recorded Classes
                        </Button>
                        <Button style={buttonStyle} color="var(--dark-color)" bg="var(--white-color)" border="var(--white-color)">
                            <img src={liveClass}alt="audio class"/>
                            Life Classes
                        </Button>
                    </ButtonContainer>
                </div>

            </Item1>
            <Item2>
                <img className='big' src={bigClass} alt="b-class" />
                <img className='small' src={smallClass} alt="s-class" />

            </Item2>
        </Container>
    </Wrapper>
  )
}

export default HighQualitySection;


const Wrapper = styled.section`
    display:flex;
    padding:100px 0 130px;
    justify-content:center;
    align-items:center;
    positon:relative;
    background-color:var(--light-background);
    @media screen and (max-width:810px){
        &{
            padding:100px 0;
        }
    }
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
            gap:40px;
        }
        & > div{
            width:100%;
        }
    }

`
const Item1 = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
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
    position:relative;
    display:flex;
    flex:1;
    align-items:flex-end;
    flex-direction:column;
    & > img.big{
        width:85%;
        height:fit-content;
    }
    & > img.small{
        position:absolute;
        width:50%;
        left:-10%;
        bottom:-11vh;
        height:fit-content;
    }
    @media screen and (max-width:810px){
        & > img.big{
            width:75%;
        }
        & > img.small{
            width:45%;
            bottom:-15%;
            left:10%;
        }
    }
`

const ButtonContainer = styled.div`
    display:flex;
    align-items:center;
    gap:20px;
    &:nth-of-type(2){
        margin-top:20px;
        font-size:
    }
`;
