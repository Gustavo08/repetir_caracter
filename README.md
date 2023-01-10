# Función para repetir un caracter determinado, n cantidad de veces

```js
    function repeat(string, n) {
        let repeatedString = "";
        while (n > 0) {        
            repeatedString += string;
            n--;
        }

        return repeatedString;
    }
```
