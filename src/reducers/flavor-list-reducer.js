export default (state = {}, action) => {
  const { name, brand, price, description, quantity, id } = action;
  switch (action.type) {
  case 'ADD_FLAVOR':
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
  case 'BUY' :
    const newState = {...state}
      // if(flavor.id === id && flavor.quantity > 0) {
      //   flavor.quantity -= 1;
      // } else if (flavor.id === id && flavor.quantity === 0) {
      //   flavor.quantity = "no more left";
      // }
      console.log(newState);
      console.log(newState[0]);

      console.log(newState.id);
      //console.log(newState.id.name);
      if(newState.id === id && newState.quantity > 0) {
        newState.quantity -= 1;
      } else if (newState.id === id && newState.quantity === 0) {
        newState.quantity = "no more left";
      }
      return newState;
  default:
    return state;
  }
};