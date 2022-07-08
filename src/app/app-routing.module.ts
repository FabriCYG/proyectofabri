import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadenasDeComidaComponent } from './cadenas-de-comida/cadenas-de-comida.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'cadenas-de-comida', component: CadenasDeComidaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

