import { Component } from '@angular/core';
import * as moment from 'moment';
import { Car } from '../store/models/car.model';
import { CarsServices } from '../services/cars.services';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent {
  public carName = '';
  public carModel = '';
  // public carDate = Date.now().toString();
  public carDate = moment().format('DD/MM/YYYY ::: hh:mm:ss');

  constructor(private carsServices: CarsServices) { }

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
