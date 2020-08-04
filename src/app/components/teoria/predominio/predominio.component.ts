import { Component, OnInit } from '@angular/core';
import { TemasService } from '../../../services/temas.service';


@Component({
  selector: 'app-predominio',
  templateUrl: './predominio.component.html',
  styleUrls: ['./predominio.component.css']
})
export class PredominioComponent implements OnInit {

  tema: any[];

  constructor(private _temasService: TemasService) {
    this.getId(1);
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
