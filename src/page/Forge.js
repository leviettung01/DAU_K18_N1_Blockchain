import { useEffect, useState, useRef } from "react";
import * as s from "../styles/globalStyles";
import _bg from "../assets/images/bg/_bg.png"
import { fetchData } from "../redux/data/dataActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import JewellRenderer from "../componets/JewellRenderer";
import { BiDna } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CgAddR } from "react-icons/cg";


const Forge = () => {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [itemBreed, setItemBreed] = useState();
    const [itemTarget, setItemTarget] = useState();
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState('');

    const [loadingBreed, setLoadingBreed] = useState(false);
    const [loadingShow, setLoadingShow] = useState(false);

    let history = useHistory();

    const confettiRef = useRef(null);

    //Forge
    const forgeFee = (data.forgeFee / 1000000000000000000).toString();
    const Breeding = (_account, _id, _targetId, _loaction) => {
        setLoadingBreed(true);
        setLoadingShow(false);
        // console.log('-------', )
        blockchain.jewellFactory.methods
            .Forging(_id, _targetId, _loaction)
            .send({
                from: _account,
                value: blockchain.web3.utils.toWei(forgeFee, "ether"),
            })
            .once("error", (err) => {
                setLoadingBreed(false);
                console.log(err);
            })
            .then((receipt) => {
                setLoadingBreed(false);
                console.log(receipt);
                dispatch(fetchData(blockchain.account));
                setLoadingShow(true);
            });
    };
    //mint
    const mintFee = (data.mintFee / 1000000000000000000).toString();
    const mintNFT = (_account, _name) => {
        setLoading(true);
        setLoadingShow(false);
        blockchain.jewellFactory.methods
            .createRandomJewell(_name)
            .send({
                from: _account,
                value: blockchain.web3.utils.toWei(mintFee, "ether"),
            })
            .once("error", (err) => {
                setLoading(false);
                console.log(err);
            })
            .then((receipt) => {
                setLoading(false);
                console.log(receipt);
                dispatch(fetchData(blockchain.account));
                setLoadingShow(true);
            });
    };
    // mint fee
    const mintNFTFree = (_account, _name) => {
        setLoading(true);
        setLoadingShow(false);
        blockchain.jewellFactory.methods
            .createRandomJewellFree(_name)
            .send({
                from: _account,
            })
            .once("error", (err) => {
                setLoading(false);
                console.log(err);
            })
            .then((receipt) => {
                setLoading(false);
                console.log(receipt);
                dispatch(fetchData(blockchain.account));
                setLoadingShow(true);
            });
    };
    // update 
    useEffect(() => {
        if (blockchain.account !== "" && blockchain.jewellFactory !== null) {
            dispatch(fetchData(blockchain.account));
        }
    }, [blockchain.account, blockchain.jewellFactory, dispatch]);
    const newJewell = data.allOwnerJewells.filter(item => item.id >= (data.allJewells.length - 1)).map(item => item.id)
    console.log(newJewell)
    return (
        <>
            {/* handShow */}
            <s.Containertoggle
                ref={confettiRef}
                className={loadingShow === true ? "active-tab" : null}
            >
                <s.TextTitle>
                    Congratulations, You have successfully built a new NFT.
                </s.TextTitle>
                <s.Container fd={"row"} jc={"center"} ai={"center"} style={{ marginTop: "50px" }}>
                    <s.StyledButton
                        style={{ marginRight: "15px" }}
                        onClick={() => { history.push(`/mynft`) }}
                    >
                        View
                    </s.StyledButton>
                    <s.StyledButtonBreedShow
                        onClick={() => {
                            setLoadingShow(false);
                        }}
                    >
                        Close
                    </s.StyledButtonBreedShow>
                </s.Container>
            </s.Containertoggle>
            <s.Screen style={{ flexDirection: "row", justifyContent: "center" }} image={_bg} className={loadingShow === true ? "blur" : null}>
                <s.Container ai={"center"} style={{ margin: "1.9rem 5rem 1rem 0" }}>
                    <s.ContainerBreed ai={"center"} style={{ margin: "2rem 0 0 0" }}>
                        <s.TextTitle> Create Ring </s.TextTitle>
                        <s.ContainerBreed fd={"row"} jc={"center"} ai={"center"}>
                            <s.ContentBreed jc={"center"} ai={"center"}>
                                {/* itemBreed */}
                                <s.TextDescriptionBreed>Metal NFT</s.TextDescriptionBreed>
                                <s.CustomSelect
                                    onClick={e => setItemBreed(e.target.value)}
                                >
                                    {data.allOwnerJewells.filter(item => item.sell <= 0 && item.gen0 <= 1 && (item.name.substring(0, 5) === "Metal" || item.name.substring(0, 4) === "Ring")).map((item, index) =>
                                        <s.CustomOption key={index} value={item.id}>{item.id}</s.CustomOption>
                                    )}
                                </s.CustomSelect>
                                {itemBreed !== undefined ? (
                                    <>
                                        {data.allOwnerJewells.filter(item => item.id === itemBreed).map((item) => (
                                            <s.Box key={item.id} style={{ padding: "18px", margin: "15px 0 0 0" }}>
                                                <s.StyledImg>
                                                    <Link to={`/details/${item.id}`} >
                                                        <JewellRenderer jewell={item} />
                                                    </Link>
                                                </s.StyledImg>
                                                <s.Container>
                                                    <s.TextDescription>{item.name}</s.TextDescription>
                                                    <s.Container>
                                                        <s.TextDescription>#{item.id}</s.TextDescription>
                                                        <s.TextDescription><BiDna />Gen: {item.gen0}</s.TextDescription>
                                                    </s.Container>
                                                    <s.StyledTextBoxBoder>
                                                        {(parseInt(item.rarity) >= parseInt(item.gemslv)) ? (
                                                            <s.TextSubTitle>Rarity: <span style={{ color: "#ffffff" }}>{item.rarity}</span></s.TextSubTitle>
                                                        ) : (
                                                            <s.TextSubTitle>Rarity: <span style={{ color: "#ffffff" }}>{item.gemslv}</span></s.TextSubTitle>
                                                        )}
                                                    </s.StyledTextBoxBoder>
                                                </s.Container>
                                            </s.Box>
                                        ))}
                                    </>
                                ) : (
                                    <s.BoxBreed >
                                        <s.TextDescription>Select Metal NFT</s.TextDescription>
                                    </s.BoxBreed >
                                )}
                            </s.ContentBreed >
                            {/* target */}
                            <s.ContentBreed jc={"center"} ai={"center"}>
                                <s.TextDescriptionBreed>Gem NFT</s.TextDescriptionBreed>
                                <s.CustomSelect
                                    onClick={e => setItemTarget(e.target.value)}
                                >
                                    {data.allOwnerJewells.filter(item => item.sell <= 0 && item.gen0 < 1 && item.name.substring(0, 3) === "Gem").map((item, index) =>
                                        <s.CustomOption key={index} value={item.id}>{item.id}</s.CustomOption>
                                    )}
                                </s.CustomSelect>
                                {itemTarget !== undefined ? (
                                    <>
                                        {data.allOwnerJewells.filter(item => item.id === itemTarget).map((item) => (
                                            <s.Box key={item.id} style={{ padding: "18px", margin: "15px 0 0 0" }}>
                                                <s.StyledImg>
                                                    <Link to={`/details/${item.id}`} >
                                                        <JewellRenderer jewell={item} />
                                                    </Link>
                                                </s.StyledImg>
                                                <s.Container>
                                                    <s.TextDescription>{item.name}</s.TextDescription>
                                                    <s.Container>
                                                        <s.TextDescription>#{item.id}</s.TextDescription>
                                                        <s.TextDescription><BiDna /> Gen: {item.gen0}</s.TextDescription>
                                                    </s.Container>
                                                    <s.StyledTextBoxBoder>
                                                        {(parseInt(item.rarity) >= parseInt(item.gemslv)) ? (
                                                            <s.TextSubTitle>Rarity: <span style={{ color: "#ffffff" }}>{item.rarity}</span></s.TextSubTitle>
                                                        ) : (
                                                            <s.TextSubTitle>Rarity: <span style={{ color: "#ffffff" }}>{item.gemslv}</span></s.TextSubTitle>
                                                        )}
                                                    </s.StyledTextBoxBoder>
                                                </s.Container>
                                            </s.Box>
                                        ))}
                                    </>
                                ) : (
                                    <s.BoxBreed>
                                        <s.TextDescription>Select Gem NFT</s.TextDescription>
                                    </s.BoxBreed>
                                )}
                            </s.ContentBreed>
                        </s.ContainerBreed>
                        <s.InputTransfer
                            required
                            placeholder={"Enter company name"}
                            style={{ width: "90%", marginRight: "10px" }}
                            value={location}
                            onChange={(e) =>
                                setLocation(e.target.value)}
                        />
                        {/* button breed */}
                        {(itemBreed === undefined && itemTarget === undefined) || (location.length <= 0) ? (
                            <s.TextDescription style={{ color: "#eb4d4b", lineHeight: "0" }}>Metal, Gem undefined or Address value 0</s.TextDescription>
                        ) : (
                            <s.TextDescription style={{ color: "#fff", lineHeight: "0" }}>Will create the ring</s.TextDescription>
                        )}
                        <s.TextDescription>Create Ring Fee: 0.01 BNB</s.TextDescription>
                        {!loadingBreed &&
                            <s.StyledButtonTransfer
                                style={(itemBreed !== undefined && itemTarget !== undefined) && (location.length > 0) ? {} : { pointerEvents: "none", opacity: "0.2" }}
                                disabled={loadingBreed ? 1 : 0}
                                onClick={() =>
                                    Breeding(blockchain.account, itemBreed, itemTarget, location)
                                }
                            >
                                Create Ring
                            </s.StyledButtonTransfer>
                        }
                        {loadingBreed &&
                            <s.StyledButtonTransfer
                                style={{ pointerEvents: "none" }}
                                disabled={loadingBreed ? 1 : 0}
                            >
                                <s.StyledButtonLoading />
                            </s.StyledButtonTransfer>
                        }
                    </s.ContainerBreed>

                </s.Container>
                <s.Container ai={"center"} style={{ width: "40%", margin: "1.9rem 0 1rem 0" }}>
                    <s.ContainerBreed ai={"center"} style={{ width: "700px", margin: "2rem 0 0 0" }}>
                        <s.TextTitle> Exploit Metals and Gems </s.TextTitle>
                        <s.InputTransfer
                            required
                            placeholder={"Enter company name"}
                            style={{ width: "90%", marginRight: "10px" }}
                            value={location}
                            onChange={(e) =>
                                setLocation(e.target.value)}
                        />
                        {/* button breed */}
                        {data.allOwnerJewells.length < 2 ?
                            (
                                <>
                                    {(location.length <= 0) ? (
                                        <s.TextDescription style={{ color: "#eb4d4b", lineHeight: "0" }}>Company name value 0</s.TextDescription>
                                    ) : (
                                        <s.TextDescription style={{ color: "#fff", lineHeight: "0" }}>Will get Metals or Gems</s.TextDescription>
                                    )}
                                    {!loading &&
                                        <s.StyledButtonHome
                                            disabled={loading ? 1 : 0}
                                            style={location.length <= 0 ? { pointerEvents: "none", opacity: "0.2" }: {}}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                mintNFTFree(blockchain.account, location);
                                                setLocation('')
                                            }}>
                                            <CgAddR style={{ paddingRight: "10px" }} />Exploit Free ({data.allOwnerJewells.length}/2)
                                        </s.StyledButtonHome>
                                    }
                                    {loading &&
                                        <s.StyledButtonHome
                                            style={data.allOwnerJewells.length === 0 ? { pointerEvents: "none", opacity: "0.2" }:{}}
                                            disabled={loading ? 1 : 0}
                                        >
                                            <s.StyledButtonLoading />
                                        </s.StyledButtonHome>
                                    }
                                </>
                            ) : (
                                <>
                                    {/* Fee */}
                                    {(location.length <= 0) ? (
                                        <s.TextDescription style={{ color: "#eb4d4b", lineHeight: "0" }}>Company name value 0</s.TextDescription>
                                    ) : (
                                        <s.TextDescription style={{ color: "#fff", lineHeight: "0" }}>Will get Metals or Gems</s.TextDescription>
                                    )}
                                    {!loading &&
                                        <s.StyledButtonHome
                                            disabled={loading ? 1 : 0}
                                            style={data.allOwnerJewells.length === 0 || location.length <= 0 ? { pointerEvents: "none", opacity: "0.2" } :{}}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                mintNFT(blockchain.account, location);
                                                setLocation('')
                                            }}
                                        >
                                            <CgAddR style={{ paddingRight: "10px" }} /> Exploit
                                        </s.StyledButtonHome>
                                    }
                                    {console.log(data.allOwnerJewells.length === 0 && location.length <= 0)}
                                    {loading &&
                                        <s.StyledButtonHome
                                            style={data.allOwnerJewells.length === 0 ? { pointerEvents: "none", opacity: "0.2" }:{}}
                                            disabled={loading ? 1 : 0}
                                        >
                                            <s.StyledButtonLoading />
                                        </s.StyledButtonHome>
                                    }
                                </>
                            )}
                    </s.ContainerBreed>
                </s.Container>
            </s.Screen>

        </>
    )
}

export default Forge
