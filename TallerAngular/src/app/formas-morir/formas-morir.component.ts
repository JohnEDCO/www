import { Component, OnInit } from '@angular/core';
import{FormaMorrirService}from './../forma-morrir.service';

@Component({
  selector: 'app-formas-morir',
  templateUrl: './formas-morir.component.html',
  styleUrls: ['./formas-morir.component.css']
})
export class FormasMorirComponent implements OnInit {


  morir:any[]=[];
  constructor(private _servicio:FormaMorrirService) {//de esta manera inyectamos directamente el servicio
    this.morir = _servicio.obtenerMuertes();

   }
  ngOnInit() {
  }

}
