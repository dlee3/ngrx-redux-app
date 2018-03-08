import * as fromToppings from './toppings.action';

describe('Toppings Actions', () => {

  describe('LoadToppings Actions', () => {
    describe('LoadToppings', () => {
      it('should create an action', () => {
        const action = new fromToppings.LoadToppings();

        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS
        });
      });
    });

    describe('LoadToppings Fail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromToppings.LoadToppingsFail(payload);

        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS_FAIL,
          payload
        });
      });
    });

    describe('LoadToppings Success', () => {
      it('should create an action', () => {
        const payload = [
          { id: 1, name: 'onion'},
          { id: 2, name: 'pepper'},
          { id: 3, name: 'mushroom'}
        ];
        const action = new fromToppings.LoadToppingsSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS_SUCCESS,
          payload
        });
      });
    });
  });

  describe('VisualizeToppings Actions', () => {
    describe('VisualizeToppings', () => {
      it('should create an action', () => {
        const payload = [1, 2, 3];
        const action = new fromToppings.VisualizeToppings(payload);

        expect({ ...action }).toEqual({
          type: fromToppings.VISUALIZE_TOPPINGS,
          payload
        });
      });
    });
  });

});
