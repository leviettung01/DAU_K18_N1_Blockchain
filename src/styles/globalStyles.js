import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  background-color: #25272E;
  position: relative;
  z-index: 1;

  &.blur {
    filter: blur(2px);
  }
`;

export const ImageToggle = styled.div`
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100px;
  height: 100px;
`;

export const ImageToggleHome = styled.div`
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 76%;
  height: 400px;
  opacity: 0.8;

  @media screen and (max-width: 1600px) {
    width: 88%;
    height: 390px;
  }
`;

export const ImageToggleHomev2 = styled.div`
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 500px;
  height: 500px;
  margin-left: 2rem;
`;

export const ImageToggleHomev3 = styled.div`
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 540px;
  height: 630px;
`;

export const ImageToggleHomev4 = styled.div`
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 500px;
  height: 500px;
`;

export const ImageToggleRender = styled.div`
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 200px;
`;

export const ImageToggleRenderHome = styled.div`
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid rgb(255, 255, 255, 0.2);
`;

export const ImageToggleRenderv2 = styled.div`
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  width: 210px !important;
  height: 210px;
  border: solid 0.5px #333;
`;

export const ImageToggleBreed = styled.div`
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 300px;
  height: 100px;
`;

export const AnimationData = styled.div`
  height: 300px;
  width: 1000px;
  border: 1px solid #fff;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing space between components
export const SpacerSuperLarge = styled.div`
  height: 52px;
  width: 52px;
`;

// Used for providing space between components
export const SpacerUnTraLarge = styled.div`
  height: 82px;
  width: 82px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "#1868b7" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
`;

export const Containertoggle = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #68b8b8;
  width: 60%;
  height: 45vh;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  visibility: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 0.8rem;
  
  &.active-tab {
    visibility: visible;
  }
`;

export const ContainertoggleBreed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* &.open {
    visibility: visible;
  }

  &.close {
    visibility: hidden;
  } */
`;

export const ContainertoggleBreedShow = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  width: 1330px;
  box-sizing: border-box;
  background-color: #1868b7;
  border-radius: 0.8rem;
  position: relative;
  ;

  /* &.open {
    visibility: visible;
  }

  &.close {
    visibility: hidden;
  } */
`;

export const ContainerTabBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1868b7;
  width: 70%;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  border-radius: 0.8rem;
  padding: 15px;

  @media screen and (max-width: 1600px) {
    width: 88%;
  }
`;

export const ContainerHome = styled.div`
  display: flex;
  
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "#1868b7" : "none")};
  width: 70%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  background-color: #1868b7;
  border-radius: 0.8rem;

  @media screen and (max-width: 1600px) {
    width: 88%;
  }
`;

export const ContainerBoxHome = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  border-top: solid 1px #e2e1e1;

`;
export const ContainerImg = styled.div`
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: rgba(0, 0 , 0, 0.2);
  margin-bottom: 2rem;
  
  @media screen and (max-width: 1600px) {
    width: 90%;
  }
`;

export const ContainerBoxHomev2 = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "#1A1A22" : "none")};
  width: 70%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  border-radius: 20px;

  @media screen and (max-width: 1600px) {
    width: 88%;
  }
`;

export const ContainerBoxHomev3 = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "#1A1A22" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  border-top: 1px solid rgba(255, 255, 255, 0.3)
`;

export const ContainerHomeBox = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "#1868b7" : "none")};
  width: 70%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  box-sizing: border-box;

  @media screen and (max-width: 1600px) {
    width: 88%;
  }
`;

export const ContainerHomeProp = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "#1868b7" : "none")};
  width: 100%; 
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  background-color: #1868b7;
  border-radius: 0.8rem;
`;


export const ContainerfooterTitle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ test }) => (test ? "#1868b7" : "none")};
  width: 70%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  box-sizing: border-box;


  @media screen and (max-width: 1600px) {
    width: 88%;
  }
`;

export const Containerfooter = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ test }) => (test ? "#1868b7" : "none")};
  width: 70%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  
  @media screen and (max-width: 1600px) {
    width: 88%;
  }
`;

export const ContainerfooterFT = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ test }) => (test ? "#1868b7" : "none")};
  width: 70%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  border-top: 1px solid rgb(255 255 255 / 20%);
  
  @media screen and (max-width: 1600px) {
    width: 88%;
  }
`;





