import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigitsComponent } from './digits/digits.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {path: 'digit', component: DigitsComponent},
    {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
