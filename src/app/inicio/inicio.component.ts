import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario:any={};

  constructor() { }

  ngOnInit(): void {
    const data = localStorage.getItem('usuario');
    
    if(data){
    this.usuario = JSON.parse(data);
    }else{
      location.href="/";
    }
  /*   if(!this.usuario){
      location.href="/";
    } */
    console.log(this.usuario);
  }

}
