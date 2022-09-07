
// funcion con parametros

function hello(name) {
    return 'hola ' + name    
}
console.log(hello('derian'));

// funcion con parametros dobles

function add(x, y){
    return x * y
}
console.log(add(4,4))

// funcion doble

function saludar ( ) {
    return function ( ) {
        return ' hola mundo '
    }
}
console.log ( saludar ( ) ( ) )
