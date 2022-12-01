import React from 'react'
import * as s from "../styles/globalStyles";
import { Link } from "react-router-dom";
import JewellRenderer from "./JewellRenderer";
import revealring from "../assets/images/bg/_revealring.png";

const RenderStatus = ({ data, loading }) => {
  if (loading) {
    return (
      <s.Container jc={"center"} ai={"center"} >
        <s.ImageToggleRender image={revealring} />
        <s.TextTitle>The system is in the process of processing, please wait!</s.TextTitle>
        <s.BoxLoadingRender>
          <s.StyledButtonLoading />
        </s.BoxLoadingRender>
      </s.Container>
    )
  }
  // console.log(data.filter(item => parseInt((item.readyTime - Date.now() / 1000) / 3600) <= 0) && data.filter(item => item.sell <= 0))
  return (
    <s.Container jc={"flex-start"} fd={"row"} style={{ flexWrap: "wrap" }}>
      {data.filter(item => item.gen0 <= 0).map(item => (
        <s.Box key={item.id} style={{ padding: "18px", margin: "15px" }}>
          <s.StyledImg>
            <Link to={`/details/${item.id}`} >
              <JewellRenderer jewell={item} />
            </Link>
          </s.StyledImg>
          <s.Container>
            <s.StyledTextBox>
              {(item.gen0 === "1" || item.gen0 === "0") ?
                (<s.TextDescription>{item.name}</s.TextDescription>)
                : (<s.TextDescription>{item.name} + {item.gen0}</s.TextDescription>)}
              <s.TextDescription>#{item.id}</s.TextDescription>
            </s.StyledTextBox>
            <s.StyledTextBoxBoder>
              {(parseInt(item.rarity) >= parseInt(item.gemslv)) ? (
                <s.TextSubTitle>Rarity: <span style={{ color: "#ffffff" }}>{item.rarity}</span></s.TextSubTitle>) : (
                <s.TextSubTitle>Rarity: <span style={{ color: "#ffffff" }}>{item.gemslv}</span></s.TextSubTitle>
              )}
              <s.TextSubTitle>Gen: <span style={{ color: "#ffffff" }}>{item.gen0}</span></s.TextSubTitle>
            </s.StyledTextBoxBoder>
          </s.Container>
        </s.Box>
      ))}
    </s.Container>
  );
}

export default RenderStatus
