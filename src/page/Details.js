import React, { useEffect, useState, useRef } from 'react';
import * as s from "../styles/globalStyles";
import JewellRenderer from "../componets/JewellRenderer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData } from "../redux/data/dataActions";
import { removeData } from '../redux/data/dataActions';
import _color from "../assets/images/bg/_color.png";
import { RiWallet3Line } from "react-icons/ri";
import { BiArrowBack } from 'react-icons/bi';
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const blockchain = useSelector((state) => state.blockchain);

  const [loadingTabTransfer, setLoadingTabTransfer] = useState(false);
  const [loadingTabSell, setLoadingTabSell] = useState(false);
  const [loadingUnSell, setLoadingUnSell] = useState(false);
  const [loadingChangPrice, setLoadingChangPrice] = useState(false);
  const [loadingBuy, setLoadingBuy] = useState(false);

  const [loadingShow, setLoadingShow] = useState(false);
  const [loadingShowRemove, setLoadingShowRemove] = useState(false);
  const [loadingShowUpdatePrice, setLoadingShowUpdatePrice] = useState(false);
  const [loadingShowBuy, setLoadingShowBuy] = useState(false);
  const [loadingShowUpdateName, setLoadingShowUpdateName] = useState(false);
  const [loadingShowTransfer, setLoadingShowTransfer] = useState(false);

  const { id } = useParams();
  //toggerState
  const [toggleState, setToggleState] = useState(1);
  const [sell, setSell] = useState('');
  const [transfer, setTransfer] = useState('');

  let history = useHistory();

  const confettiRef = useRef(null);

  //toggleTab
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const DadId = data.allJewells.filter(item => item.id === id).map(result => result.rawId)
  const MumId = data.allJewells.filter(item => item.id === id).map(result => result.gemId)
  const Children = data.allJewells.filter(item => item.rawId === id || item.gemId === id).map(result => result.id)
  console.log('data', data.allJewells)
  console.log('dadid', DadId)
  console.log('mum', MumId)
  console.log('chil', Children[0])


  //format Time
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
  };

  //sell
  const sellFee = (data.sellFee / 1000000000000000000).toString();
  const sellJewell = (_account, _tokenId, _price) => {
    setLoadingTabSell(true);
    setLoadingShow(false);
    blockchain.jewellFactory.methods
      .allowBuy(_tokenId, _price)
      .send({
        from: _account,
        value: blockchain.web3.utils.toWei(sellFee, "ether")
      })
      .once("error", (err) => {
        setLoadingTabSell(false);
        console.log(err);
      })
      .then((receipt) => {
        setLoadingTabSell(false);
        console.log(receipt);
        dispatch(fetchData(blockchain.account));
        setLoadingShow(true);
      });
  };

  //unsell
  const UnSellJewell = (_account, _tokenId) => {
    setLoadingUnSell(true);
    setLoadingShowRemove(false);
    blockchain.jewellFactory.methods
      .disallowBuy(_tokenId)
      .send({
        from: _account,
      })
      .once("error", (err) => {
        setLoadingUnSell(false);
        console.log(err);
      })
      .then((receipt) => {
        setLoadingUnSell(false);
        console.log(receipt);
        dispatch(fetchData(blockchain.account));
        setLoadingShowRemove(true);
      });
  };

  //ChangePrice
  const ChangePrice = (_account, _tokenId, _newPrice) => {
    setLoadingChangPrice(true);
    setLoadingShowUpdatePrice(false);
    blockchain.jewellFactory.methods
      .changePrice(_tokenId, _newPrice)
      .send({
        from: _account,
      })
      .once("error", (err) => {
        setLoadingChangPrice(false);
        console.log(err);
      })
      .then((receipt) => {
        setLoadingChangPrice(false);
        console.log(receipt);
        dispatch(fetchData(blockchain.account));
        setLoadingShowUpdatePrice(true);
      });
  };

  //transfer
  const transferToken = (_account, _from, _to, _tokenId) => {
    setLoadingTabTransfer(true);
    setLoadingShowTransfer(false);
    blockchain.jewellFactory.methods
      .GiftToken(_from, _to, _tokenId)
      .send({
        from: _account,
      })
      .once("error", (err) => {
        setLoadingTabTransfer(false);
        console.log(err);
      })
      .then((receipt) => {
        setLoadingTabTransfer(false);
        console.log(receipt);
        dispatch(fetchData(blockchain.account));
        setLoadingShowTransfer(true);
      });
  };

  //Buy
  const BuyJewell = (_account, _tokenId, _price) => {
    setLoadingBuy(true);
    setLoadingShowBuy(false);
    blockchain.jewellFactory.methods
      .buy(_tokenId)
      .send({
        from: _account,
        value: blockchain.web3.utils.toWei(_price, "ether"),
      })
      .once("error", (err) => {
        setLoadingBuy(false);
        console.log(err);
      })
      .then((receipt) => {
        setLoadingBuy(false);
        console.log(receipt);
        dispatch(fetchData(blockchain.account));
        setLoadingShowBuy(true);
      });
  };

  //update account
  useEffect(() => {
    if (id && id !== "")
      dispatch(fetchData(blockchain.account))
    return () => {
      dispatch(removeData())
    }
  }, [blockchain.account, dispatch, id])

  return (
    <>
      {/* handShow Transfer */}
      <s.Containertoggle
        ref={confettiRef}
        className={loadingShowTransfer === true ? "active-tab" : null}
      >
        <s.TextTitle>
          Successful transfer of jewell ID <span style={{ color: "#fe16e7", opacity: "0.6" }}>{id}</span>
        </s.TextTitle>
        <s.TextTitle>
          to <span style={{ color: "#fe16e7", opacity: "0.6" }} >{data.allJewells.filter(item => item.id === id).map(result => result.currentOwner)}</span>
        </s.TextTitle>
        <s.Container fd={"row"} jc={"center"} ai={"center"} style={{ marginTop: "50px" }}>
          <s.StyledButton
            style={{ marginRight: "15px" }}
            onClick={() => { history.push("/mynft") }}
          >
            Go home
          </s.StyledButton>
        </s.Container>
      </s.Containertoggle>
      {/* handShow sell */}
      <s.Containertoggle
        ref={confettiRef}
        className={loadingShow === true ? "active-tab" : null}
      >
        <s.TextTitle>
        </s.TextTitle>
        <s.TextTitle>
          Your item has been listed for sale on the market.
        </s.TextTitle>
        <s.Container fd={"row"} jc={"center"} ai={"center"} style={{ marginTop: "50px" }}>
          <s.StyledButton
            style={{ marginRight: "15px" }}
            onClick={() => { history.push("/marketplace") }}
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
      {/* handShow Remove item */}
      <s.Containertoggle
        ref={confettiRef}
        className={loadingShowRemove === true ? "active-tab" : null}
      >
        <s.TextTitle>
          Your item has been removed from the market. Click Close to return.
        </s.TextTitle>
        <s.Container fd={"row"} jc={"center"} ai={"center"} style={{ marginTop: "50px" }}>
          <s.StyledButtonBreedShow
            onClick={() => {
              setLoadingShowRemove(false);
            }}
          >
            Close
          </s.StyledButtonBreedShow>
        </s.Container>
      </s.Containertoggle>
      {/* handShow Update Price */}
      <s.Containertoggle
        ref={confettiRef}
        className={loadingShowUpdatePrice === true ? "active-tab" : null}
      >
        <s.TextTitle>
          Update Price successful. Click Close to return.
        </s.TextTitle>
        <s.Container fd={"row"} jc={"center"} ai={"center"} style={{ marginTop: "50px" }}>
          <s.StyledButtonBreedShow
            onClick={() => {
              setLoadingShowUpdatePrice(false);
            }}
          >
            Close
          </s.StyledButtonBreedShow>
        </s.Container>
      </s.Containertoggle>
      {/* handShow Update Name */}
      <s.Containertoggle
        ref={confettiRef}
        className={loadingShowUpdateName === true ? "active-tab" : null}
      >
        <s.TextTitle>
          Update successful. Click Close to return.
        </s.TextTitle>
        <s.Container fd={"row"} jc={"center"} ai={"center"} style={{ marginTop: "50px" }}>
          <s.StyledButtonBreedShow
            onClick={() => {
              setLoadingShowUpdateName(false);
            }}
          >
            Close
          </s.StyledButtonBreedShow>
        </s.Container>
      </s.Containertoggle>
      {/* handShow Buy */}
      <s.Containertoggle
        ref={confettiRef}
        className={loadingShowBuy === true ? "active-tab" : null}
      >
        <s.TextTitle>
          Successfully purchase. click Go to view or Click Close to return.
        </s.TextTitle>
        <s.Container fd={"row"} jc={"center"} ai={"center"} style={{ marginTop: "50px" }}>
          <s.StyledButton
            style={{ marginRight: "15px" }}
            onClick={() => { history.push("/mynft") }}
          >
            Go to
          </s.StyledButton>
          <s.StyledButtonBreedShow
            onClick={() => {
              setLoadingShowBuy(false);
            }}
          >
            Close
          </s.StyledButtonBreedShow>
        </s.Container>
      </s.Containertoggle>
      <s.Screen
        image={_color}
        className={loadingShow === true || loadingShowRemove === true || loadingShowBuy === true || loadingShowTransfer || loadingShowUpdateName || loadingShowUpdatePrice ? "blur" : null}
      >
        {data.allJewells.filter(item => item.id === id).map((item) => (
          <s.Container
            key={item.id}
            ai={"center"}
            style={{ margin: "6.5rem 0px 50px 0px" }}
          >
            <s.ContainerDetails>
              <s.StyledTextBoxNameDetails>
                <s.TextDescriptionDetail>
                  {item.name}
                </s.TextDescriptionDetail>
                <s.StyledButtonBack
                  onClick={() => history.push("/mynft")}
                >
                  <BiArrowBack style={{ marginRight: "10px" }} />
                  Back
                </s.StyledButtonBack>
              </s.StyledTextBoxNameDetails>
              <s.Container>
                <s.Container ai={"center"} jc={"space-between"} fd={"row"}>
                  <s.StyledImgDetails>
                    <JewellRenderer jewell={item} style={{ height: "400px", with: "400px" }} />
                  </s.StyledImgDetails>
                  {/* check address owner */}
                  {blockchain.account === item.currentOwner.toLowerCase() ? (
                    <s.BoxDetails>
                      <s.TextName>ID: {item.id}</s.TextName>
                      <s.TextName>Place Name: {item.location}</s.TextName>
                      <s.TextDescription style={{ color: "#000" }}>First Owner: {item.firstOwner} </s.TextDescription>
                      {/* check view */}
                      {item.sell <= 0 ? (
                        <>
                          <s.TextDescription style={{ color: "#000" }}>Metal ID: {item.rawId}</s.TextDescription>
                          <s.TextDescription style={{ color: "#000" }}>Gems ID: {item.gemId}</s.TextDescription>
                          {(parseInt(item.rarity) >= parseInt(item.gemslv)) ? (
                            <s.TextName >Rarity: {item.rarity}</s.TextName>)
                            : (
                              <s.TextName >Rarity: {item.gemslv}</s.TextName>)
                          }
                          <s.TextName >Create Day: {fromNow(item.sellTime * 1000)} </s.TextName>
                          <s.Container ai={"center"} jc={"space-around"} fd={"row"}>
                            <s.StyledButtonAction
                              style={item.gen0 <= 1 && item.sell <= 0 ? { marginRight: "15px" } : { marginRight: "15px", pointerEvents: "none", opacity: "0.5", background: "#f80017" }}
                              onClick={() => history.push("/forge")}
                            >
                              Create Ring
                            </s.StyledButtonAction>
                          </s.Container>
                        </>
                      ) : (
                        <>
                          {(parseInt(item.rarity) >= parseInt(item.gemslv)) ? (
                            <s.TextName >Rarity: {item.rarity}</s.TextName>)
                            : (
                              <s.TextName >Rarity: {item.gemslv}</s.TextName>)
                          }
                          <s.TextName >Create Day: {fromNow(item.sellTime * 1000)} </s.TextName>
                          <s.TextName>Price: {blockchain.web3.utils.fromWei(item.sell, "ether")} BNB
                          </s.TextName>
                          {/* button Action */}
                          <s.Container>
                            {!loadingUnSell &&
                              <s.StyledButtonActionDetails
                                disabled={loadingUnSell ? 1 : 0}
                                onClick={() => {
                                  UnSellJewell(blockchain.account, item.id);
                                }}
                              >
                                <MdOutlineRemoveShoppingCart style={{ paddingRight: "10px", fontSize: "30px" }} />
                                Remove
                              </s.StyledButtonActionDetails>
                            }
                            {loadingUnSell &&
                              <s.StyledButtonActionDetails
                                style={{ pointerEvents: "none" }}
                                disabled={loadingUnSell ? 1 : 0}
                              >
                                <s.StyledButtonLoading />
                              </s.StyledButtonActionDetails>
                            }
                          </s.Container>
                        </>
                      )}
                    </s.BoxDetails>
                  ) : (
                    <s.BoxDetails>
                      <s.TextName>Id: {item.id}</s.TextName>
                      <s.TextName>Place Name: {item.location} </s.TextName>
                      <s.TextDescription style={{ color: "#000" }}>First Owner: {item.firstOwner} </s.TextDescription>
                      {(parseInt(item.rarity) >= parseInt(item.gemslv)) ? (
                        <s.TextName >Rarity: {item.rarity}</s.TextName>)
                        : (
                          <s.TextName >Rarity: {item.gemslv}</s.TextName>)
                      }
                      <s.TextName >Create Day: {fromNow(item.sellTime * 1000)} </s.TextName>
                      {(item.currentOwner === "0x000000000000000000000000000000000000dEaD") ? (
                        <s.TextName style={{color:"red"}}>Was used to create the ring</s.TextName>
                      ):(<s.TextName>Price: {blockchain.web3.utils.fromWei(item.sell, "ether")} BNB
                      </s.TextName>)}
                      {/* button Action */}
                      {console.log(item.sellTime)}
                      <s.Container>
                        {!loadingBuy &&
                          <s.StyledButtonActionDetails
                            style={(item.currentOwner === "0x000000000000000000000000000000000000dEaD") ? { display: "none" } : {}}
                            disabled={loadingBuy ? 1 : 0}
                            onClick={() => {
                              BuyJewell(blockchain.account, item.id, blockchain.web3.utils.fromWei(item.sell, "ether"));
                            }}
                          >
                            <RiWallet3Line style={{ paddingRight: "10px", fontSize: "30px" }} /> Buy Now
                          </s.StyledButtonActionDetails>
                        }
                        {loadingBuy &&
                          <s.StyledButtonActionDetails
                            style={{ pointerEvents: "none" }}
                            disabled={loadingBuy ? 1 : 0}
                          >
                            <s.StyledButtonLoading />
                          </s.StyledButtonActionDetails>
                        }
                      </s.Container>
                    </s.BoxDetails>
                  )}
                </s.Container>
                {blockchain.account === item.currentOwner.toLowerCase() ? (
                  <>
                    <s.Container jc={"center"} ai={"center"} style={{ paddingTop: "6rem" }}>
                      {/* parents */}
                      <s.Container>
                        <s.TextName>Source</s.TextName>
                        {DadId[0] === "0" && MumId[0] === "0" ? (
                          <s.TextDescription style={{ color: "#000" }}>{item.gen0 === "0" ? "First generation" : "Un mated"}</s.TextDescription>
                        ) : (
                          <s.Container fd={"row"}>
                            {data.allJewells.filter(item => item.id === DadId[0]).map((item) => (
                              <s.Container style={{ marginRight: "20px" }}>
                                <s.TextDescription style={{ color: "#000" }}>Metal</s.TextDescription>
                                <s.Box key={item.id}>
                                  <s.StyledImg>
                                    <Link to={`/details/${item.id}`} >
                                      <JewellRenderer jewell={item} />
                                    </Link>
                                  </s.StyledImg>
                                </s.Box>
                              </s.Container>
                            ))}
                            {/* mother */}
                            {data.allJewells.filter(item => item.id === MumId[0]).map((item) => (
                              <s.Container>
                                <s.TextDescription style={{ color: "#000" }}>Gem</s.TextDescription>
                                <s.Box key={item.id} >
                                  <s.StyledImg>
                                    <Link to={`/details/${item.id}`} >
                                      <JewellRenderer jewell={item} />
                                    </Link>
                                  </s.StyledImg>
                                </s.Box>
                              </s.Container>
                            ))}
                          </s.Container>
                        )}
                      </s.Container>
                      {/* Chidren */}
                      <s.Container style={{ marginTop: "40px" }}>
                        <s.TextName>Create Ring</s.TextName>
                        {Children.length !== 0 && Children[0] !== "0" ? (
                          <s.Container fd={"row"} style={{ flexWrap: "wrap" }}>
                            {data.allJewells.filter(item => (item.id === id)).map((item) => (
                              <s.Box key={item.id} style={{ margin: "20px 20px 0 0" }}>
                                <s.StyledImg>
                                  <Link to={`/details/${item.id}`}>
                                    <JewellRenderer jewell={item} />
                                  </Link>
                                </s.StyledImg>
                              </s.Box>
                            ))}
                          </s.Container>
                        ) : (
                          <s.TextDescription style={{ color: "#000" }}>Not made yet</s.TextDescription>
                        )}
                        {console.log("day", DadId, MumId, Children[0])}
                        {console.log(DadId !== 0 && MumId !== 0)}

                      </s.Container>
                    </s.Container>

                    <s.Container ai={"center"} style={{ paddingTop: "7rem" }}>
                      <s.MenuTabs >
                        <s.Tabs
                          className={toggleState === 1 ? "active-tab" : null}
                          onClick={() => toggleTab(1)}
                        >
                          Sell
                        </s.Tabs>
                        <s.Tabs
                          className={toggleState === 2 ? "active-tab" : null}
                          onClick={() => toggleTab(2)}
                        >
                          Gift
                        </s.Tabs>
                      </s.MenuTabs>
                    </s.Container>
                    {toggleState === 1 ? (
                      <s.Container ai={"center"} style={{ margin: "6rem 0 3rem 0" }}>
                        <s.BoxTab>
                          {data.allOwnerJewells.filter(item => item.id === id).map(result => result.sell) <= 0 ? (
                            <form>
                              {data.allOwnerJewells.filter(item => item.id === id).map(result => result.rarity) ? (
                                <>
                                  <s.TextSubTitleDetail>Enter the amount you want to sell (BNB)</s.TextSubTitleDetail>
                                  <s.Container fd={"row"} ai={"center"} jc={"center"}>
                                    <s.InputTransferNumber
                                      required
                                      placeholder={"Price must be at least 1 wei"}
                                      style={{ marginRight: "10px" }}
                                      onChange={e => setSell(e.target.value)}
                                      value={sell}
                                    />
                                    <s.Container>
                                      {!loadingTabSell &&
                                        <s.StyledButtonTransfer
                                          disabled={loadingTabSell ? 1 : 0}
                                          style={sell > 0 && sell <= 99 ? {} : { pointerEvents: "none", opacity: "0.2" }}
                                          onClick={() => {
                                            sellJewell(blockchain.account, item.id, blockchain.web3.utils.toWei(sell, "ether"));
                                            setSell('');
                                          }}
                                        >
                                          Sell
                                        </s.StyledButtonTransfer>
                                      }
                                      {loadingTabSell &&
                                        <s.StyledButtonTransfer
                                          disabled={loadingTabSell ? 1 : 0}
                                          style={{ pointerEvents: "none" }}
                                        >
                                          <s.StyledButtonLoading />
                                        </s.StyledButtonTransfer>
                                      }
                                    </s.Container>
                                  </s.Container>
                                  {sell > 99 ? (<s.TextDescription>Value exceeds the allowable limit !</s.TextDescription>) : (null)}
                                </>
                              ) : (
                                <s.Container ai={"center"}>
                                  <s.TextTitle>
                                    {"Require rarity < 5"}
                                  </s.TextTitle>
                                </s.Container>
                              )}
                            </form>
                          ) : (
                            <form>
                              <s.TextSubTitleDetail>Enter the amount you want to Change (BNB)</s.TextSubTitleDetail>
                              <s.Container fd={"row"} ai={"center"} jc={"center"}>
                                <s.InputTransferNumber
                                  required
                                  placeholder={"Price must be at least 1 wei"}
                                  style={{ marginRight: "10px" }}
                                  onChange={e => setSell(e.target.value)}
                                  value={sell}
                                />
                                <s.Container>
                                  {!loadingChangPrice &&
                                    <s.StyledButtonTransfer
                                      disabled={loadingChangPrice ? 1 : 0}
                                      style={sell > 0 && sell <= 99 ? {} : { pointerEvents: "none", opacity: "0.2" }}
                                      onClick={() => {
                                        ChangePrice(blockchain.account, item.id, blockchain.web3.utils.toWei(sell, "ether"));
                                        setSell('');
                                      }}
                                    >
                                      Change
                                    </s.StyledButtonTransfer>
                                  }
                                  {loadingChangPrice &&
                                    <s.StyledButtonTransfer
                                      disabled={loadingChangPrice ? 1 : 0}
                                      style={{ pointerEvents: "none" }}
                                    >
                                      <s.StyledButtonLoading />
                                    </s.StyledButtonTransfer>
                                  }
                                </s.Container>
                              </s.Container>
                              {blockchain.web3.utils.fromWei(item.sell, "ether") === sell ? (<s.TextDescription>Rrice must be different !</s.TextDescription>) : (null)}
                            </form>
                          )}
                        </s.BoxTab>
                      </s.Container>
                    ) : (null)}
                    {toggleState === 2 ? (
                      <s.Container ai={"center"} style={{ margin: "6rem 0 3rem 0" }}>
                        <s.BoxTab>
                          <form>
                            {data.allOwnerJewells.filter(item => item.id === id).map(result => result.rarity) > 5 ? (
                              <>
                                <s.TextSubTitleDetail>Transfer this NFT to someone</s.TextSubTitleDetail>
                                <s.Container fd={"row"} ai={"center"} jc={"center"}>
                                  <s.InputTransfer
                                    required
                                    placeholder={"0x92Da0E5C9D58AcCDCA6E280a2F632B23D9aA0705"}
                                    style={{ marginRight: "10px" }}
                                    value={transfer}
                                    onChange={(e) =>
                                      setTransfer(e.target.value)}
                                  />
                                  {!loadingTabTransfer &&
                                    <s.StyledButtonTransfer
                                      disabled={loadingTabTransfer ? 1 : 0}
                                      style={item.sell <= 0 && transfer.length > 0 && transfer.length <= 42 ? { marginRight: "5px" } : { marginRight: "5px", pointerEvents: "none", opacity: "0.2" }}
                                      onClick={() => {
                                        transferToken(blockchain.account, blockchain.account, transfer, item.id);
                                        setTransfer('');
                                      }}
                                    >
                                      Transfer
                                    </s.StyledButtonTransfer>
                                  }
                                  {loadingTabTransfer &&
                                    <s.StyledButtonTransfer
                                      disabled={loadingTabTransfer ? 1 : 0}
                                      style={{ pointerEvents: "none" }}
                                    >
                                      <s.StyledButtonLoading />
                                    </s.StyledButtonTransfer>
                                  }
                                </s.Container>
                                {transfer.length > 42 ? (<s.TextDescription>wallet address does not exist !</s.TextDescription>) : (null)}
                              </>
                            ) : (
                              <s.Container ai={"center"}>
                                <s.TextTitle>{"Require rarity < 5 "}</s.TextTitle>
                              </s.Container>
                            )}
                          </form>
                        </s.BoxTab>
                      </s.Container>
                    ) : (null)}
                  </>
                ) : (
                  <s.Container jc={"center"} ai={"center"} style={{ paddingTop: "6rem" }}>
                    {/* parents */}
                    <s.Container>
                      <s.TextName>Source</s.TextName>
                      {DadId[0] === "0" && MumId[0] === "0" ? (
                        <s.TextDescription style={{ color: "#000" }}> First generation</s.TextDescription>
                      ) : (
                        <s.Container fd={"row"}>
                          {data.allJewells.filter(item => item.id === DadId[0]).map((item) => (
                            <s.Container style={{ marginRight: "20px" }}>
                              <s.TextDescription style={{ color: "#000" }}>Gem</s.TextDescription>
                              <s.Box key={item.id}>
                                <s.StyledImg>
                                  <Link to={`/details/${item.id}`} >
                                    <JewellRenderer jewell={item} />
                                  </Link>
                                </s.StyledImg>
                              </s.Box>
                            </s.Container>
                          ))}

                          {data.allJewells.filter(item => item.id === MumId[0]).map((item) => (
                            <s.Container>
                              <s.TextDescription style={{ color: "#000" }}>Metal</s.TextDescription>
                              <s.Box key={item.id} >
                                <s.StyledImg>
                                  <Link to={`/details/${item.id}`} >
                                    <JewellRenderer jewell={item} />
                                  </Link>
                                </s.StyledImg>
                              </s.Box>
                            </s.Container>
                          ))}
                        </s.Container>
                      )}
                    </s.Container>
                    {/* Chidren */}
                    <s.Container style={{ marginTop: "40px" }}>
                      <s.TextName>Create Ring</s.TextName>
                      {Children.length !== 0 && Children[0] !== "0" ? (
                        <s.Container fd={"row"}>
                          {data.allJewells.filter(item => item.id === Children[0]).map((item) => (
                            <s.Box key={item.id} style={{ margin: "20px 20px 0 0" }}>
                              <s.StyledImg>
                                <Link to={`/details/${item.id}`}>
                                  <JewellRenderer jewell={item} />
                                </Link>
                              </s.StyledImg>
                            </s.Box>
                          ))}
                        </s.Container>
                      ) : (
                        <s.TextDescription style={{ color: "#000" }} >Not made yet</s.TextDescription>
                      )}
                      {console.log("duoi", DadId, MumId, Children[0])}
                      {console.log(Children.length !== 0 && Children[0] !== "0")}
                    </s.Container>
                  </s.Container>
                )}
              </s.Container>
              {/* Tabbar    */}
              <s.SpacerSuperLarge />
            </s.ContainerDetails>
          </s.Container>
        ))}
      </s.Screen>
    </>
  );
};

export default Details;