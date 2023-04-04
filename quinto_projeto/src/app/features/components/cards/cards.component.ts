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
  {
    imagem: "https://m.media-amazon.com/images/I/517I6z9QK4L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    sinopse: "kkwkwwkwk",
    preco : 4000},
    {
    imagem: "https://m.media-amazon.com/images/I/41qeEtBu02L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    sinopse: "kkwkwwkwk",
    preco : 4000},
    {
    imagem: "",
    sinopse: "kkwkwwkwk",
    preco : 4000},
    {
    imagem: "",
    sinopse: "kkwkwwkwk",
    preco : 4000},
    {
    imagem: "",
    sinopse: "kkwkwwkwk",
    preco : 4000},
    {
    imagem: "",
    sinopse: "kkwkwwkwk",
    preco : 4000},
    {
    imagem: "",
    sinopse: "kkwkwwkwk",
    preco : 4000},
    {
    imagem: "",
    sinopse: "kkwkwwkwk",
    preco : 4000}
  ]
    exibeprodutosim(){
this.exibeProdutos = !this.exibeProdutos;

    } 

}
