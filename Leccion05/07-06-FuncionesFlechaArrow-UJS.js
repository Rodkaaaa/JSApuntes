//Declaración Función de tipo Expresión
let sumar = function (a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);

const sumarFuncionTipoFlecha = (a, b) => a + b;//la flecha omite la funcion
resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);