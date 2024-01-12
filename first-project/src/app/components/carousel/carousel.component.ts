import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  myInterval = 3000;
  activeSlideIndex = 0;
  slides: {image: string; text?: string}[] = [
    {image: 'assets/azienda.jpeg', text:'Add text'},
    {image: 'assets/azienda-2.jpeg', text:'Add text'},
    {image: 'assets/azienda-3.jpeg', text:'Add text'}
  ];
}
