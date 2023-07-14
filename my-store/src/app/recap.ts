// Tipado

const username: string = 'jefer';
const username1: string | number = 1;

const suma = (a: number, b: number): number=>{
    return a + b;
}

suma(1,2);


class Person {
    // private age: number;   se puede declarar variables privadas que solo las instancias creadas apartir de la clase pueden acceder a ella
    age: number;
    lastName: string;

    constructor(age: number, lastName: string){
        this.age = age;
        this.lastName = lastName;
    }
}

const jefer = new Person(15, 'Delgado');

jefer.age;


// esto es lo mismo que Person sino que mas simple, se declaran las variables y ademas se crea el metodo constructor
class Person2 {
    constructor (public age: number, public lastName: string){}
}

const jefer2 = new Person2(15, 'Delgado');

jefer2.age;