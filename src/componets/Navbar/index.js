import React from 'react'
import { Nav, NavLink, NavLinkLogo, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import { useDispatch, useSelector } from "react-redux";
import { connect } from '../../redux/blockchain/blockchainActions';
import { useEffect } from "react";
import { fetchData } from "../../redux/data/dataActions";
import { IoWalletOutline } from "react-icons/io5";
import _logo from "../../assets/images/bg/_logo.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const account = blockchain.account;
  const isAdmin = blockchain.account === data.admin.toLowerCase();

    useEffect(() => {
      if (account !== "" && account !== null) {
        dispatch(fetchData(account));
      }
    }, [account, dispatch]);
  
    // only show nav links if there is a connected account
    const links = account !== null
    ? (
      <>
        <NavLink to="/" exact activeStyle>Home</NavLink>
        <NavLink to="/mynft" activeStyle>My NFT</NavLink>
        <NavLink to="/forge" activeStyle>Create & Exploit</NavLink>
        <NavLink to="/marketplace" activeStyle>Market Place</NavLink>
      </>
    ) : null
    // only show nav links if there is admin
    const admin = isAdmin
    ? (
        <NavLink to="/admin" activeStyle>Admin</NavLink>
    ) : null

  return (
    <Nav>
      <NavLinkLogo to='/'>
        <img src={_logo} alt="Logo" style={{height: "100%", backgroundSize: "cover", backgroundPosition: "cover"}} />
        <h1 style={{color: "#FFF", margin:"2rem"} }>TN-NFTs</h1>
      </NavLinkLogo>
      <Bars />
      <NavMenu>
        {admin}
        {links}
        {blockchain.account !== null ? (
        <NavBtn>
          <NavBtnLink 
            to="/"
            style={{pointerEvents: "none"}}
            onClick={(e) => {
              e.preventDefault();
              dispatch(connect());
            }}
          >
            {account.substring(0, 4)}....
            {account.substring(account.length - 4)}
          </NavBtnLink>
        </NavBtn>
        ) : (
        <NavBtn>
          <NavBtnLink to='/'  
            onClick={(e) => {
              e.preventDefault();
              dispatch(connect());
            }}>
            <IoWalletOutline/>
          </NavBtnLink>
        </NavBtn>
        )}
      </NavMenu>
    </Nav>
  );
}

export default Navbar
