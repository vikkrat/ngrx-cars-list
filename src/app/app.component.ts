import {Component, OnInit} from '@angular/core';
import { Car } from './store/models/car.model';
import {Store} from '@ngrx/store';
import {AppState} from './store/state/app.state';
import {Observable} from 'rxjs';
import {CarState} from './store/models/state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-cars-list';

  public cars: Car[] = [];
  public carState: Observable<CarState>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    // this.store.select('carPage').subscribe(({cars}) => this.cars = cars);
    this.carState = this.store.select('carPage');
  }
  //
  // onAdd(car: Car) {
  //   return this.cars.push(car);
  // }
  //
  // onDelete(car: Car) {
  //   return this.cars = this.cars.filter( c => c.id !== car.id);
  // }


}
