import { Component, OnInit } from '@angular/core';
import { TemasService } from '../../../services/temas.service';

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: ['./posiciones.component.css']
})
export class PosicionesComponent implements OnInit {
  tema: any[];
  constructor(private _temasService: TemasService) {
    this.getId(2);
  }

  ngOnInit(): void {
  }
  getId(id: number) {
    this._temasService.getId(id).subscribe((data: any) => {
      console.log(data);
      this.tema = data.tema;
      console.log(this.tema);
    })
  }

}
