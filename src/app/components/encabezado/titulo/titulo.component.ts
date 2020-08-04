import { Component, Input } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent {

  public titulo: string;
  public subtitulo: string;

  constructor(private router: Router) {

    this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data),
      )
      .subscribe(data => {
        console.log(data);
        this.titulo = data.titulo;
        this.subtitulo = data.subtitulo;
      });
  }



}
