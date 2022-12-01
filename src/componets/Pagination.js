import React from 'react'
import * as s from "../styles/globalStyles";

const Pagination = ({pageNumberLimit, totalItems, paginate, handleNextbtn, handlePrevbtn, currentPage, maxPageNumberLimit, minPageNumberLimit}) => {
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(totalItems / pageNumberLimit); i ++) {
        pageNumber.push(i);
    }

    return (
        <s.Container jc={"space-between"} ai={"center"} fd={"row"} style={{padding: "17px 17px 0 17px"}}>
            <s.Container fd={"row"}>
            {pageNumber.map(number => (
                number < maxPageNumberLimit + 1 && number > minPageNumberLimit ? (
                <s.StyledNumber key={number} >
                    <s.StyledNumberPage 
                        className={currentPage === number ? "active-tab" : null}
                        onClick={() => paginate(number)}
                        disabled={currentPage === pageNumber[pageNumber.length - 1] ? true : false}
                    >
                        {number}
                    </s.StyledNumberPage>
                </s.StyledNumber> 
                ): (null)  
            ))}
            </s.Container>
            <s.Container fd={"row"}>
                <s.TextDescriptionPage
                    style={{marginRight: "15px", cursor: "pointer"}}
                    className={currentPage <= 1 ? "disable" : ""}
                    onClick={handlePrevbtn}
                    disabled={currentPage === pageNumber[0] ? true : false}
                >
                    Next
                </s.TextDescriptionPage>
                <s.TextDescriptionPage
                    className={currentPage >= pageNumber.length ? "disable" : ""}
                    onClick={handleNextbtn}
                    disabled={currentPage === pageNumber[pageNumber.length - 1] ? true : false}
                >
                    Prev
                </s.TextDescriptionPage>
            </s.Container>
        </s.Container>
    )
}

export default Pagination
