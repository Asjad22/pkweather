import { Component, OnInit } from '@angular/core';
import { QuettaService } from '../quetta.service';

@Component({
  selector: 'app-quetta',
  templateUrl: './quetta.component.html',
  styleUrls: ['./quetta.component.css']
})
export class QuettaComponent implements OnInit {

  location={
    city:'Quetta',
    code:'pk',
  };

  result = {
    city : '',
    list: [],
  };

  weather:any;
  value:any;


  constructor(private _quettaService:  QuettaService) { }

  ngOnInit(): void {
    this._quettaService.getqueWeather(this.location.city, this.location.code)
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


