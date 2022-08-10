import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  urlEndPoint: string = 'http://localhost:8080/api/crear';
  usuario: any = {};
  errorCorreo: boolean = false;
  msgError: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  registro() {
    let formulario: any = document.getElementById('registro');
    let formularioValido: boolean = formulario.reportValidity();

    if (formularioValido) {
      this.registroService().subscribe((data) => this.inicioSesion(data));
    }
  }

  registroService() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post<any>(this.urlEndPoint, this.usuario, httpOptions)
      .pipe(
        catchError((e) => {
          this.errorCorreo = true;
          this.msgError = e.error.mensaje;
          console.log(e.error.mensaje);
          return throwError(e);
        })
      );
  }

  

  inicioSesion(resultado: any) {
    console.log(resultado);
    if (resultado) {
      alert('Registro correcto');
      localStorage.setItem('usuario', JSON.stringify(resultado));
      console.log('inicio de sesion correcto');
      location.href = '/inicio';
    }
  }
}
