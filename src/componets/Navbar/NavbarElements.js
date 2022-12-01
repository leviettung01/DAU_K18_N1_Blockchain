import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem calc((100vw - 1400px) / 2);
  z-index: 10;
  font-family: Poppins, sans-serif;
  font-weight: 800;
  font-size: 18px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #1868b7;
  border-bottom: 1px solid rgb(255 255 255 / 20%);
  box-shadow: 0 0 1em 5px rgb(51 51 51 / 40%);

  @media screen and (max-width: 1600px) {
    padding: inherit;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  &.active {
    color: #000;
  }

  &:after {
    content: '';
    position: absolute;
    background-color: #969696;
    height: 3px;
    width: 0;
    left: 0;
    bottom: 10px;
    transition: 0.3s
  }

  &:hover {
    color: #969696;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const NavLinkLogo = styled(Link)`
  color: #a0a0a0;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  margin-left: 2.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 75%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 2.5rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  padding: 10px 20px;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border: 1px solid rgb(24, 104, 183, 0.2);  
  background-color: #002960;

  &:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid rgb(24, 104, 183, 0.2);  
    background-color: rgb(51, 153, 204);
    color: #fff;
  }
`;