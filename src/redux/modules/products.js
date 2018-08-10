// imports

// actions

const SET_PRODUCTS = "SET_PRODUCTS";


// action creators

function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    products
  };
}


// API Actions

function getProducts() {
    return function(dispatch) {
        fetch("MOCK_DATA.json", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(json => {
            if (json.token) {
              dispatch(setProducts(json));
            }
          })
          .catch(err => console.log(err));
      };
}


// Initial State

const initialState = {};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return applySetProducts(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applySetProducts(state, action) {
  const { products } = action;
  return {
    ...state,
    products
  };
}

// Exports

const actionCreators = {
  getProducts
};

export { actionCreators };

// Export reducer by default

export default reducer;
