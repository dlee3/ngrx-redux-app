import * as fromRouter from './router.action';
import { NavigationExtras } from '@angular/router';

describe('Router Actions', () => {

  describe('Router Actions Go', () => {
    it('should create an action', () => {
      const payload = {
        path: <any>['/'],
        query: {},
        extras: <NavigationExtras>{ replaceUrl: true }
      };
      const action = new fromRouter.Go(payload);

      expect({ ...action }).toEqual({
        type: fromRouter.GO,
        payload
      });
    });
  });

  describe('Router Actions Back', () => {
    it('should create an action', () => {
      const action = new fromRouter.Back();

      expect({ ...action }).toEqual({
        type: fromRouter.BACK
      });
    });
  });

  describe('Router Actions Forward', () => {
    it('should create an action', () => {
      const action = new fromRouter.Forward();

      expect({ ...action }).toEqual({
        type: fromRouter.FORWARD
      });
    });
  });

});
