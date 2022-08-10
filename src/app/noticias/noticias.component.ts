import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  listadoNoticias:any[]=[];

  constructor(private noticiaService:NoticiasService) {}

  ngOnInit(): void {
    this.noticiaService.getNoticias().subscribe(
      data =>{
        this.listadoNoticias = data.articles;
      }
    )
  }

}
