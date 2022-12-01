const initialState = {
  loading: false,
  allJewells: [],
  allOwnerJewells: [],
  getAllIitemSell: [],
  admin: "",
  mintFee: 0,
  sellFee: 0,
  forgeFee: 0,
  error: false,
  errorMsg: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return {
        ...initialState,
        loading: true,
      };
    case "CHECK_DATA_SUCCESS":
      return {
        ...initialState,
        loading: false,
        allJewells: action.payload.allJewells,
        allOwnerJewells: action.payload.allOwnerJewells,
        getAllIitemSell: action.payload.getAllIitemSell,
        admin: action.payload.admin,
        mintFee: action.payload.mintFee,
        sellFee: action.payload.sellFee,
        forgeFee: action.payload.forgeFee,
      };
    case "CHECK_DATA_FAILED":
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    case "REMOVE_SELECTED_PRODUCT":
      return {}
    default:
      return state;
  }
};

export default dataReducer;