import { Component } from '@angular/core';
import {ApicallService} from './apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'opzet-farm';

  public humidity; //default
  public atemp;
  public cond;
  public growth;
  public lum;
  public wtem;
  public selectedIndex = 1;
  public selectedLight = 1;

  constructor(private getApi : ApicallService) {}
  values=[];
   ngOnInit(){
     this.getApi.getData().subscribe((res)=>{       
       this.values=res;
       console.log(this.values);
       this.humidity=res['ahum'];
       this.atemp=res['atemp'];
       this.cond=res['cond'];
       this.growth=res['growth'];
       this.lum=res['lum'];
       this.wtem=res['wtem'];
          if ( this.growth == 'low') 
          {
              this.selectedIndex = 2;
          }
          if ( this.growth == 'critical') 
          {
              this.selectedIndex = 3;
          }
          

          if ( this.lum >= 1000) 
          {
              this.selectedLight = 1;
          }
          else if ( this.lum < 1000) 
          {
              this.selectedLight = 3;
          }
     });
   };

  public isCollapsed = false;
   //defaultx
  public temarature =  this.getRandomNum(100,50); //default
  public conductivity =  1.2; //default

  public textDisplay = [
  {heading: "OPTIMUM", description: "Growth is high with the present optimum condition."},
  {heading: "CAUTION", description: "Growth likely due to ongoing variations."},
  {heading: "WARNING", description: "Growth is seriously affected due to adverse condition"},
  ];

  generateRandom() {
    // this.humidity  =  this.getRandomNum(100,50);
    // this.temarature  =  this.getRandomNum(100,50);
    // this.conductivity  =  this.getRandomNum(5000,1000);
  }

  getRandomNum(max,min){
    return Math.floor(Math.random() *  (max - min) + min);
  }
}
