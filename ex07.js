let pessoa1 = {
    name : 'Vinicius',
    age : 23,
    height : 1.76
};

let pessoa2 = {
    name : 'Rodrygo',
    age : 23,
    height : 1.74
};

if(pessoa1.name === pessoa2.name){
    console.log('Eles tem o mesmo nome');
}
else{
    console.log('Possuem nomes diferentes');
}

if(pessoa1.age == pessoa2.age){
    console.log('Possuem a mesma idade');
}
else{
    console.log('Possuem idades diferentes');
}

if(pessoa1.height > pessoa2.height){
    console.log(`${pessoa1.name} é mais alto por ${pessoa1.height - pessoa2.height.toFixed(2)}Cm`);
}
else{
    console.log(`${pessoa2.name} é mais alto por ${pessoa2.height - pessoa1.height.toFixed(2)}Cm`);
}