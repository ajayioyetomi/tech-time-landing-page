import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import {HiMenu as MenuIcon} from 'react-icons/hi';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
  const [activeIndex,setActiveIndex] = useState<number>(0);
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
  return (
    <HeaderWrapper>
      <div>
        <StyledLink to="/">
          <img src={logo} alt="logo" />
        </StyledLink>
        <NavWrapper>
          <div>
            {linkList.map((eLink:any,index:number) =>
              <StyledLink className={activeIndex == index?'active':''} key={index} to={eLink.path}>{eLink.name}</StyledLink>
            )}

          </div>
          <MenuButton>
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
  position:sticky;
  top:0;
  left:0;
  background-color:var(--primary-background);
  & > div{
    width:var(--main-width);
    height:100px;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  & > div > a{
    width:100px;
    display:flex;
    justify-content:center;
    align-item:center;
  }
  & > div > a > img{
    width:100px;
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
   }
   & > div > a:last-of-type{
      padding:10px 25px;
      border-radius:4px;
      color:var(--primary-color) !important;
      background-color:var(--white-color);
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
   @media screen and (max-width:767px){
    display:flex;
   }
`




