import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, price, description, quantity, id } = action;
  switch (action.type) {
  case c.ADD_FLAVOR:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        price: price,
        description: description,
        quantity: quantity,
        id: id
      }
    });
  case c.BUY :
    const newState = {...state}
      if(newState[id].quantity > 0) {
        newState[id].quantity -= 1;
      } else if (newState[id].quantity === 0) {
        newState[id].quantity = "no more left";
      }
      return newState;
  default:
    return state;
  }
};