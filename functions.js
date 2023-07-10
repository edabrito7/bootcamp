const superheros = [
    {
        name: 'IronMan',
        date: '03/01/1963'
    },
    {
        name: 'SpiderMan',
        date: '03/07/1961'
    },
    {
        name: 'Captain America',
        date: '03/08/1941'
    },
    {
        name: 'Doctor Strange',
        date: '07/20/1963'
    },
    {
        name: 'Shang-Chi',
        date: '12/05/1973'
    }
]

function getSortedSuperheros(heros) {
    return heros.sort((a,b) => new Date(a.date) - new Date(b.date));
}
console.log(getSortedSuperheros(superheros));

function specialLogs(interval) {
    let contador = 1;
    
    function logNum() {
        console.log(contador);
        contador++;
    
        if (contador <= 10) {
        setTimeout(logNum, interval); //Indicó función que se ejecutará después del temporizador y el tiempo del 
        }                             //temporizador
        else{
            process.exit(); //Para que se pueda ingresar el valor del intervalo por teclado
        }                   //y hacer la ejecución correctamente
    }
    return logNum();
}
    
//↓↓ Ejemplo de uso con un intervalo de 2000 milisegundos (2 segundos)
//specialLogs(2000);

console.log("Ingrese valor del intervalo:");

//process.stdin() --> El flujo de entrada estándar, que es una fuente de entrada para el programa en NodeJs
process.stdin.on('data', function(data){ //Utilizo la función on() para escuchar el evento.
    let intervalo = parseInt(data); //Asigno la entrada a una variable
    specialLogs(intervalo); } //Llamó a la función para hacer la impresión
    );