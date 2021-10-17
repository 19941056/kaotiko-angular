import { Component, OnInit,Input, Output } from '@angular/core';
import { Hero } from 'src/app/models/formulario';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() public hero!:Hero;
  
  @Output() emitMessage= new EventEmitter<string>();
 public message:string='';
    
 
   

  ngOnInit(): void {
  }
/*public onKeyPress(letter:string):void{
    this.message=letter;
    if(letter==='antoniomaestrevargas@gmail.co'){
      alert('Este usuario está registrado')
    }else if(letter==='antoniorosales@gmail.co'){
      alert('Registrandose')
    }else{
      this.message=letter;
    }
   
   
  }*/
   
    sendMessage(letter:string):void{
      if(letter==='antoniomaestrevargas@gmail.co'){
        alert('Este usuario está registrado')
      }else if(letter==='antoniorosales@gmail.co'){
        alert('Registrandose')
      }else{
        alert('En breve recibirá un correo confirmando su registro')
      }
      
      
      this.emitMessage.emit(this.message);
    }
  }
  



