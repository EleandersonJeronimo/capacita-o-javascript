const materias = ['Algoritmos e programação 2', 'Calculo A', 'Programação Web', 'Economia', 'Organização e arquitetura de computadores', 'Engenharia de software 2'];

const notas = [null, 1.0, 5.8, 5.0, 2.2, 10.0]

let cont = materias.length

for(let c = 0; c < cont; c++){
    console.log(`${materias[c]} = ${notas[c]}`)
}