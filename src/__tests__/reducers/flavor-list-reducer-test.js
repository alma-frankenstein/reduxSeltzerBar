import flavorListReducer from '../../reducers/flavor-list-reducer';


  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(flavorListReducer({}, { type: null })).toEqual({});
  });