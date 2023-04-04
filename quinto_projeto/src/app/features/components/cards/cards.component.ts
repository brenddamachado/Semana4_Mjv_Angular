import { Component } from '@angular/core';
import { card } from './models/produtos.modulos';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
titulo = "Novidades";

exibeProdutos = false;

produtos: Array<card> =[
  {nome: "codigo",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9JbWkre6l4qrZhYdoSw9jrJLGxQ9S9HC6PRXs-Zg&s",
    sinopse: "kkwkwwkwk",
    preco : 4000},
    {nome: "codigo",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9JbWkre6l4qrZhYdoSw9jrJLGxQ9S9HC6PRXs-Zg&s",
    sinopse: "kkwkwwkwk",
    preco : 4000},
    {nome: "codigo",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9JbWkre6l4qrZhYdoSw9jrJLGxQ9S9HC6PRXs-Zg&s",
    sinopse: "kkwkwwkwk",
    preco : 4000},
    {nome: "codigo",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9JbWkre6l4qrZhYdoSw9jrJLGxQ9S9HC6PRXs-Zg&s",
    sinopse: "kkwkwwkwk",
    preco : 4000},
  ]
    exibeprodutosim(){
this.exibeProdutos = !this.exibeProdutos;

    } 

}
