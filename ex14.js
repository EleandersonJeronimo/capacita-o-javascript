let num = 9, tentativa = 0, chute;


do{
    chute = Math.floor(Math.random() * 20);
    tentativa++;
}while(chute != num)

console.log(`O número foi sorteado em ${tentativa} tentativas`);