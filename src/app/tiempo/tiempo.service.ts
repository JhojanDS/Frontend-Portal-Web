import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TiempoService {
  private urlEndPoint: string =
    'https://api.openweathermap.org/data/2.5/weather?q=cali&appid=b6570b408a40c233c72991d865732eb4';

  constructor(private http: HttpClient) {}

  getTiempo() {
    return this.http.get(this.urlEndPoint);
  }
}
