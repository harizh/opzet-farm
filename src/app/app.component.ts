import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'opzet-farm';
  public isCollapsed = false;
  public selectedIndex = 1; //defaultx
  public humidity = this.getRandomNum(100,50); //default
  public temarature =  this.getRandomNum(100,50); //default
  public conductivity =  this.getRandomNum(1,10); //default

  public textDisplay = [
  {heading: "OPTIMUM", description: "Growth is high with the present optimum condition."},
  {heading: "CAUTION", description: "Growth likely due to ongoing variations."},
  {heading: "WARNING", description: "Growth is seriously affected due to adverse condition"},
  ];

  generateRandom() {
    this.humidity  =  this.getRandomNum(100,50);
    this.temarature  =  this.getRandomNum(100,50);
    this.conductivity  =  this.getRandomNum(100,50);
  }

  getRandomNum(max,min){
    return Math.floor(Math.random() *  (max - min) + min);
  }
}
