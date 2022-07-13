import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'  //Lo coloca globalmente en la app
})
export class GifsService {

  constructor(private http:HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
   }

  private apiKey: string = 'DhnMQYmk9vRM7A2b2i7tkrlPZ66I7Qgp';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial(){

    return [...this._historial]; //Operador Spread
  }

  buscarGifs(query: string = ''){

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10); //Only 10

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=DhnMQYmk9vRM7A2b2i7tkrlPZ66I7Qgp&q=${query}&limit=10`)
    .subscribe((resp) => {
      console.log(resp.data);
      this.resultados = resp.data;
    })
  }
}
