import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'opzet-farm';
  public isCollapsed = false;
  public selectedIndex = 1; //default
  public humidity = this.getRandomNum(100,50); //default
  public temarature =  this.getRandomNum(100,50); //default
  public conductivity =  this.getRandomNum(100,50); //default

  public textDisplay = [
  {heading: "Caution 1", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit."},
  {heading: "Caution 2", description: "Et harum quidem rerum facilis est et expedita distinctio adipisicing."},
  {heading: "Caution 3", description: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores."},
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
