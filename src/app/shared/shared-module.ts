import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from 'src/app/components/input/input.component';
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../components/button/button.component';
import { Storage } from '../services/storage'; 

const modules = [IonicModule, ReactiveFormsModule, FormsModule];
const components = [InputComponent,ButtonComponent ]
@NgModule({
  declarations: [components],
  providers: [Storage, ],
  imports: [
    CommonModule,
    modules,
],
  exports:[
    components, components
  ]}
)
export class SharedModule { }