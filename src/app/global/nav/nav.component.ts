import { Component, Input, OnInit,Output } from '@angular/core';
import { Nav } from 'src/app/models/formulario';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
@Input() public nav!:Nav;
public message: string = '';

 
  constructor() { }

  ngOnInit(): void {
   
  }

}
