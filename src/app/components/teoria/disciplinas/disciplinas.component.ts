import { Component, OnInit } from '@angular/core';
import { TemasService } from '../../../services/temas.service';


@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  tema: any[];

  constructor(private _temasService: TemasService) {
    this.getId(3);
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
