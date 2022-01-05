import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherService } from './weather.service';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';
import { IslamabadComponent } from './islamabad/islamabad.component';
import { LahoreComponent } from './lahore/lahore.component';
import { QuettaComponent } from './quetta/quetta.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'setting', component: SettingsComponent },
  { path:'islamabad', component: IslamabadComponent },
  { path:'quetta', component: QuettaComponent },
  { path:'lahore', component: LahoreComponent },
  

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