export const BoxViewHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ test }) => (test ? "#1868b7" : "none")};
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
`;


export const BoxHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  align-items: center;
  padding-top: 1rem;

  @media screen and (max-width: 1600px) {
    width: 100%;
  }
`;

export const InputTransfer = styled.input.attrs({type: "text"})`
  display: inline-block;
  width: 100%;
  height: 45px;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: #fff;
  box-sizing: border-box;
  border-radius: 0.4rem;
  padding: 0 10px;
  font-size: 16px;
  color: #000;

  &:focus {
    border-color: rgb(24, 104, 183);
  }
`;

export const InputTransferNumber = styled.input.attrs({type: "number"})`
  display: inline-block;
  width: 100%;
  height: 45px;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: #fff;
  box-sizing: border-box;
  border-radius: 0.4rem;
  padding: 0 10px;
  font-size: 16px;
  color: #000;

  &:focus {
    border-color: rgb(24, 104, 183);
  }
`;
// Details
export const StyledTextBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const TextDescriptionDetail = styled.p`
  color: #000;
  font-size: 30px;
  letter-spacing: 0.8px;
  line-height: 0;
  font-weight: 600;
`;

export const TextDescriptionBuy = styled.p`
  color: #ffffff;
  font-size: 14px;
  letter-spacing: 0.8px;
  font-weight: 600;
  line-height: 2px;
`;


export const TextSubTitleDetail = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.8px;
  line-height: 3px;
`;

export const TextTitleDetails  = styled.p`
  color: #fff;
  font-size: 18px;
  letter-spacing: 0.2px;
  line-height: 0;
  font-weight: 400;
`;

export const StyledTextBoxAround = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const StyledImgDetails = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 0.8rem;
  box-shadow: 0 0 1em 10px rgba(0, 0, 0, 0.7);
  cursor: pointer;
`;

export const BoxDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  box-sizing: border-box;
  border-radius: 0.8rem;
  margin-left: 5rem;
  ;
`;

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  box-sizing: border-box;
  border-radius: 0.8rem;

  @media screen and (max-width: 1600px) {
    width: 88%;
  }
  ;
`;

export const StyledButtonAction = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 0.4rem;
  border: 1px solid #fff;
  background: none;
  color: #fff;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 800;
  outline: none;
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(24, 104, 183);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButtonActionv2 = styled.button`
  width: 140;
  height: 50px;
  border-radius: 0.4rem;
  padding: 0 20px;
  border: 1px solid #fff;
  background: none;
  color: #fff;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 800;
  outline: none;
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(24,104,183, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid #fff;
    background-color: rgb(51,153,204);
    color: #fff;
  }

  @media screen and (max-width: 1600px) {
  }
`;

export const StyledButtonHomev2 = styled.button`
  width: 30%;
  height: 45px;
  border-radius: 0.4rem;
  border: 1px solid #fff;
  background: none;
  color: #fff;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 800;
  outline: none;
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(24, 104, 183, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButtonActionDetails = styled.button`
  width: auto;
  height: 45px;
  border-radius: 0.4rem;
  border: 1px solid #fff;
  background: none;
  padding: 0 15px;
  color: #fff;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 800;
  outline: none;
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(24, 104, 183);
  display: flex;
  justify-content: center;
  align-items: center;
`;

//navbarhelpers
export const MenuTabs = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
`;

export const Tabs = styled.a`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  cursor: pointer;
  transition: 0.5s;
  font-size: 18px;
  font-weight: 800;
  padding-left: 20px; 
  transition: 0.5s ease-out;
  border-bottom: 1px solid #ffffff;

  &.active-tab {
    color: #fff;
    background-color: rgb(70 134 197);
    border-radius: 0.7rem 0.7rem 0 0;
    border-bottom: 1px solid rgb(70 134 197);
  }

`;

export const Tabsad = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  cursor: pointer;
  transition: 0.5s;
  font-size: 18px;
  font-weight: 800;
  padding-left: 20px; 
  transition: 0.5s ease-out;
  border-bottom: 1px solid #ffffff;

  &.active-tab {
    color: #fff;
    background-color: rgb(70 134 197);
    border-radius: 0.7rem 0.7rem 0 0;
    border-bottom: 1px solid rgb(70 134 197);
  }

