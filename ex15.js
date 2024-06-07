const notas = [4.0, 1.0, 5.8, 5.0, 2.2, 10.0];

let cont = notas.length, soma = 0, media = 0, tot = 0;

for(let i = 0; i < cont; i++){
    soma += notas[i];
    tot++;
}

console.log(`Média: ${soma/tot}`);