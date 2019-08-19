import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class FormaMorrirService {

  formaMorir: any[] = [
    {
      forma: 1,
      nombre: 'Atropello por una babosa',
      descripcion: 'Steaf era un timador que se dedicaba a vender entradas falsas para partidos de fútbol. En uno de estos casos no corrió la misma suerte. Cuando intentaba huir de uno de sus compradores al darse cuenta del timo, fue atropellado por culpa de una babosa. '
  
    },
    {
      forma: 2,
      nombre: 'El beso de la muerte',
      descripcion: ' Louis, una chica muy atractiva que se aprovechaba de ello, montó una caseta de besos en una feria benéfica. Entraba más dinero en su bolsillo que en la urna destinada a un hospital infantil, aunque ésto terminó pagándolo ella misma mortalmente. ¿Quién va a pensar que un beso al chico más guapo del insti va a ser tu fin?'
  
    },
    {
      forma: 3,
      nombre: 'Muerte a manguerazos',
      descripcion: 'Leny, sufrio una de las muertes más increibles y tremendas de todas las que ya hemos visto en 1000 Maneras de Morir. Murío a manguerazo limpio '
  
    },
    {
      forma: 4,
      nombre: 'Empalado por una señal de tráfico',
      descripcion: 'De las muertes más absurdas y espectaculares al mismo tiempo se encuentra la de este joven de Ohio. Muero clavándose una señal de tráfico en el abdomen '
  
    },
  ]
  constructor() { }

  obtenerMuertes(){
    return this.formaMorir;
  }
}
