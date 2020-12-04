import * as actions from './../../actions';

describe('seltzer actions', () => {
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addFlavor should create ADD_FLAVOR action', () => {
    expect(actions.addFlavor({name: "Durian", brand: "Bubbeh's Bubbles", price: "2", description: "A delicacy in Singapore", quantity: 124, id:1})).toEqual({
            type: 'ADD_FLAVOR',
            name: "Durian", 
            brand: "Bubbeh's Bubbles", 
            price: "2", 
            description: "A delicacy in Singapore",
            quantity: 124, 
            id:1
    });
  });
});