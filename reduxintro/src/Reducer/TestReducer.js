const initialState = {
  price: 110,
  ShopName: "Rozetka",
  Country: "UA"
};

const BuyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY":
      return state.price + 100;
    case "SELL":
      return state.price - 100;
    default:
      return state;
  }
};
export default BuyReducer;
