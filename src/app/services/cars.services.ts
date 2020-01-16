import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../store/models/car.model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../store/state/app.state';
import {AddCar, DeleteCar, LoadCars, UpdateCar} from '../store/actions/cars.actions';

@Injectable()
export class CarsServices {
  static baseUrl = 'http://localhost:3000/';
  cars: Car[] = [];

  constructor(
    private http: HttpClient,
    private store: Store<AppState>) {
  }

  preloadCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${CarsServices.baseUrl}cars`);
  }

  getCars(): void {
    this.preloadCars().subscribe(cars => {
      this.cars = cars;
      this.store.dispatch(new LoadCars(this.cars));
    });
  }

  addCar(car: Car) {
    return this.http.post<Car>(`${CarsServices.baseUrl}cars`, car).subscribe(
      (carItem) => {
        this.store.dispatch(new AddCar(carItem));
      }
    );
  }

  deleteCar(car: Car) {
    this.http.delete<Car>(`${CarsServices.baseUrl}cars/${car.id}`).subscribe(
      () => {
        this.store.dispatch(new DeleteCar(car));
      }
    );
  }

  updateCar(car: Car) {
    this.http.put<Car>(`${CarsServices.baseUrl}cars/${car.id}`, car).subscribe(
      (car) => {
        this.store.dispatch(new UpdateCar(car));
      }
    );
  }
}
