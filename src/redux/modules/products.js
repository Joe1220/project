// imports

import data from "MOCK_DATA.json";

// actions

const SET_PRODUCTS = "SET_PRODUCTS";


// action creators

function setProducts(items) {
  return {
    type: SET_PRODUCTS,
    items
  };
}


// API Actions

function getProducts() {
  return (dispatch, getState) => {
    fetch("MOCK_DATA.json", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
   })
    .then(response => data)
    .then(json => dispatch(setProducts(json)))
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
  const { items } = action;
  return {
    ...state,
    items
  };
}

// Exports

const actionCreators = {
  getProducts
};

export { actionCreators };

// Export reducer by default

export default reducer;
