import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'opzet-farm';
  public isCollapsed = false;
  public selectedIndex=1; //default
  public humidity = this.getRandomNum(100,50); //default
  public temarature =  this.getRandomNum(100,50); //default
  public conductivity =  this.getRandomNum(100,50); //default

  generateRandom() {
    this.humidity  =  this.getRandomNum(100,50);
    this.temarature  =  this.getRandomNum(100,50);
    this.conductivity  =  this.getRandomNum(100,50);
  }

  getRandomNum(max,min){
    return Math.floor(Math.random() *  (max - min) + min);
  }
}
