import { Component, Input, OnInit } from '@angular/core';
import { Gallery } from 'src/app/global/gallery/models/gallery.models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
 public gallery!:Gallery;
  constructor() { 
    this.gallery=
      {
      hombre:{
        src:'https://cdn.kaotikobcn.com/pub/media/kaotiko/home/2021/september/man_desktop.jpg',
        alt:'hombre'
      },
      
      unisex:{
        src:'https://cdn.kaotikobcn.com/pub/media/kaotiko/home/2021/september/genderless_desktop.jpg',
        alt:'unisex'
      },
      mujer:{
        src:'https://cdn.kaotikobcn.com/pub/media/kaotiko/home/2021/september/woman_desktop.jpg',
        alt:'mujer'
      },
      button:'Hombre'

    }
  }
  

  ngOnInit(): void {
  }
  public onClickClothes():void{
    if(this.gallery.button=='Hombre'){
      this.gallery.button='Unisex'
    }else if(this.gallery.button=='Unisex'){
      this.gallery.button='Mujer'
    }else{
      this.gallery.button='Hombre'
    }
  }

}
