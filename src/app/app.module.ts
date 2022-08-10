import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from  '@angular/common/http';
import { TiempoComponent } from './tiempo/tiempo.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TiempoComponent,
    NoticiasComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
