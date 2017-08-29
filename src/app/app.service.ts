import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Car } from './app.classes';

@Injectable()
export class AppService {

  constructor(private http: Http) {}

  getCars(): Observable<Car[]> {
    return this.http.get('../assets/cars.json')
               .map(response => response.json() as Car[]);
  }

}