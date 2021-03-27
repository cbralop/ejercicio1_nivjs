class SerVivo{
    caminar(){
        console.log('Ahora esta caminando: '+this.nombre);
    }
}

class Persona extends SerVivo{
    constructor(nombre){
        super();
        this.nombre = nombre
    }
    moverse(){
        return this.caminar(this.nombre);
    }
}

const humano = new Persona('Juanito');
//humano.moverse();

//----------------------------------------------------------------------

//findIndex
function pFindIndex(num){
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const resultado = arr.findIndex(x => x === num);
    
    return resultado
}
//console.log("El numero se encuentra en:" + pFindIndex(4));

//every
function pEvery(cond){
    const menor = (currentValue) => currentValue > cond;
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const resultado = arr.every(menor);
    
    return resultado;
}
//console.log("resultado: " + pEvery(-1));

//some
function pSome(cond){
    const igual = currentValue => currentValue === cond;
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const resultado = arr.some(igual);

    return resultado;
}
console.log("resultado: " + pSome(5));

//filter
function pFilter(){
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const resultado = arr.filter(par => par % 2 === 0);

    return resultado;
}
//console.log("resultado: " + pFilter());

//map
function pMap(cond){
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const resultado = arr.map(x => x * cond);

    return resultado;
}
//console.log(pMap(2));