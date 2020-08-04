import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ROUTES, AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { CrearPartidaComponent } from './components/partida/crearPartida/crearPartida.component'
import { SkaterComponent } from './components/skater/skater.component'
import { SalaEsperaComponent } from './components/partida/salaEspera/salaEspera.component'
import { PartidaComponent } from './components/partida/partida.component'
import { ResultadosComponent } from './components/resultados/resultados.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { RespuestaComponent } from './components/partida/respuesta/respuesta.component';
import { SeleccionTrucoComponent } from './components/seleccion-truco/seleccion-truco.component';
import { SkatesComponent } from './components/skates/skates.component';
import { TrucosComponent } from './components/trucos/trucos.component';
import { IndicadorPosicionComponent } from './components/partida/indicador-posicion/indicador-posicion.component';
import { PosicionesComponent } from './components/teoria/posiciones/posiciones.component';
import { PredominioComponent } from './components/teoria/predominio/predominio.component';
import { CategoriasComponent } from './components/teoria/categorias/categorias.component';
import { VariablesComponent } from './components/teoria/variables/variables.component';
import { DisciplinasComponent } from './components/teoria/disciplinas/disciplinas.component';
import { TrucosCompuestosComponent } from './components/teoria/trucos-compuestos/trucos-compuestos.component';
import { CuadrantesComponent } from './components/teoria/cuadrantes/cuadrantes.component';
import { FooterComponent } from './components/footer/footer.component';
import { TituloComponent } from './components/encabezado/titulo/titulo.component';
import { SubtituloComponent } from './components/encabezado/subtitulo/subtitulo.component';
import { HttpClientModule } from '@angular/common/http';
import { DescripcionComponent } from './components/teoria/descripcion/descripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearPartidaComponent,
    SkaterComponent,
    SalaEsperaComponent,
    PartidaComponent,
    ResultadosComponent,
    EncabezadoComponent,
    RespuestaComponent,
    SeleccionTrucoComponent,
    SkatesComponent,
    TrucosComponent,
    IndicadorPosicionComponent,
    PosicionesComponent,
    PredominioComponent,
    CategoriasComponent,
    VariablesComponent,
    DisciplinasComponent,
    TrucosCompuestosComponent,
    CuadrantesComponent,
    FooterComponent,
    TituloComponent,
    SubtituloComponent,
    DescripcionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
