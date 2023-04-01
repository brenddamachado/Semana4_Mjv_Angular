import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { LivrosComponent } from './components/livros/livros.component';



@NgModule({
  declarations: [
    CardsComponent,
    LivrosComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[
    LivrosComponent,
    CardsComponent
  ]
})
export class FeaturesModule { }
