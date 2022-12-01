import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/data/dataActions";
import { connect } from "../redux/blockchain/blockchainActions";
import * as s from "../styles/globalStyles";
import _bg from "../assets/images/bg/_bg.png";
import _center from "../assets/images/bg/center.png";
import _m2 from "../assets/images/bg/m2.png";
import _m3 from "../assets/images/bg/m3.png";
import _m4 from "../assets/images/bg/m4.png";
import _m5 from "../assets/images/bg/m5.png";
import _m6 from "../assets/images/bg/m6.png";
import _m7 from "../assets/images/bg/m7.png";
import _m8 from "../assets/images/bg/m8.png";
import _m9 from "../assets/images/bg/m9.png";
import _m10 from "../assets/images/bg/m10.png";
import _m11 from "../assets/images/bg/m11.png";
import _m12 from "../assets/images/bg/m12.png";
import _m13 from "../assets/images/bg/m13.png";
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import SimpleSlider from "../componets/Slick";
import RenderTopSell from "../componets/RenderTopSell";

const Home = () => {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const [products] = useState([_m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9, _m10, _m11, _m12, _m13]);
    const [productIndex] = useState(0);

    const data = useSelector((state) => state.data);

    const [currentPage] = useState(1);
    const [pageNumberLimit] = useState(5);

    const indexOfLastItem = currentPage * pageNumberLimit;
    const indexOfFirstItem = indexOfLastItem - pageNumberLimit;


    //price list
    const [priceList, setPriceList] = useState(data.allJewells.filter(item => item.sell > 0));
    const sortByPrice = () => {
        const sorted = priceList.sort((a, b) => {
            return b.sell - a.sell;
        });
        setPriceList(sorted);
    };

    //sort
    useEffect(() => {
        sortByPrice()
    },)

    console.log(priceList)

    let firstFourProducts = products.slice(productIndex);

    // update 
    useEffect(() => {
        if (blockchain.account !== "" && blockchain.jewellFactory !== null) {
            dispatch(fetchData(blockchain.account));
        }
    }, [blockchain.account, blockchain.jewellFactory, dispatch]);

    return (
        <>
            <s.Screen image={_bg}>
                <s.Container flex={1} ai={"center"}>
                    <s.TextTitleHomev2 style={{ textAlign: "center", fontSize: "2.5rem" }}>Explore, collect, and sell NFTs</s.TextTitleHomev2>
                    <s.ContainerImg >
                        <h1 style={{ paddingLeft: "20px"}}>Top</h1>
                        <RenderTopSell data={priceList.slice(indexOfFirstItem, indexOfLastItem)} blockchain={blockchain} />
                    </s.ContainerImg>
                    <s.StyledButton style={{ width: "17%", alignItems: "center" }}
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                        }}
                    >
                        Start Now
                    </s.StyledButton>
                    {blockchain.errorMsg !== "" ? (
                        <s.TextDescription>{blockchain.errorMsg}</s.TextDescription>
                    ) : null}
                    <s.ContainerImg style={{ marginTop: "3rem" }} >
                        <h1 style={{paddingLeft: "15px"}}>Notable collections</h1>
                        <s.BoxHome >
                            <SimpleSlider data={firstFourProducts} />
                        </s.BoxHome>
                    </s.ContainerImg>
                </s.Container>

            </s.Screen>
            <h1 style={{marginLeft: "95px"}}>NFT 101</h1>
            <s.ContainerBoxHome test ai={"center"}>
                <s.ContainerBoxHomev2 fd={"row-reverse"} ai={"center"} jc={"space-between"} >
                    <s.TextBoxRight>
                        <h1>Your NFT journey starts here.</h1>
                        <s.TextSubTitleHomev2>
                            Guides, practical tips, and support articles for first-time creators, experienced collectors, and everyone in between.
                        </s.TextSubTitleHomev2>
                        <s.StyledButtonv2
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(connect());
                            }}
                        >
                            <NavLink to="/mynft" >
                                Buy Now
                            </NavLink>
                        </s.StyledButtonv2>
                    </s.TextBoxRight>
                    <s.ImageToggleHomev2 image={_center} />
                </s.ContainerBoxHomev2>

                <s.ContainerBoxHomev3 ai={"center"} style={{ backgroundColor: "#fff" }}>
                    <s.ContainerBoxHomev2 fd={"row"} ai={"center"} jc={"space-between"}>
                        <s.TextBoxRight>
                            <h1>Join The NFTs Clubhouse</h1>
                            <s.TextSubTitleHomev2>Don't miss the opportunity to own precious jewelry sets.</s.TextSubTitleHomev2>
                        </s.TextBoxRight>
                        <s.Container>

                            <NavLink1
                                to={{ pathname: "#" }}
                                target="_blank"
                            >
                                <s.StyledButtonActionv2>
                                    GitHub
                                </s.StyledButtonActionv2>
                            </NavLink1>
                        </s.Container>
                    </s.ContainerBoxHomev2>
                </s.ContainerBoxHomev3>
            </s.ContainerBoxHome>
        </>
    )
}

export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000000;
  }

  @media screen and (max-width: 1600px) {
    padding: 0 0rem;
  }
`;

export const NavLink1 = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000000;
  }
`;

export default Home
