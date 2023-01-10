function repeat(string, n) {
    let repeatedString = ""; // variable para almacenar los caracteres
    while (n > 0) {
        /*
            Mientras el número de veces que se va repetir el caracter sea mayor a 0
            entrará en el ciclo.
        */
      repeatedString += string; // concatenamos cada uno de los caracteres
      n--; // disminumos el número de veces que se repetira, para que llegue a 0
    }

    return repeatedString; // retornamos el string
}

let response = repeat("&", 6);

console.log("==== response ====");
console.log(response);