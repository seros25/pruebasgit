function convertirbinarioaoctal(numero){
    var octal = "";
    var resto = 0;
    var contador = 0;
    while(numero > 0){
        resto = numero % 8;
        octal = resto + octal;
        numero = Math.trunc(numero / 8);
    }
    return octal;
}
function convertiraoctalabinario(numero){
    var binario = "";
    var resto = 0;
    var contador = 0;
    while(numero > 0){
        resto = numero % 2;
        binario = resto + binario;
        numero = Math.trunc(numero / 2);
    }
    return binario;
}   
console.log(convertirbinarioaoctal(100));
console.log(convertiraoctalabinario(11));