`;

export const StyledButtonTransfer = styled.button`
  display: block;
  height: 45px;
  width: auto;
  border-radius: 0.4rem;
  border: 1px solid rgb(255, 255, 255, 0.2);  
  background-color: rgb(51, 153, 204);
  color: #fff;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  transition: all 0.5s ease-in-out;
  font-weight: 600;
  outline: none;
  padding: 0 20px;
`;

export const StyledButtonBack = styled.button`
  display: flex;
  height: 45px;
  width: auto;
  align-items: center;
  border-radius: 0.4rem;
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(24, 104, 183);
  color: #fff;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  transition: all 0.5s ease-in-out;
  font-weight: 600;
  outline: none;
  padding: 0 20px;
`;
//
export const Boxts = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  color: #ffffff;
  border-radius: 0.8rem;
  transition: 0.2s;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
  position: relative;
  transition: 0.2s;

  &:hover {
    transform: translateY(-0.5%);
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.2)
  }
`;

export const Box = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  color: #ffffff;
  border-radius: 0.8rem;
  transition: 0.2s;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
  position: relative;
  transition: 0.2s;

  &:hover {
    transform: translateY(-0.5%);
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.2)
  }
`;

export const BoxTab = styled.div`
  display: block;  
  /* justify-content: center;
  align-items: center; */
  width: 50%;
`;

export const Imgbox = styled.div`
  display: inline-block;  
  width: 33%;
  margin: 0.4rem;
  float: left;
`;

export const TextBoxRight = styled.div`
  display: inline-block;  
  width: 45%;
  margin: 0.4rem;
`;

export const TextBoxLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;
`;

export const TextLogo = styled.div`
  display: flex;
`;

export const BoxTimerCouter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  /* border: 1px solid #ffffff; */
`;

export const StyledImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 0.8rem;
  cursor: pointer;
`;

export const StyledTextBoxBoder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
`;

export const StyledTextBoxName = styled.p`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledTextBoxNameDetails = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledTextBoxPrice = styled.p`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TextTitle = styled.p`
  color: #fff;
  font-size: 25px;
  font-weight: 600;
`;

export const TextTitleGameV2 = styled.p`
  color: #ffffff;
  font-size: 25px;
  font-weight: 600;
`;


export const TextSubTitle = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.8px;
  line-height: 2px;
`;

export const TextDescriptionBreed = styled.p`
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;

export const TextDescription = styled.p`
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.8px;
  font-weight: 600;
`;

export const TextTitleHome = styled.p`
  color: #000;
  font-size: 48px;
  letter-spacing: 0.8px;
  font-weight: 800;
  font-family: Poppins, sans-serif;
  line-height: 0px;

`;

export const TextTitleHomev3 = styled.p`
  color: #ffffff;
  font-size: 38px;
  letter-spacing: 0.8px;
  font-weight: 600;
  font-family: Poppins, sans-serif;
  line-height: 0px;
`;

export const TextTitleHomev2 = styled.p`
  color: #000;
  font-family: Poppins, sans-serif;
  font-size: 52px;
  font-weight: 700;
  line-height: 100%;
`;

export const TextSubTitleHome = styled.p`
  color: rgb(255, 255, 255, 0.6);
  font-size: 16px;
  font-weight: 400;
  line-height: 2px;
`;

export const TextSubTitleHomev2 = styled.p`
  color: #000;
  font-size: 16px;
  line-height: 20px;
  margin: -20px 0px 25px;

`;

export const TextSubTitleHomev3 = styled.p`
  color: rgb(255, 255, 255, 1);
  font-size: 18px;
  font-weight: 600;
`;

export const StyledButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  height: 44px;
  width: 10%;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.1px;
  border: 1px solid rgb(24, 104, 183, 0.2);  
  background-color: rgb(24, 104, 183);

  &:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid rgb(255, 255, 255, 0.2);  
    background-color: rgb(51, 153, 204);
    color: #fff;
  }
`;

export const StyledButtonget = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  height: 44px;
  width: 10%;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.1px;
  border: 1px solid rgb(255, 255, 255, 0.2);  
    background-color: rgb(51, 153, 204);

  &:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid rgb(255, 255, 255, 0.2);  
    background-color: rgb(255, 255, 255);
    color: #000;
  }
