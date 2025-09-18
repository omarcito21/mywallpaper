import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
type inputType = 'text' | 'number' | 'email' | 'password' ;


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: false,
})
export class InputComponent  implements OnInit{
  @Input() type: inputType = "text" ;
  @Input() label: string = "" ;
  @Input() placeholder: string = "" ;
  @Input() control : FormControl = new FormControl();
  constructor() {}
  
  ngOnInit() {}
  public ontype(Event: any){
    this.control.setValue(Event.target.value);
}

}