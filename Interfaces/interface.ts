interface Usuario {
    nombreUsuario:string;
    passwd:string;
    confrimPasswd?:string;
}
let usuario:Usuario = {nombreUsuario:"Jhonatan",passwd:"mipass"};
console.log(usuario);

interface Abordar{
    abordarTransporte():void;
}
let avion:Abordar ={
    abordarTransporte: function(){
        console.log("interface prueba con metodo");
    }
}
avion.abordarTransporte();