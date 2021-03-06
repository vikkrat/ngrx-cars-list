import { Component } from '@angular/core';
// ----------------------------------------
import * as moment from 'moment';
// ----------------------------------------
import { CarsServices } from '../services/cars.services';
import { Car } from '../store/models/car.model';


@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent {
  public carName = '';
  public carModel = '';
  public carDate = moment().format('DD/MM/YYYY ::: hh:mm:ss');

  constructor(private carsServices: CarsServices) {}

  onAdd() {
    if (this.carName === '' || this.carModel === '') {
      return;
    }

    const car = new Car(
      this.carName,
      this.carModel,
      this.carDate
    );

    this.carsServices.addCar(car);
    this.carModel = this.carName = '';
  }

  onLoad() {
    this.carsServices.getCars();
  }

}
