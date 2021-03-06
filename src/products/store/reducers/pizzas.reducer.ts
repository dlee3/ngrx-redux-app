import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';

export interface PizzaState {
  entities: {[id: number]: Pizza};
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      const pizzas = action.payload;
      const entities = pizzas.reduce((ents: { [id: number]: Pizza }, pizza: Pizza) => {
          return {
            ...ents
            ,
            [pizza.id]: pizza
          };
        },
        {
          ...state.entities
        }
      );
      return {
        ...state,
        loaded: true,
        loading: false,
        entities
      };
    }

    case fromPizzas.CREATE_PIZZA_SUCCESS:
    case fromPizzas.UPDATE_PIZZA_SUCCESS: {
      const pizza = action.payload;
      const entities = {
        ...state.entities,
        [pizza.id]: pizza
      };

      return {
        ...state,
        entities
      };
    }

    case fromPizzas.REMOVE_PIZZA_SUCCESS: {
      const pizza = action.payload;
      const { [pizza.id]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities
      };
    }
  }

  return state;
}

export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasLoading = (state: PizzaState) => state.loading;
