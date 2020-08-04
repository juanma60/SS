import { Component, Output, EventEmitter } from '@angular/core';
import { SkatersService } from '../../services/skaters.service';

@Component({
  selector: 'app-skater',
  templateUrl: './skater.component.html',
  styleUrls: ['./skater.component.css']
})
export class SkaterComponent {
  skaters: any[] = [];
  skater: any;



  constructor(private skatersService: SkatersService) {
    this.getId(1);
  }


  getAll() {

    this.skatersService.getAll().subscribe((data: any) => {
      console.log(data);
      this.skaters = data.skaters;
      console.log(this.skaters);
    });

  }

  getId(id: number) {
    this.skatersService.getId(id).subscribe((data: any) => {
      console.log(data);
      this.skater = data.skater;
      console.log(this.skater);
    })
  }

}
