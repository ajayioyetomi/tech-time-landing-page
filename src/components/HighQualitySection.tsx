import styled from 'styled-components';
import crown from '../assets/crown.png';
import audioClass from '../assets/audio-class.png';
import liveClass from '../assets/live-class.png';
import recordedClass from '../assets/record-class.png';
import imgoooo from '../assets/oooo.png';
import ring from '../assets/side-ring.png';
import yellowZigZag from '../assets/yellow-zig-zag.png';
import greenZigZag from '../assets/green-zig-zag.png';
import enrolledStudent from '../assets/enrolled-student.png';
import droplet from '../assets/droplets.png';
import notes from '../assets/notes.png';
import { ButtonLink,Button } from './ButtonLink';
import bigClass from '../assets/big-class.png';
import smallClass from '../assets/small-class.png';
import css from '../css/home.module.scss';

const buttonStyle={
    fontWeight:'600',
}

const HighQualitySection = () => {
  return (
    <Wrapper>
        <Container>
            <Item1>
                <div>
                    <span><img src={crown} alt="crown"/>High</span> quality video, audio & live classes
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
                            <img src={notes}alt="notes"/>
                            50+ Notes
                        </Button>
                    </ButtonContainer>
                </div>

            </Item1>
            <Item2>
                <img className={css.ring} src={ring} alt="ring"/>
                <img className='big' src={bigClass} alt="b-class" />
                <img className={css.enrolledStudent} src={enrolledStudent} alt="enrolled student" />
                <img className='small' src={smallClass} alt="s-class" />
                <img className={css.droplet} src={droplet} alt="droplet"/>
                <img className={css.greenZigZag} src={greenZigZag} alt="green zig-zap" />
                <img className={css.yellowZigZag} src={yellowZigZag} alt="yellow zig-zap" />
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
    overflow-x:hidden;
    @media screen and (max-width:810px){
        &{
            padding:80px 0;
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
    & > div:first-of-type > span{
        font-weight:700;
        font-family:var(--font-2);
        position:relative;
        display:inline-block;
    }
    & > div:first-of-type > span > img{
        position:absolute;
        top:-25px;
        left:-30px;
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
        display:flex;
        flex:1;
    }
    & > div:nth-of-type(2) > div > a{
        width:fit-content;
    }
    @media screen and (max-width:810px){
        & > div:first-of-type{
            text-align:center;
            font-size:5vw;
        }
        & > div:nth-of-type(2) > p{
            text-align:center;
        }
        & > div:nth-of-type(2) > div{
            justify-content:center;
        }
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
        position:relative;
        z-index:1;
    }
    & > img.small{
        position:absolute;
        width:50%;
        left:-10%;
        bottom:-11vh;
        height:fit-content;
        z-index:1;
    }
    @media screen and (max-width:950px){
        & > img.small{
            left:5%;
        }
    }
    @media screen and (max-width:810px){
        & > img.big{
            width:75%;
        }
        & > img.small{
            width:50%;
            bottom:-15%;
            left:5%;
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
    @media screen and (max-width:810px){
        justify-content:center;
    }
    @media screen and (max-width:550px){
        & > button{
            font-size:13px;
            padding:13px 15px;
        }
        & > button > img{
            width:20px;
        }
    }
`;
