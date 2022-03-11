// Codigo del Cuadrado
console.group("Cuadrado")


function perimetroCuadrado(lado){
    return lado * 4;
}


function areaCuadrado(lado) {
    return lado * lado
}


console.groupEnd();

// Codigo del Triangulo
console.group("Triangulos");


function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
}

function areaTriangulo(base, altura) {
return (Number(base) * Number(altura)) / 2;

} 

function hypotenusa(lado1, base) {
    return (Math.sqrt((lado1 * lado1) + ((base / 2) * (base / 2))))
}


console.groupEnd();

// Codigo del Circulo
console.group("Circulos");


// Diametro

function diametroCirculo(radio) {
    return radio * 2;
}



// Pi
const PI = Math.PI;


//Circunferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}



// Area

function areaCirculo(radio) {
    return (radio * radio) * PI
}




console.groupEnd();

// conectando con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}

// triangulo

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("lado1");
    const value1 = lado1.value;
    const lado2 = document.getElementById("lado2");
    const value2 = lado2.value;
    const base = document.getElementById("base");
    const value3 = base.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const lado1 = document.getElementById("lado1");
    const value1 = lado1.value;
    const base = document.getElementById("base")
    const value3 = base.value;

    const altura = hypotenusa(value1, value3)

    const area = areaTriangulo(value3, altura);
    alert(area);

    console.log(altura);
    console.log(area);
    

}

//circulo

