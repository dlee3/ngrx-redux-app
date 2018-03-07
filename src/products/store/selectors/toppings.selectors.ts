import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromToppings from '../reducers/toppings.reducer';

import { Topping } from '../../models/topping.model';


export const getToppingsState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.toppings
);

export const getToppingEntities = createSelector(
  getToppingsState,
  fromToppings.getToppingEntities
);

export const getAllToppings = createSelector(
  getToppingEntities,
  entities => {
    // Map back to an array of toppings
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getAllToppingsLoaded = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoaded
);

export const getAllToppingsLoading = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoading
);
