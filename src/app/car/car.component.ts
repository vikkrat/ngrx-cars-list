import { Component, Input } from '@angular/core';
// ---------------------------------------------
import { CarsServices } from '../services/cars.services';
import { Car } from '../store/models/car.model';

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
