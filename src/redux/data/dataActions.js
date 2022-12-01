// log
import store from "../store";

const fetchDataRequest = () => {
    return {
        type: "CHECK_DATA_REQUEST",
    };
};

const fetchDataSuccess = (payload) => {
    return {
        type: "CHECK_DATA_SUCCESS",
        payload: payload,
    };
};

const fetchDataFailed = (payload) => {
    return {
        type: "CHECK_DATA_FAILED",
        payload: payload,
    };
};

const removeSelectedProduct = () => {
    return {
        type: "REMOVE_SELECTED_PRODUCT",
    };
};

export const fetchData = (account) => {
    return async(dispatch) => {
        dispatch(fetchDataRequest());
        try {
            let allJewells = await store
                .getState()
                .blockchain.jewellFactory.methods.getJewell()
                .call();
            let allOwnerJewells = await store
                .getState()
                .blockchain.jewellFactory.methods.getOwnerJewells(account)
                .call();
            console.log('----------------------', allOwnerJewells)
            let getAllIitemSell = await store
                .getState()
                .blockchain.jewellFactory.methods.getAllJewellSell()
                .call();

            let admin = await store
                .getState()
                .blockchain.jewellFactory.methods.admin()
                .call();

            let mintFee = await store
                .getState()
                .blockchain.jewellFactory.methods.getFee()
                .call();

            let sellFee = await store
                .getState()
                .blockchain.jewellFactory.methods.getFeeSell()
                .call();

            let forgeFee = await store
                .getState()
                .blockchain.jewellFactory.methods.getFeeForge()
                .call();

            dispatch(
                fetchDataSuccess({
                    allJewells,
                    allOwnerJewells,
                    getAllIitemSell,
                    admin,
                    mintFee,
                    sellFee,
                    forgeFee
                })
            );
        } catch (err) {
            console.log(err);
            dispatch(fetchDataFailed("Could not load data from contract."));
        }
    };
};

export const removeData = () => {
    return async(dispatch) => {
        dispatch(removeSelectedProduct());
    };
};