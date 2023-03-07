import { Negociacao } from "./models/negociacao.ts"

const negociacao = new Negociacao(new Date(), 10, 100);

console.log('11 >',negociacao.quantidade);

// negociacao.quantidade =  1000;
console.log('22 >',negociacao.volume);