function convertirdecimalabinario(numero){
    var resultado = "";
    while(numero>0){
        var resto = numero%2;
        resultado = resto.toString() + resultado;
        numero = Math.floor(numero/2);
    }
    return resultado;
}
function convertirbinariodecimal(numero){
    var resultado = 0;
    var longitud = numero.length;
    for(var i=0; i<longitud; i++){
        resultado += parseInt(numero.charAt(i))*Math.pow(2,longitud-i-1);
    }
    return resultado;
}
prompt("Ingrese un numero decimal");
var numero = parseInt(prompt("Ingrese un numero decimal"));
var binario = convertirdecimalabinario(numero);
alert("El numero decimal "+numero+" en binario es "+binario);
var decimal = convertirbinariodecimal(binario);
alert("El numero binario "+binario+" en decimal es "+decimal);
