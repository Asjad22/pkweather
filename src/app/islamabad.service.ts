import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IWeather } from './iweather';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IslamabadService {

  apiKey = 'f1abe2dea14a4eee3d8087bfaaa4f982'
  url;

  constructor(private http:HttpClient) {
    this.url='http://api.openweathermap.org/data/2.5/forecast?q=' ;
  }

  getisbWeather(city:string , code:string) {
    return this.http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey).pipe(map( res => res)); 
  
  }

}
