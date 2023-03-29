import styled from 'styled-components'
import { Link } from 'react-router-dom';

const ButtonL = (props:any) => {
    const children = props.children;
  return (
    <Link {...props}>{children}</Link>
  )
}

const ButtonWrapper = (props:any) =>{
  const children = props.children;
  return (
    <button {...props}>{children}</button>
  )
}

export const ButtonLink = styled(ButtonL)`
    display:flex;
    padding:12px 30px;
    gap:10px;
    align-items:center;
    background-color:${props => props.bg};
    color:${props => props.color};
    border:${props => props.border};
    border-radius:5px;
    cursor:pointer;
    font-weight:500;
    & > span{
      font-size:20px;
      display:flex;
      align-items:center;
    }
    @media only screen and (max-width: 470px){
      &{
        padding:9px 20px;
        font-size:15px;
      }
      & > span{
        font-size:17px;
      }
    }
`

export const Button = styled(ButtonWrapper)`
display:flex;
padding:12px 25px;
gap:10px;
align-items:center;
background-color:${props => props.bg};
color:${props => props.color};
border:${props => props.border};
border-radius:5px;
cursor:pointer;
& > span{
  font-size:20px;
  display:flex;
  align-items:center;
}
@media only screen and (max-width: 470px){
  &{
    padding:9px 20px;
    font-size:15px;
  }
  & > span{
    font-size:17px;
  }
}
`
