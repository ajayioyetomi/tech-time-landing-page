import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import {HiMenu as MenuIcon} from 'react-icons/hi';
import {FaTimes as CancelIcon} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const linkList = [
  {path:'/',name:'Home'},
  {path:'/about-us',name:'About us'},
  {path:'/courses',name:'Courses'},
  {path:'/testimonial',name:'Testimonial'},
  {path:'/community',name:'Community'},
  {path:'/enroll',name:'Enroll Now'},
]

const Header = () => {
  const location = useLocation();
  const [activeMenu,setActiveMenu] = useState(false);
  const [activeIndex,setActiveIndex] = useState<number>(0);
  const [isTop,setIsTop] = useState<boolean>(true);
  const handleActiveLink = () =>{
      let path = location.pathname;
      let i,len = linkList.length;
      setActiveIndex(0);
      for(i = 0;i<len;i++){
        let link = linkList[i];
        let check = path.search(link.name) != -1;
        if(check){
          setActiveIndex(i);
          break;
        }
      }
  }
  useEffect(()=>{
    handleActiveLink()
  },[location.pathname])
  useEffect(()=>{
    const handleScroll = () =>{
      let yScroll = window.scrollY;
      if(yScroll > 5){
        setIsTop(false);
      }
      else{
        setIsTop(true);
      }
    }
    handleScroll();
    window.addEventListener('scroll',handleScroll);
    return ()=> window.removeEventListener('scroll',handleScroll); 
  },[])
  return (
    <HeaderWrapper>
      <div style={{height:isTop?'110px':'80px'}}>
        <StyledLink to="/">
          <img style={{width:isTop?'120px':'100px'}} src={logo} alt="logo" />
        </StyledLink>
        <NavWrapper>
          <div className={activeMenu ? 'active':''} >
            <MenuButton onClick={()=>setActiveMenu(false)} style={{color:'var(--primary-color)',alignSelf:'flex-end'}}>
                <CancelIcon/>
            </MenuButton>
            {linkList.map((eLink:any,index:number) =>
              <StyledLink className={activeIndex == index?'active':''} key={index} to={eLink.path}>{eLink.name}</StyledLink>
            )}
          </div>
          <MenuButton onClick={()=>setActiveMenu(true)}>
              <MenuIcon/>
          </MenuButton>
        </NavWrapper>

      </div>
      
      
    </HeaderWrapper>
  )
}

export default Header;

const HeaderWrapper = styled.header`
  display:flex;
  align-items:center;
  justify-content:center;
  position:fixed;
  z-index:100;
  width:100%;
  top:0;
  left:0;
  background:transparent;
  & > div{
    width:var(--main-width);
    height:110px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    transition:all 0.4s;
  }
  & > div > a{
    width:120px;
    display:flex;
    justify-content:center;
    align-item:center;
  }
  & > div > a > img{
    width:120px;
    transition:all 0.4s;
  }
`;

const NavWrapper = styled.nav`
   display:flex;
   align-items:center;
   & > div{
    flex:1;
    display:flex;
    align-items:center;
    gap:25px;
    position:relative;
    right:0;
   }
   & > div > a:last-of-type{
      padding:10px 25px;
      border-radius:4px;
      color:var(--primary-color) !important;
      background-color:var(--white-color);
   }
   @media screen and (max-width:810px){
      & > div{
        position:fixed;
        flex-direction:column;
        align-items:flex-start;
        gap:20px;
        width:320px;
        top:0;
        right:-320px;
        background-color:var(--dark-background);
        height:100%;
        padding:20px;
        transition:all 0.6s;
      }
      & > div.active{
        right:0px;
      }
      & > div > a:last-of-type{
        padding:10px 25px;
        border-radius:4px;
        color:var(--white-color) !important;
        background-color:var(--primary-color);
     }
   }
`;

const StyledLink = styled(Link)`
   color:var(--link-color);
   &:hover{
    color: var(--white-color);
   }
   &.active{
    color:var(--white-color);
   }
   @media screen and (max-width : 810px){
    &:hover{
      color: var(--primary-color);
     }
     &.active{
      color:var(--primary-color);
     }
   }
`

const MenuButton = styled.button`
   background-color:transparent;
   border:none;
   outline:None;
   color:var(--white-color);
   display:none;
   justify-content:center;
   align-items:center;
   font-size:25px;
   cursor:pointer;
   @media screen and (max-width:810px){
    display:flex;
   }
`





