import {connect} from 'react-redux';
import App from "./../App";

const mapStateToProps = state => {
  return {
    products: state.shop.products,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    loadProducts: (data) => dispatch({
      type: 'SHOP/SAVE_DATA',
      payload: {
        data,
      }
    }),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
