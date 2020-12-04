import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import flavorListReducer from '../../reducers/flavor-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Check that initial state of flavorListReducer matches root reducer', () => {
    expect(store.getState().masterFlavorList).toEqual(flavorListReducer(undefined, { type: null }));
  });

  test('Check that ADD_FLAVOR action works for flavorListReducer and root reducer', () => {
    const action = {
      type: 'ADD_FLAVOR',
      name: "bubble gum",
      brand: "fizzle",
      price: "3",
      description: "kind of gross",
      quantity: 100,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterFlavorList).toEqual(flavorListReducer(undefined, action));
  });
  
  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterFlavorList: {},
      formVisibleOnPage: false
    });
  });

});