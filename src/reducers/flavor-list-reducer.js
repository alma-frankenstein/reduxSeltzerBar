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

  default:
    return state;
  }
};