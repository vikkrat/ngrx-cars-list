import { Component, OnInit } from '@angular/core';
// --------------NgRx--------------------
import { Store } from '@ngrx/store';
import { AppState } from './store/state/app.state';
import { CarState } from './store/models/state.model';
// --------------RxJs--------------------
import { Observable } from 'rxjs';
// --------------------------------------
import { Car } from './store/models/car.model';

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
    this.carState = this.store.select('carPage');
  }

}
