import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { TiempoComponent } from './tiempo/tiempo.component';
import { RegistroComponent } from './registro/registro.component';

const routes:Routes =[
  {path:'',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'inicio',component:InicioComponent},
  {path:'tiempo',component:TiempoComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
