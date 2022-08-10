import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorInicio: boolean = false;
  usuario: any = {};
  urlEndPoint: string = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  login() {
    let formulario: any = document.getElementById('login');
    let formularioValido: boolean = formulario.reportValidity();
    
    if (formularioValido) {
      this.loginService().subscribe(
        data=>this.inicioSesion(data),
      );
    }
  }

  loginService() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    console.log(this.usuario.correo)
    return this.http.post<any>(this.urlEndPoint, this.usuario, httpOptions);
  }

  inicioSesion(resultado: any) {
    console.log(resultado);
    if (resultado) {
      localStorage.setItem('usuario', JSON.stringify(resultado));
      console.log('inicio de sesion correcto');
      location.href = '/inicio';
    } else {//Si no tiene nada 
      this.errorInicio = true;
    }
  }
}
