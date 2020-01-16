import {Action} from '@ngrx/store';
import {Car} from '../models/car.model';


export enum CAR_ACTION {
  ADD_CAR = '[CARS] ADD_CAR',
  DELETE_CAR = '[CARS] DELETE_CAR',
  UPDATE_CAR = '[CARS] UPDATE_CAR',
  LOAD_CARS = '[CARS] LOAD CARS'
}

export class AddCar implements Action {
  readonly type = CAR_ACTION.ADD_CAR;
  constructor(public payload: Car) {}
}

export class DeleteCar implements Action {
  readonly type = CAR_ACTION.DELETE_CAR;
  constructor(public payload: Car) {}
}

export class UpdateCar implements Action {
  readonly type = CAR_ACTION.UPDATE_CAR;
  constructor(public payload: Car) {
  }
}

export class LoadCars implements Action {
  readonly type = CAR_ACTION.LOAD_CARS;
  constructor(public payload: Car[]) {
  }
}

export type CarActions =
  | AddCar
  | DeleteCar
  | UpdateCar
  | LoadCars;
