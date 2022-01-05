import { Component, OnInit } from '@angular/core';
import { IslamabadService } from '../islamabad.service';

@Component({
  selector: 'app-islamabad',
  templateUrl: './islamabad.component.html',
  styleUrls: ['./islamabad.component.css']
})
export class IslamabadComponent implements OnInit {

  
  location={
    city:'Islamabad',
    code:'pk',
  };

  result = {
    city : '',
    list: [],
  };

  weather:any;
  value:any;


  constructor(private _islamabadService: IslamabadService) { }

  ngOnInit(): void {
    this._islamabadService.getisbWeather(this.location.city, this.location.code)
      .subscribe((res) => { 
        //console.log(JSON.stringify(res))
        let resx = JSON.parse(JSON.stringify(res));
        console.log(resx.list);
        this.result.city = resx.city;
        this.result.list = JSON.parse(JSON.stringify(resx.list));
        console.log(this.result.list);
      });
  }

}
