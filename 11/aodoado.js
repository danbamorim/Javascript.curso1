


function aleatorio(...numeros){
   console.log(numeros);   
   const multi = Math.floor(Math.random()* numeros.length);
   console.log("Os numeros gerados são: " + numeros[multi]);
}

aleatorio(1,2,3,4,5,6,7);