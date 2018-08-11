import { connect } from "react-redux";
import { actionCreators as procutsActions } from "redux/modules/products";
import Container from "./container";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProducts: () => {
      dispatch(procutsActions.getProducts());
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
