import {Injectable} from '@angular/core';
// --------------NgRx--------------------
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AddCar, CAR_ACTION} from '../actions/cars.actions';
// --------------RxJs--------------------
import {Observable} from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';
// --------------------------------------
import {CarsServices} from '../../services/cars.services';
import {Car} from '../models/car.model';

@Injectable()
export class CarsEffects {

  constructor(
    private actions$: Actions,
    private carsServices: CarsServices) {}

  @Effect() loadCars: Observable<any> = this.actions$.pipe(
    ofType(CAR_ACTION.ADD_CAR),
      switchMap( (action: AddCar) => {
      return this.carsServices.preloadCars();
    }),
      mergeMap( (cars: Car[]) => {
      return [
        {
          type: CAR_ACTION.LOAD_CARS,
          payload: cars
        }
      ];
    }));
}
