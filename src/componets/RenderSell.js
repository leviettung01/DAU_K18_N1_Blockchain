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

    function fromNow(date, nowDate = Date.now(), rft = new Intl.RelativeTimeFormat('en', { numeric: "auto" })) {
        const SECOND = 1000;
        const MINUTE = 60 * SECOND;
        const HOUR = 60 * MINUTE;
        const DAY = 24 * HOUR;
        const WEEK = 7 * DAY;
        const MONTH = 30 * DAY;
        const YEAR = 365 * DAY;
        const intervals = [
            { ge: YEAR, divisor: YEAR, unit: 'year' },
            { ge: MONTH, divisor: MONTH, unit: 'month' },
            { ge: WEEK, divisor: WEEK, unit: 'week' },
            { ge: DAY, divisor: DAY, unit: 'day' },
            { ge: HOUR, divisor: HOUR, unit: 'hour' },
            { ge: MINUTE, divisor: MINUTE, unit: 'minute' },
            { ge: 30 * SECOND, divisor: SECOND, unit: 'seconds' },
            { ge: 0, divisor: 1, text: 'just now' },
        ];
        const now = typeof nowDate === 'object' ? nowDate.getTime() : new Date(nowDate).getTime();
        const diff = now - (typeof date === 'object' ? date : new Date(date)).getTime();
        const diffAbs = Math.abs(diff);
        for (const interval of intervals) {
            if (diffAbs >= interval.ge) {
                const x = Math.round(Math.abs(diff) / interval.divisor);
                const isFuture = diff < 0;
                return interval.unit ? rft.format(isFuture ? x : -x, interval.unit) : interval.text;
            }
        }
    }

    return (
        <s.Container jc={"flew-start"} fd={"row"} style={{ flexWrap: "wrap" }}>
            {data.filter(item => item.sell > 0).map(item => (
                <s.Box key={item.id} style={{ padding: "18px", margin: "15px" }}>
                    <NavLink to={`/details/${item.id}`} >
                        <s.StyledImg>
                            <JewellRenderer jewell={item} />
                        </s.StyledImg>
                        <s.StyledTextBox>
                            {(item.gen0 === "1" || item.gen0 === "0") ?
                                (<s.TextDescription>{item.name}</s.TextDescription>)
                                : (<s.TextDescription>{item.name} + {item.gen0}</s.TextDescription>)}
                            <s.TextSubTitle>#{item.id}</s.TextSubTitle>
                        </s.StyledTextBox>
                        <s.StyledTextBox>
                            <s.TextDescription>Price</s.TextDescription>
                            <s.TextDescription>{blockchain.web3.utils.fromWei(item.sell, "ether")} BNB</s.TextDescription>
                        </s.StyledTextBox>
                        <s.StyledTextBox>
                            <s.StyledButtonPrice>
                                <s.TextDescriptionBuy>
                                    {blockchain.account === item.currentOwner.toLowerCase() ? "View" : "Buy now"}
                                </s.TextDescriptionBuy>
                            </s.StyledButtonPrice>
                        </s.StyledTextBox>
                        <s.StyledTextBox style={{ justifyContent: "flex-end" }}>
                            <s.TextSubTitle>
                                {fromNow(item.sellTime * 1000)}
                            </s.TextSubTitle>
                        </s.StyledTextBox>
                        <s.StyledTextBoxBoder>
                            {(parseInt(item.rarity) >= parseInt(item.gemslv)) ?
                                (<s.TextSubTitle>Rarity: <span style={{ color: "#ffffff" }}>{item.rarity}</span></s.TextSubTitle>)
                                : (
                                    <s.TextSubTitle>Rarity: <span style={{ color: "#ffffff" }}>{item.gemslv}</span></s.TextSubTitle>
                                )}
                            <s.TextSubTitle>Gen: <span style={{ color: "#ffffff" }}>{item.gen0}</span></s.TextSubTitle>
                        </s.StyledTextBoxBoder>
                    </NavLink>
                </s.Box>
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