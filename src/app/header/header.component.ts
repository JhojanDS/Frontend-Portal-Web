import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario:any;
  
  constructor() { }

  ngOnInit(): void {
    const data = localStorage.getItem('usuario');
    
    if(data){
    this.usuario = JSON.parse(data);
    }
  }

  logout(){
    localStorage.removeItem('usuario');
    location.href="/";
  }
}
