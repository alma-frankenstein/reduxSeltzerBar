import * as actions from '../../actions';
import * as a from '../../actions/index';
import * as c from '../../actions/ActionTypes';

describe('seltzer actions', () => {
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addFlavor should create ADD_FLAVOR action', () => {
    expect(actions.addFlavor({name: "Durian", brand: "Bubbeh's Bubbles", price: "2", description: "A delicacy in Singapore", quantity: 124, id:1})).toEqual({
            type: c.ADD_FLAVOR,
            name: "Durian", 
            brand: "Bubbeh's Bubbles", 
            price: "2", 
            description: "A delicacy in Singapore",
            quantity: 124, 
            id:1
    });
  });
});