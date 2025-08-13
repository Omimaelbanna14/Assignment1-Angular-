import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
 PortfolioItem:string[]=[
    './images/port1.png',
    './images/port2.png',
    './images/port3.png',
    './images/port1.png',
    './images/port2.png',
    './images/port3.png'
  ]
  flag:boolean = true;
  modelImage: string = '';
  hideModal(el:EventTarget | null, img:HTMLImageElement):void{
    if(el == img)return;
    this.flag = true;
  }
}


