import React from 'react'
import * as s from "../styles/globalStyles";
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import JewellRenderer from "./JewellRenderer";
import revealring from "../assets/images/bg/_revealring.png";

const RenderSell = ({ data, blockchain, loading }) => {
    if (loading) {
        return (
            <s.Container jc={"center"} ai={"center"} >
                <s.ImageToggleRender image={revealring} />
                <s.TextTitle>The system is processing, please wait!</s.TextTitle>
                <s.BoxLoadingRender>
                    <s.StyledButtonLoading />
                </s.BoxLoadingRender>
            </s.Container>
        )
    }

    return (
        <s.Container jc={"center"} fd={"row"} style={{ flexWrap: "wrap" }}>
            {data.filter(item => item.sell > 0).map(item => (
                <s.Boxts key={item.id} style={{ padding: "18px", margin: "15px" }}>
                    <NavLink to={`/details/${item.id}`} >
                        <s.StyledImg>
                            <JewellRenderer jewell={item} />
                        </s.StyledImg>
                        <s.StyledTextBox>
                            {(item.gen0 === "1" || item.gen0 === "0") ?
                                (<s.TextDescription style={{ color: "#000" }}>{item.name}</s.TextDescription>)
                                : (<s.TextDescription style={{ color: "#000" }}>{item.name} + {item.gen0}</s.TextDescription>)}
                            <s.TextDescription style={{ color: "#000" }} >#{item.id}</s.TextDescription>
                        </s.StyledTextBox>
                        <s.StyledTextBox>
                            <s.TextDescription style={{ color: "#000" }}>Price</s.TextDescription>
                            <s.TextDescription style={{ color: "#000" }}>{blockchain.web3.utils.fromWei(item.sell, "ether")} BNB</s.TextDescription>
                        </s.StyledTextBox>
                    </NavLink>
                </s.Boxts>
            ))}
        </s.Container>
    );
}

export default RenderSell;

export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000000;
  }
`;