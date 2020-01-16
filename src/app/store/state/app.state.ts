import {Car} from '../models/car.model';


export interface AppState {
  carPage: {cars: Car[]};
}
