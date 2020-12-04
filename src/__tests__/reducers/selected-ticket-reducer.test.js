import selectedTicketReducer from '../../reducers/selected-ticket-reducer';
import * as c from '../../actions/ActionTypes';

describe("selectedTicketReducer", () => {

  test('Should return return null if no ticket is selected', () => {
    expect(selectedTicketReducer(null, { type: null })).toEqual(null);
  });
});