`;

export const StyledButtonv2 = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  height: 44px;
  width: 40%;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.1px;
  border: 1px solid rgb(24, 104, 183, 0.2);  
  background-color: rgb(24, 104, 183);

  &:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid rgb(255, 255, 255, 0.2);  
    background-color: rgb(51, 153, 204);
    color: #000;
  }
`;

export const StyledButtonBreedShow = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  height: 44px;
  width: 15%;
  color: #000;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.1px;
  border: 1px solid rgb(255, 255, 255);  
  background-color: rgb(255, 255, 255);

  &:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid #fff;
    background: #fff;
    color: #000000;
  }
`;

export const StyledButtonPrice = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  height: 20px;
  padding: 0 10px;
  color: #fff;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.1px;
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(24, 104, 183, 0.2);
  position: relative;
`;

export const StyledButtonHome = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  width: auto;
  border-radius: 0.4rem;
  padding: 0 18px;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.1px;
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(24, 104, 183, 0.2);

  &:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid #fff;
    background: #fff;
    color: #000000;
  }
`;

export const StyledButtonUnsale = styled.button`
  display: block;
  height: 40px;
  width: auto;
  border-radius: 0.4rem;
  border: 1px solid #ffd32a;
  background: none;
  color: #ffd32a;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  font-size: 12px;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
  font-weight: 600;
  outline: none;
  padding: 0 20px;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #ffd32a;
    visibility: none;
    color:#010606;
  }

  /* &:disabled {
    opacity: 0.2;
    pointer-events: none;
  } */
`;

export const StyledButtonLoading = styled.div`
  display: inline-block;
  align-items: center;
  width: 100%;
  width: 20px;
  height: 20px;
  background: transparent;
  border: 4px dotted #ffffff;
  border-radius: 50%;
  border-top-color: transparent;
  animation: button-loading-spinner 1.2s linear infinite;

  @keyframes button-loading-spinner {
    to {
      transform: rotate(360deg);
    }
  }
`
export const TextSubTitleFooterContent = styled.p`
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 200;
`;

export const TextBox = styled.div`
display: flex;
flex-direction: ${({ fd }) => (fd ? fd : "column")};
justify-content: ${({ jc }) => (jc ? jc : "space-between")};
align-items: ${({ ai }) => (ai ? ai : "flex-start")};
width: 25%;
color: #fff;
  
`;
//navbarHome
export const MenuTabsHome = styled.div`
  width: 35%;
  height: 40px;
  display: flex;
`;

export const TabHome = styled.a`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  transition: 0.5s;
  font-size: 16px;
  font-weight: 800;
  transition: 0.5s ease-in-out;
  border: 1px solid transparent;
      border-radius: 0.6rem;

  &.active-tab {
    transition: 0.5s ease-in-out;
    border: 1px solid rgb(255, 255, 255);
    background: rgb(255, 255, 255, 0.2);
    border-radius: 0.6rem;
  }

`;
//Game
export const ContainerGame = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "#1868b7" : "none")};
  width: 70%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  border-radius: 0.8rem;
  padding: 15px;

  
  @media screen and (max-width: 1600px) {
    width: 100%;
  }
`;

export const ContainerRarityGame = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "#1868b7" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  background-color: #1868b7;
  box-sizing: border-box;
  border-radius: 0.8rem;
  padding: 15px;
`;

export const ContentGame = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  width: auto;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  border-radius: 0.8rem;
  padding: 15px;
`;

export const ImageCamp = styled.div`
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 540px;
  height: 616px;
`;

export const TextDescriptionGame = styled.p`
  color: #ffffff;
  font-size: 14px;
  letter-spacing: 0.6px;
  font-weight: 400;
`;

export const TextTitleGame = styled.p`
  color: #ffffff;
  font-size: 25px;
  font-weight: 600;
`;

//Breed
export const ContentBreed = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column-reverse")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "#1868b7" : "none")};
  width: auto;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  background-color: #1868b7;
  box-sizing: border-box;
  border-radius: 0.8rem;
  padding: 15px;
`;

export const ContainerBreed = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "#1868b7" : "none")};
  width: auto;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  background-color: #1868b7;
  border-radius: 0.8rem;
  padding: 15px;
`;

export const BoxBreed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 232px;
  height: 431px;
  border: 2px dashed rgba(255, 255, 255, 1);
  background-color: transparent;
  border-radius: 0.8rem;
  margin-top: -15px;
  margin-bottom: 10px;
