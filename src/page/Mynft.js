import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/data/dataActions";
import * as s from "../styles/globalStyles";
import _bg from "../assets/images/bg/_bg.png"
import _reveal from "../assets/images/bg/reveal.png";
import RenderSell from "../componets/RenderSell";
import RenderAll from "../componets/RenderAll";
import RenderStatus from "../componets/RenderStatus";
import Pagination from "../componets/Pagination";
import { useHistory } from "react-router-dom";


const Mynft = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [loading, setLoading] = useState(false);
  const [loadingShow, setLoadingShow] = useState(false);
  const [toggleState, setToggleState] = useState(1);



  // console.log(data.admin.toLowerCase() === blockchain.account)

  const confettiRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit] = useState(10);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  //GetCurrentItems
  const indexOfLastItem = currentPage * pageNumberLimit;
  const indexOfFirstItem = indexOfLastItem - pageNumberLimit;
  const currentItems = data.allOwnerJewells.slice(indexOfFirstItem, indexOfLastItem);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //NextPage
  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  //PrevPage
  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }
  //{state sell my jewell}
  const [currentPage1, setCurrentPage1] = useState(1);
  const [pageNumberLimit1] = useState(10);
  const [maxPageNumberLimit1, setmaxPageNumberLimit1] = useState(10);
  const [minPageNumberLimit1, setminPageNumberLimit1] = useState(0);
  let history = useHistory();


  //GetCurrentItems
  const indexOfLastItem1 = currentPage1 * pageNumberLimit1;
  const indexOfFirstItem1 = indexOfLastItem1 - pageNumberLimit1;
  const currentItemsSell = data.allOwnerJewells.filter(item => item.sell > 0).slice(indexOfFirstItem1, indexOfLastItem1);
  //change page
  const paginate1 = (pageNumber) => setCurrentPage1(pageNumber);

  //NextPage
  const handleNextbtn1 = () => {
    setCurrentPage1(currentPage1 + 1);
    if (currentPage1 + 1 > maxPageNumberLimit1) {
      setmaxPageNumberLimit1(maxPageNumberLimit1 + pageNumberLimit1);
      setminPageNumberLimit1(minPageNumberLimit1 + pageNumberLimit1);
    }
  }

  //PrevPage
  const handlePrevbtn1 = () => {
    setCurrentPage1(currentPage1 - 1);
    if ((currentPage1 - 1) % pageNumberLimit1 === 0) {
      setmaxPageNumberLimit1(maxPageNumberLimit1 - pageNumberLimit1);
      setminPageNumberLimit1(minPageNumberLimit1 - pageNumberLimit1);
    }
  }
  // {state price}
  const [currentPage2, setCurrentPage2] = useState(1);
  const [pageNumberLimit2] = useState(10);
  const [maxPageNumberLimit2, setmaxPageNumberLimit2] = useState(10);
  const [minPageNumberLimit2, setminPageNumberLimit2] = useState(0);

  //GetCurrentItems
  const indexOfLastItem2 = currentPage2 * pageNumberLimit2;
  const indexOfFirstItem2 = indexOfLastItem2 - pageNumberLimit2;
  const currentItemsStatus = data.allOwnerJewells.filter(item => item.gen0 <= 0).slice(indexOfFirstItem2, indexOfLastItem2);
  //change page
  const paginate2 = (pageNumber) => setCurrentPage2(pageNumber);

  //NextPage
  const handleNextbtn2 = () => {
    setCurrentPage2(currentPage2 + 1);
    if (currentPage2 + 1 > maxPageNumberLimit2) {
      setmaxPageNumberLimit2(maxPageNumberLimit2 + pageNumberLimit2);
      setminPageNumberLimit2(minPageNumberLimit2 + pageNumberLimit2);
    }
  }

  //PrevPage
  const handlePrevbtn2 = () => {
    setCurrentPage2(currentPage2 - 1);
    if ((currentPage2 - 1) % pageNumberLimit2 === 0) {
      setmaxPageNumberLimit1(maxPageNumberLimit2 - pageNumberLimit2);
      setminPageNumberLimit1(minPageNumberLimit2 - pageNumberLimit2);
    }
  }


  //Fee = 0.025

 
  //toggleTab
  const toggleTab = (index) => {
    setToggleState(index);
  }

  // update 
  useEffect(() => {
    if (blockchain.account !== "" && blockchain.jewellFactory !== null) {
      dispatch(fetchData(blockchain.account));
    }
  }, [blockchain.account, blockchain.jewellFactory, dispatch]);

  return (
    <>
      <s.Screen image={_bg} className={loadingShow === true ? "blur" : null} >
        <s.Container jc={"center"} ai={"center"} style={{ paddingTop: "3rem", marginTop: "4.5rem" }}>
          <s.ContainerTabBar>
            <s.MenuTabsHome>
              <s.TabHome
                className={toggleState === 1 ? "active-tab" : null}
                onClick={() => toggleTab(1)}
              >
                All {toggleState === 1 ? '(' + data.allOwnerJewells.length + ')' : null}
              </s.TabHome>
              <s.TabHome
                className={toggleState === 2 ? "active-tab" : null}
                onClick={() => toggleTab(2)}
              >
                On Sell {toggleState === 2 ? '(' + data.allOwnerJewells.filter(item => item.sell > 0).length + ')' : null}
              </s.TabHome>
              <s.TabHome
                className={toggleState === 3 ? "active-tab" : null}
                onClick={() => toggleTab(3)}
              >
                Raw Item {toggleState === 3 ? '(' + data.allOwnerJewells.filter(item => item.gen0 <= 0).length + ')' : null}
              </s.TabHome>
            </s.MenuTabsHome>
          </s.ContainerTabBar>
          {toggleState === 1 ? (
            <s.ContainerHome jc={"center"} ai={"center"} style={{ flexWrap: "wrap", margin: "27px " }}>
              {data.allOwnerJewells.length === 0 ? (
                <s.Container flex={1} ai={"center"} jc={"center"}>
                  {/* Kiểm tra xem owner có sở hữu nấm hay không ? nếu có thì getAllJewell */}
                  <s.TextTitle>
                    Welcome to Jewell Market
                  </s.TextTitle>
                  <s.TextSubTitleHome>
                    We see you don't have any NFTs to start with.
                  </s.TextSubTitleHome>
                  <s.TextSubTitleHome>
                    Start by creating the first NFT.
                  </s.TextSubTitleHome>
                  <s.TextSubTitleHome>
                    Click the Get button below to get the NFT.
                  </s.TextSubTitleHome>
                  <s.TextSubTitleHome>
                    (You get the first 2 NFT free domain)
                  </s.TextSubTitleHome>
                  <s.SpacerSmall />
                  {!loading &&
                    <s.StyledButtonget
                      onClick={() => history.push("/forge")}
                    >
                      Get Now
                    </s.StyledButtonget>
                  }
                  {loading &&
                    <s.StyledButton
                      style={{ pointerEvents: "none" }}
                      onClick={() => history.push("/forge")}
                    >
                      <s.StyledButtonLoading />
                    </s.StyledButton>
                  }
                  <s.SpacerMedium />
                </s.Container>
              ) : (
                <>
                  <Pagination
                    pageNumberLimit={pageNumberLimit}
                    totalItems={data.allOwnerJewells.length}
                    paginate={paginate} currentPage={currentPage}
                    handleNextbtn={handleNextbtn}
                    handlePrevbtn={handlePrevbtn}
                    maxPageNumberLimit={maxPageNumberLimit}
                    minPageNumberLimit={minPageNumberLimit}
                  />
                  <RenderAll data={currentItems} loading={loading} />
                </>
              )}
            </s.ContainerHome>
          ) : (null)}
          {/* toggle 2 */}
          {toggleState === 2 ? (
            <s.ContainerHome jc={"center"} ai={"center"} style={{ flexWrap: "wrap", margin: "27px " }}>
              {data.allOwnerJewells.length === 0 ? (
                <s.Container flex={1} ai={"center"} jc={"center"}>
                  {/* Kiểm tra xem owner có sở hữu nấm hay không ? nếu có thì getAllJewell */}
                  <s.TextTitle>
                    Welcome to Jewell Market
                  </s.TextTitle>
                  <s.TextSubTitleHome>
                    We see you don't have any NFTs to start with.
                  </s.TextSubTitleHome>
                  <s.TextSubTitleHome>
                    Start by creating the first NFT.
                  </s.TextSubTitleHome>
                  <s.TextSubTitleHome>
                    Click the Get button below to get the NFT.
                  </s.TextSubTitleHome>
                  <s.SpacerSmall />
                  {!loading &&
                    <s.StyledButtonget
                      onClick={() => history.push("/forge")}
                    >
                      Get Now
                    </s.StyledButtonget>
                  }
                  {loading &&
                    <s.StyledButton
                      style={{ pointerEvents: "none" }}
                      onClick={() => history.push("/forge")}
                    >
                      <s.StyledButtonLoading />
                    </s.StyledButton>
                  }
                  <s.SpacerMedium />
                </s.Container>
              ) : (
                <>
                  <Pagination
                    pageNumberLimit={pageNumberLimit1}
                    totalItems={data.allOwnerJewells.filter(item => item.sell > 0).length}
                    paginate={paginate1}
                    currentPage={currentPage1}
                    handleNextbtn={handleNextbtn1}
                    handlePrevbtn={handlePrevbtn1}
                    maxPageNumberLimit={maxPageNumberLimit1}
                    minPageNumberLimit={minPageNumberLimit1}
                  />
                  {data.allOwnerJewells.filter(item => item.sell > 0).length ? (
                    <RenderSell data={currentItemsSell} blockchain={blockchain} loading={loading} />
                  ) : (
                    <s.Container ai={"center"}>
                      <div style={{ height: "426px", marginTop: "50px" }}>
                        <s.TextTitle>
                          No NFTs for sale
                        </s.TextTitle>
                      </div>
                    </s.Container>
                  )}
                </>
              )}
            </s.ContainerHome>
          ) : (null)}
          {/* toggle 3 */}
          {toggleState === 3 ? (
            <s.ContainerHome jc={"center"} ai={"center"} style={{ flexWrap: "wrap", margin: "27px " }}>
              {data.allOwnerJewells.length === 0 ? (
                <s.Container flex={1} ai={"center"} jc={"center"}>
                  {/* Kiểm tra xem owner có sở hữu nấm hay không ? nếu có thì getAllJewell */}
                  <s.TextTitle>
                    Welcome to Jewells market
                  </s.TextTitle>
                  <s.TextSubTitleHome>
                    We see you don't have any NFTs to start with.
                  </s.TextSubTitleHome>
                  <s.TextSubTitleHome>
                    Start by creating the first NFT.
                  </s.TextSubTitleHome>
                  <s.TextSubTitleHome>
                    Click the Get button below to get the NFT.
                  </s.TextSubTitleHome>
                  <s.SpacerSmall />
                  {!loading &&
                    <s.StyledButtonget
                      onClick={() => history.push("/forge")}
                    >
                      Get Now
                    </s.StyledButtonget>
                  }
                  {loading &&
                    <s.StyledButton
                      style={{ pointerEvents: "none" }}
                      onClick={() => history.push("/forge")}
                    >
                      <s.StyledButtonLoading />
                    </s.StyledButton>
                  }
                  <s.SpacerMedium />
                </s.Container>
              ) : (
                <>
                  <Pagination
                    pageNumberLimit={pageNumberLimit2}
                    totalItems={data.allOwnerJewells.filter(item => item.gen0 <= 0).length}
                    paginate={paginate2}
                    currentPage={currentPage2}
                    handleNextbtn={handleNextbtn2}
                    handlePrevbtn={handlePrevbtn2}
                    maxPageNumberLimit={maxPageNumberLimit2}
                    minPageNumberLimit={minPageNumberLimit2}
                  />
                  {data.allOwnerJewells.filter(item => item.gen0 <= 0).length > 0 ? (
                    <RenderStatus data={currentItemsStatus} blockchain={blockchain} loading={loading} />
                  ) : (
                    <s.Container ai={"center"}>
                      <div style={{ height: "426px", marginTop: "50px" }}>
                        <s.TextTitle>
                          No NFTs ready!
                        </s.TextTitle>
                      </div>
                    </s.Container>
                  )}
                </>
              )}
            </s.ContainerHome>
          ) : (null)}
        </s.Container>
      </s.Screen>
    </>
  );
}

export default Mynft
