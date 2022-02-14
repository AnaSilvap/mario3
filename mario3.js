function piso(nPiso, altura){
    let texto = "<p>"
    if(nPiso==altura){
        for( let i=0;i<2 * altura-1;i++){
          texto= texto + "#"
        }
      }else{
        nEspIzq= altura-nPiso;
        nEspDer= 2* nPiso-3;
     for(let i=0;i<nEspIzq; i++){
         texto=texto +"&nbsp;"
     }
     if(nPiso==1){
       texto= texto +"#"
     }else{
       texto=texto +"#"
       for(let i=0;i< nEspDer;i++){
         texto=texto + "&nbsp"
       }
       texto=texto + "#"
     }
    }
    texto=texto + "</p>"
     return texto;
  }
   
let nPiso;
do{
    altura = parseInt(prompt("Ingrese un numero de pisos del 1 al 10"))
}
while(altura%1 !=0 || altura > 10 || altura<=0 )
let contenido = ""
for(let i =1; i <=altura; i++){
    contenido = contenido + piso(i, altura)
}
let contenedor = document.querySelector("#contenedor");
contenedor.innerHTML = contenido;