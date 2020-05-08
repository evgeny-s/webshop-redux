import {connect} from 'react-redux';
import Products from "./../components/Products";

const mapStateToProps = state => {
  return {
    products: state.shop.products,
  }
};
const mapDispatchToProps = dispatch => {
  return {

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