`

export const BoxBuy = styled.div`
  border: 1px solid rgb(24, 104, 183);
  background-color: rgb(24, 104, 183, 0.5);
  border-radius: 0.8rem;
  padding-Top: 20px; 
`

export const CustomSelect = styled.select`
  display: inline-block;
  width: 236px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 1);
  background: rgba(255, 255, 255, 0.2);
  outline: none;
  box-sizing: border-box;
  border-radius: 0.4rem;
  padding: 0 10px;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
  margin-top: 15px;
`
export const CustomOption = styled.option`
  display: inline-block;
  width: 100%;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(70 134 197);
  outline: none;
  box-sizing: border-box;
  border-radius: 0.4rem;
  padding: 0 10px;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
`

export const TextSubTitleBuy = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 400;
`;

export const TextTitleBuy = styled.p`
  color: #000;
  font-size: 30px;
  font-weight: 600;
  line-height: 0;
`;

export const TextName = styled.p`
  color: #000;
  font-weight: 600;
  font-size: 25px;
  line-height: 0;
`;

export const TextTableEvent = styled.td`
  color: rgb(255, 255, 255, 1);
  font-size: 18px;
  font-weight: 400;
  padding: 20px 25px;
`;

export const StyledTableRow = styled.tr`

  &:hover {
    cursor: pointer;
    background-color: rgb(255, 255, 255, 0.2);
  }
`;


export const TextTableName = styled.th`
  color: rgb(255, 255, 255, 1);
  font-size: 18px;
  font-weight: 400;
  padding: 10px 25px;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.6);
  border-radius: 0.8rem;
  text-align: left;
  width: 100%;
  overflow: hidden;
`;

export const StyledTableContent = styled.thead`   
  background-color: rgb(24, 104, 183); 
  border-radius: 0.8rem 0.8rem 0 0;
  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.4);
  align-items: center;
  width:100%;
  color: #fff;
  height: 30px;
`;

//popup
export const ShowItems = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  position: fixed;
  top: -16px;
  left:0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShowContent = styled.div`
  position: relative;
  width: 50%;
  height: 520px;
  background-color: #ffffff;
  border-radius: 0.8rem;
`;

export const StyledButtonClose = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  border: 1px solid #333333;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #333333;
    visibility: none;
    color: #ffffff;
  }
`;

export const TextTitlePopup = styled.p`
  display: flex;
  justify-content: flex-start;
  margin-left: 15px;
  color: #000000;
  font-size: 20px;
  font-weight: 600;
`;

export const BoxPopup = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  border: 1px solid #333333;
  border-radius: 0.8rem;
`;

export const StyledTextBoxPopup = styled.p`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TextDescriptionPopup = styled.p`
  color: #333333;
  font-size: 14px;
  letter-spacing: 0.8px;
  font-weight: 600;
  height: 5px;
`;

export const StyledImgPopup = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #333333;
  border-radius: 0.8rem;
  cursor: pointer;
`;
//MarketPlace
export const InputSearch = styled.input.attrs({type: "search"})`
  width: 40%;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 1);
  background: #fff;
  outline: none;
  box-sizing: border-box;
  border-radius: 0.4rem;
  padding: 0 20px;
  font-size: 15px;
  color: #000;
  transition: 0.3s;

  &:focus {
    border-color: rgb(255, 255, 255);
  }
`;

export const ContentMarket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  top: -100px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

//Pagination
export const StyledNumberPage = styled.div`
  color: #ffffff;
  padding: 3px 12px;
  transition: background-color .3s;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: 0.4rem;

  &.active-tab {
    border: 1px solid rgb(255, 255, 255);
    background-color: rgb(24, 104, 183, 0.2);
  }

  &:hover {
    border: 1px solid rgb(255, 255, 255);
    background-color: rgb(255, 255, 255, 0.2);
  }
`;

export const StyledNumber = styled.div`
  margin-left: 5px;
`;

export const TextDescriptionPage = styled.div`
  color: #ffffff;
  font-size: 14px;
  letter-spacing: 0.8px;
  font-weight: 600;
  cursor: pointer;

  &.disable {
    color: rgb(255, 255, 255, 0.4);
    pointer-events: none;
  }
`;
//
export const BoxLoadingRender = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
