import { Component } from '@angular/core';

import { AppService } from './app.service';
import { Car } from './app.classes';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars: Car[];
  
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.appService.getCars().subscribe(cars => this.cars = cars);
  }
}
