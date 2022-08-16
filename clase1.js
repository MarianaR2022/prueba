console.log(process.argv)
if (process.argv[2] === 'saludar') console.log('HOLA')
console.log('Hola mundo') 
function saludar(nombre, ciudad){
    return "Hola mi nombre es " + nombre + " vivo en " + ciudad;
}
console.log(saludar('Mariana' , 'Rosario'))

let enteros = [11, 6, 22] ;
console.log('La tercer cifra es '+ enteros[2])
console.log('La cantidad de cifras es ' + enteros.length)
console.log('Incluye la cifra 22 ' + enteros.includes(22))

let sum = 0;
for (let i = 0; i < enteros.length; i++) {
    sum += enteros[i];
}
console.log('La suma es '+ sum);
let promedio = sum/enteros.length
console.log('El promedio es '+ promedio)

let functionCallback = (elemento, indice) => {
    console.log(`El elemento en la posición ${indice} es ${elemento}`)
}
enteros.forEach(functionCallback)


