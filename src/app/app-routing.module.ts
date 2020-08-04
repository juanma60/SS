import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkaterComponent } from './components/skater/skater.component';
import { CrearPartidaComponent } from './components/partida/crearPartida/crearPartida.component';
import { SalaEsperaComponent } from './components/partida/salaEspera/salaEspera.component';
import { PartidaComponent } from './components/partida/partida.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { TrucosComponent } from './components/trucos/trucos.component';
import { SkatesComponent } from './components/skates/skates.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { SeleccionTrucoComponent } from './components/seleccion-truco/seleccion-truco.component';
import { PosicionesComponent } from './components/teoria/posiciones/posiciones.component';
import { PredominioComponent } from './components/teoria/predominio/predominio.component';
import { CategoriasComponent } from './components/teoria/categorias/categorias.component';
import { VariablesComponent } from './components/teoria/variables/variables.component';
import { DisciplinasComponent } from './components/teoria/disciplinas/disciplinas.component';
import { TrucosCompuestosComponent } from './components/teoria/trucos-compuestos/trucos-compuestos.component';
import { CuadrantesComponent } from './components/teoria/cuadrantes/cuadrantes.component';

export const ROUTES: Routes = [
  { path: 'skater', component: SkaterComponent, data: { titulo: 'Skater', subtitulo: 'Perfil' } },
  { path: 'encabezado', component: EncabezadoComponent },
  { path: 'teoria/predominio', component: PredominioComponent, data: { titulo: 'Teoria', subtitulo: 'Predominios' } },
  { path: 'teoria/posiciones', component: PosicionesComponent, data: { titulo: 'Teoria', subtitulo: 'Posiciones' } },
  { path: 'teoria/categorias', component: CategoriasComponent, data: { titulo: 'Teoria', subtitulo: 'Categorias' } },
  { path: 'teoria/variables', component: VariablesComponent, data: { titulo: 'Teoria', subtitulo: 'Variables' } },
  { path: 'teoria/disciplinas', component: DisciplinasComponent, data: { titulo: 'Teoria', subtitulo: 'Disciplinas' } },
  { path: 'teoria/trucosCompuestos', component: TrucosCompuestosComponent, data: { titulo: 'Teoria', subtitulo: 'TrucosCompuestos' } },
  { path: 'teoria/cuadrantes', component: CuadrantesComponent, data: { titulo: 'Teoria', subtitulo: 'Cuadrantes' } },
  { path: 'partida/crearPartida', component: CrearPartidaComponent, data: { titulo: 'Partida', subtitulo: 'Crear Partida' } },
  { path: 'partida/salaEspera', component: SalaEsperaComponent, data: { titulo: 'Partida', subtitulo: 'Sala de Espera' } },
  { path: 'trucos', component: TrucosComponent, data: { titulo: 'Trucos', subtitulo: 'Mis trucos' } },
  { path: 'seleccionTruco', component: SeleccionTrucoComponent, data: { titulo: 'Seleccion Truco', subtitulo: 'Mis trucos' } },
  { path: 'skates', component: SkatesComponent, data: { titulo: 'S.K.A.T.E s', subtitulo: 'Historial' } },
  { path: 'partida', component: PartidaComponent, data: { titulo: 'Partida', subtitulo: 'Jugando' } },
  { path: 'resultados', component: ResultadosComponent, data: { titulo: 'Resultados' } },
  { path: '', pathMatch: 'full', redirectTo: 'skater' },
  { path: '**', pathMatch: 'full', redirectTo: 'skater' }
]

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
