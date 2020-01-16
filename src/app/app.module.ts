import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ------------------------------------
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// ---------------NgRx----------------
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { carsReducer } from './store/reducers/cars.reducer';
import { CarsEffects } from './store/effects/cars.effects';
// ------------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarComponent } from './car/car.component';
import { CarsServices } from './services/cars.services';


@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({carPage: carsReducer}),
    EffectsModule.forRoot([CarsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [CarsServices],
  bootstrap: [AppComponent]
})
export class AppModule {}
