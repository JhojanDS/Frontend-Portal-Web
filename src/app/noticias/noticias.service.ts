import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  private urlEndPoint: string =
    'https://newsapi.org/v2/top-headlines?country=co&apiKey=64552045cf084e59a5aa7b38f54ceef7';
  
  constructor(private http: HttpClient) {}

  getNoticias():Observable<any>{
   return this.http.get(this.urlEndPoint);
  }
}
