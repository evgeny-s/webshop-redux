import update from 'immutability-helper';

const initialState = {
  products: [],
};

function shopReducer(state = initialState, action) {
  switch (action.type) {
    case 'SHOP/SAVE_DATA':
      return update(state, {
        products: {
          $push: action.payload.data,
        }
      });
    default:
      return state
  }
}

export default shopReducer;
