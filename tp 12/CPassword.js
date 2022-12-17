class CPassword {
    /*constructor(usuario, clave) {
      this(usuario, clave, 8)
    }*/

    constructor(usuario, clave, longitud) {
      this.usuario = usuario;
      this.clave = clave;
      this.longitud = longitud;
    }

    esFuerte(){
      let min=0;
      let may=0;
      let num=0;
      for(let i=0;i<this.clave.longitud;i++){
        document.write(clave.charCodeAt(i));
        if(clave.charCodeAt(i)>=48 && clave.charCodeAt(i)<=57)
        {
          num++;
        }
        if(clave.charCodeAt(i)>=65 && clave.charCodeAt(i)<=90 || clave.charCodeAt(i)==165)
        {
          may++;
        }
        if(clave.charCodeAt(i)>=97 && clave.charCodeAt(i)<=122 || clave.charCodeAt(i)==164)
        {
          min++;
        }
      }
      if(num>2 && min>3 && may>2){
        return true;
      }else{
        return false;
      }
    }

    

  }


let elemento= document.getElementById("boton");
document.getElementById("boton").addEventListener("click")

function construir()
{
    const clave1 = new CPassword(document.getElementById('1').value, document.getElementById('2').value,document.getElementById('3').value);
    if(clave1.esFuerte()){
      document.write("Es fuerte"); 
    }else{
      document.write("no es fuerte")
    }
}