import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }

   getData(){
        let url='https://iothydro.opzetsolutions.com/iot-get';
        return this.http.get<any>(url);
    }
}
