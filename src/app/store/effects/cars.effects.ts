import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Car} from '../models/car.model';
import {AddCar, CAR_ACTION} from '../actions/cars.actions';
import {CarsServices} from '../../services/cars.services';
import { switchMap, mergeMap } from 'rxjs/operators';
import {Observable} from 'rxjs';

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
