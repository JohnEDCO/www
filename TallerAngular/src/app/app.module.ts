import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{FormaMorrirService}from './forma-morrir.service';

import { AppComponent } from './app.component';
import { FormasMorirComponent } from './formas-morir/formas-morir.component';
import { QuierenMorirComponent } from './quieren-morir/quieren-morir.component';
import { PorqueGanarComponent } from './porque-ganar/porque-ganar.component';

const rutas: Routes = [
  { path: 'formas-morir', component: FormasMorirComponent},
  { path: 'quieren-morir', component: QuierenMorirComponent},
  { path: 'porque-ganar', component: PorqueGanarComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' },//para cualquier ruta que sea desconocida va a ir a inico o bien podria ir a una 404
  { path: '', component: FormasMorirComponent, pathMatch: 'full' }//para cuando la tura sea vacia va a ir a inicio
];
@NgModule({
  declarations: [
    AppComponent,
    FormasMorirComponent,
    QuierenMorirComponent,
    PorqueGanarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      rutas,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  providers: [
    FormaMorrirService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
