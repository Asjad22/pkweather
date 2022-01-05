import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  location={
    city:'Karachi',
    code:'pk',
  };

  result = {
    city : '',
    list: [],
  };

  weather:any;
  value:any;


  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    this._weatherService.getWeather(this.location.city, this.location.code)
      .subscribe((res) => { 
        //console.log(JSON.stringify(res))
        let resx = JSON.parse(JSON.stringify(res));
        console.log(resx.list);
        this.result.city = resx.city;
        this.result.list = JSON.parse(JSON.stringify(resx.list));
        console.log(this.result.list);
      });


    //this.value = localStorage.getItem('location');

      //if (this.value!=null){
        //  this.location=JSON.parse(this.value);
      //}else {
        //this.location={
          //city:'karachi',
          //code:'pk',


        //}
      //}
  
    
  }

}
