import { Component, OnInit } from '@angular/core';

import { KaotikoData } from '../models/formulario';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
public kaotikoData:KaotikoData;
public message:string='';


  constructor() { 
    this.kaotikoData={
    nav:{
      logo:{
        src:'https://cdn.kaotikobcn.com/pub/media/logo/default/logotipo_negro_small.png',
        alt:'kaotiko'
      },
      hombre:'Hombre',
      mujer:'Mujer',
      ninho:'Kids'
    },
    
   /*gallery:[
      {
      fotos:{
        src:'https://cdn.kaotikobcn.com/pub/media/kaotiko/home/2021/september/man_desktop.jpg',
        alt:'hombre'
      }},
      {
      fotos:{
        src:'https://cdn.kaotikobcn.com/pub/media/kaotiko/home/2021/september/genderless_desktop.jpg',
        alt:'unisex'
      }},
      {
      fotos:{
        src:'https://cdn.kaotikobcn.com/pub/media/kaotiko/home/2021/september/woman_desktop.jpg',
        alt:'mujer'
      }
    }],*/
    hero:{
      title:'Suscríbete a la Newsletter',
      parrafo:'Suscríbete para recibir las últimas novedades y nuestras campañas promocionales',
      boton:'Suscríbete'
    }
    
  }
}

  ngOnInit(): void {
  }
  public onKeyPress(letter:string):void{
    this.message=letter;
    if(letter==='antoniomaestrevargas@gmail.com'){
      alert('Este usuario está registrado')
    }else if(letter==='antoniorosales@gmail.com'){
      alert('Registrandose')
    }else{
      this.message=letter;
    }
  }
 

}
