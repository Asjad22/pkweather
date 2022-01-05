import { Component, OnInit } from '@angular/core';
import { LahoreService } from '../lahore.service';

@Component({
  selector: 'app-lahore',
  templateUrl: './lahore.component.html',
  styleUrls: ['./lahore.component.css']
})
export class LahoreComponent implements OnInit {

  location={
    city:'lahore',
    code:'pk',
  };

  result = {
    city : '',
    list: [],
  };

  weather:any;
  value:any;


  constructor(private _lahoreService: LahoreService) { }

  ngOnInit(): void {
    this._lahoreService.getlhrWeather(this.location.city, this.location.code)
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


