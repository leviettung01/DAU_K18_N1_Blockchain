import React from "react";
import logo from "../assets/images/bg/_logo.png";
import * as s from "../styles/globalStyles";


function Footer() {

  return (
    <s.Container style={{ backgroundColor: "#1868b7", position: "relative", zIndex: "2" }} jc={"center"} ai={"center"}>
      <s.Containerfooter>
        <s.TextBoxLeft style={{ marginTop: "1rem", width: "30%", color: "#fff", flexDirection: "column", justifyContent: "flex-start" }}>
            <img src={logo} alt="Logo" style={{width: "20%", height: "20%",marginLeft: "-1rem" , backgroundSize: "cover", backgroundPosition: "cover" }} />
            <h1 style={{ color: "#FFF", fontSize: "2rem" }}>TN-NFTs</h1>
          <h3 style={{ width:"70%", color: "#FFF", fontSize: "0.9rem" }} >The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</h3>
        </s.TextBoxLeft>
        <s.TextBoxRight style={{ width: "70%", display: "flex", flexDirection: "column" }}>
          <s.ContainerfooterTitle>
            <s.TextTitle>Marketplace</s.TextTitle>
            <s.TextTitle>My Account</s.TextTitle>
            <s.TextTitle>Resources</s.TextTitle>
            <s.TextTitle>Company</s.TextTitle>
          </s.ContainerfooterTitle>
          <s.Containerfooter>
            <s.TextBox>
              <ul>All NFTs</ul>
              <ul>Art</ul>
              <ul>Collectibles</ul>
              <ul>Domain Names</ul>
            </s.TextBox>
            <s.TextBox>
              <ul>Profile</ul>
              <ul>Favorites</ul>
              <ul>Watchlist</ul>
              <ul>My Collections</ul>
            </s.TextBox>
            <s.TextBox>
              <ul>Learn</ul>
              <ul>Help Center</ul>
              <ul>Platform Status</ul>
              <ul>Partners</ul>
            </s.TextBox>
            <s.TextBox>
              <ul>About</ul>
              <ul>Careers</ul>
              <ul>Ventures</ul>
              <ul>Grants</ul>
            </s.TextBox>
          </s.Containerfooter>
        </s.TextBoxRight>
      </s.Containerfooter>
      <s.ContainerfooterFT>
        <s.TextSubTitleFooterContent>Le Viet Tung & Hoang Duc Nguyen</s.TextSubTitleFooterContent>
        <s.TextSubTitleFooterContent>DANANG ARCHITECTURE UNIVERSITY</s.TextSubTitleFooterContent>
      </s.ContainerfooterFT>
    </s.Container>
  );
}

export default Footer
