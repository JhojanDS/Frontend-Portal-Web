import { Component, OnInit } from '@angular/core';
import { TiempoService } from './tiempo.service';


@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {
  
  usuario:any={};
  tiempoCali:any;

  constructor(private tiempoService:TiempoService) { }

  ngOnInit(): void {
    const data = localStorage.getItem('usuario');
    
    if(data){
    this.usuario = JSON.parse(data);
    }else{
      location.href="/";
    }  


    this.tiempoService.getTiempo().subscribe(
      res => this.tiempoCali = res,
      err => console.log(err)
    )  
    

}
}