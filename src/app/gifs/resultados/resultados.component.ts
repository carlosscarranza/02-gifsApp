import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  get resultados() {
    return this.gifsService.resultados;
  }

}
