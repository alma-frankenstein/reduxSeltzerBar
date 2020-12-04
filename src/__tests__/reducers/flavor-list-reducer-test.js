import flavorListReducer from '../../reducers/flavor-list-reducer';

describe('flavorListReducer', () => {

  let action;
  const flavorData = {
    name: 'Bing',
    brand: 'seltzerTown',
    price: '1',
    description: 'cherry',
    quantity: 124,
    id: 3
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(flavorListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new flavor data to masterflavorList', () => {
    const { name, brand, price, description, quantity, id } = flavorData;
    action = {
      type: 'ADD_FLAVOR',
      name: name,
      brand: brand,
      price: price,
      description: description,
      quantity: quantity,
      id: id
    };

    expect(flavorListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        description: description,
        quantity: quantity,
        id: id
      }
    });
  });
});