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
    sinopse: "Um guia ilustrado para programadores e outros curiosos. Um algoritmo nada mais é do que um procedimento passo a passo para a resolução de um problema.",
  preco : 65.30,
   disponivel: false},
    {
    imagem: "https://m.media-amazon.com/images/I/41qeEtBu02L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    sinopse: "Os conceitos básicos de programação, como expressões, variáveis, repetições, decisões, listas, dicionários, conjuntos, funções, arquivos, classes, objetos e banco de dados com SQLite",
    preco : 62.10,
     disponivel: true},
    {
    imagem: "https://m.media-amazon.com/images/I/51uKR6J3cBL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    sinopse: "o livro procura tornar prática a lógica de programação, além de mostrar aos estudantes um caminho mais adequado na construção dos algoritmos.",
    preco : 51,
    disponivel: true},
    {
    imagem: "https://m.media-amazon.com/images/I/51esGT9hveL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    sinopse: " fornece uma introdução clara, simples, envolvente e divertida à programação Java com ênfase inicial em objetos",
    preco :350,
    disponivel: false},
    {
    imagem: "https://m.media-amazon.com/images/I/51lMsgv7s8L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    sinopse: "O livro Fundamentos de HTML5 e CSS3 tem o objetivo de fornecer aos iniciantes e estudantes da área de desenvolvimento web conceitos básicos e fundamentos da marcação HTML e estilização CSS.",
    preco : 57,
     disponivel: true},
    {
    imagem: "https://m.media-amazon.com/images/I/51hz78A5x8L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    sinopse: "Referência na área, Fundamentos da programação de computadores: algoritmos, PASCAL, C/C++ (padrão ANSI) e JAVA traz em sua nova edição muitas novidades.",
    preco : 150,
     disponivel: false},
    {
    imagem: "https://m.media-amazon.com/images/I/41WQNOs8j5L._SY346_.jpg",
    sinopse: "Você será guiado por este caminho pelo qual conhecerá as possibilidades da área de desenvolvimento de software, sendo entregue com a inspiração e as melhores dicas para mergulhar neste universo.",
    preco : 41,
     disponivel: true,},
    
    {
    imagem: "https://m.media-amazon.com/images/I/51fqiJy+VgL._SY344_BO1,204,203,200_.jpg",
    sinopse: "Este livro oferece conteúdo abrangente e plenamente compatível para ser utilizado como material didático em disciplinas introdutórias de programação, seja no ensino médio, cursos técnicos, universidades ou mesmo em cursos de curta duração.",
    preco : 70,
     disponivel: true},
  ]
    exibeprodutosim(){
this.exibeProdutos = !this.exibeProdutos;

    } 

}
