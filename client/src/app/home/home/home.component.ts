import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: false, showIndicators: true } }
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides = [
    { image: '../../../assets/Banner1.png', text: 'First' },
    { image: '../../../assets/Banner2.png', text: 'Second' },
    { image: '../../../assets/Banner1.png', text: 'Third' }
  ];
  noWrapSlides = false;
  showIndicator = true;
  images = ["../../../assets/Banner1.png", "../../../assets/Banner2.png", "../../../assets/Banner1.png"];
}
