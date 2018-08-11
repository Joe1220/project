import { connect } from "react-redux";
import { actionCreators as procutsActions } from "redux/modules/products";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { products: { items } } = state;
  const { routing: { location } } = state;
  return {
    location: location.pathname,
    items
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProducts: () => {
      dispatch(procutsActions.getProducts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
