import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, catchError, concatMap } from 'rxjs/operators';

import * as toppingsAction from '../actions/toppings.action';
import * as fromServices from '../../services/toppings.service';
import { ToppingsService } from '../../services/toppings.service';

@Injectable()
export class ToppingsEffects {
  constructor(private actions$: Actions,
              private toppingsService: ToppingsService) {}

  @Effect()
  loadToppings$ = this.actions$.ofType(toppingsAction.LOAD_TOPPINGS).pipe(
    concatMap(() => {
      return this.toppingsService.getToppings().pipe(
        map(toppings => new toppingsAction.LoadToppingsSuccess(toppings)),
        catchError(error => of(new toppingsAction.LoadToppingsFail(error)))
      );
    })
  );
}
