let soma = require ("./arquivo")

console.log(soma.teste(10,1))


const fs = require("fs")

let leitura = fs.readFileSync("./datamodulo.csv", {
    encoding : "utf-8"
})

let format = leitura.split('\r\n')


console.log(format)

let readlineSync = require("readline-sync");
let coluna = readlineSync.questionInt("Digite a coluna: ");
for (let i=0 ; format > format.length ; i++){
    console.log(format.split(",",)[])
}
