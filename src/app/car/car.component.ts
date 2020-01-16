import { Component, Input } from '@angular/core';
import { Car } from '../store/models/car.model';
import { CarsServices } from '../services/cars.services';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input() car: Car;

  constructor(private carsServices: CarsServices) {}

  onBuy() {
    this.car.isSold = true;
    this.carsServices.updateCar(this.car);
  }

  onDelete() {
    this.carsServices.deleteCar(this.car);
  }

}
