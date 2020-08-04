import { CategoriasService } from './../../../services/categorias.service';
import { Component } from '@angular/core';
import { TemasService } from '../../../services/temas.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  tema: any[];
  categorias: any[] = [];
  categoria: any;

  constructor(private _temasService: TemasService, private _categoriasService: CategoriasService) {
    this.getId(4);
    this.getAll();
  }

  getId(id: number) {
    this._temasService.getId(id).subscribe((data: any) => {
      console.log(data);
      this.tema = data.tema;
      console.log(this.tema);
    })

  }

  getAll() {

    this._categoriasService.getAll().subscribe((data: any) => {
      console.log(data);
      this.categorias = data.categorias;
      console.log(this.categorias);
    });

  }



}
