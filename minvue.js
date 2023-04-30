//constructor de clase para los campos reactivos
class MinvueReactive{
    constructor(options){
    this.origen = options.data();
    }

    //mount() se encarga de pintar todo en el documento, mediante el querySlectorAll (recuerden que aquí funcionan los selectores de CSS) es como seleccionamos a todos los elementos que tengan 
    //el atributo m-text, en CSS al poner algo entre corchetes hace referencia 
    //a que va a seleccionar por atributos, por eso encerramos entre corchetes 
    //el [m-text], el asterisco es para decir que puede ser cualquier etiqueta,
    // aunque realmente podríamos prescindir de él.
    //con getAttribute obtenemos el valor de dicho atributo, y el valor de ese 
    //atributo va a ser el nombre de la propiedad que esté dentro del objeto 
    //que retorna data() porque es el valor que queremos enlazar. 
    //Simplemente con el innerText metemos ese nombre.
    mount(){
        document.querySelectorAll("*[m-text]").forEach(el=>{
            this.mText(el,this.origen,el.getAttribute("m-text"))
        })
    }


    mText(el,target,name){
        el.innerText = target[name];
    }

    pModel(){}
}

// se crea un objeto que va a retornar todos los métodos que necesitamos de nuestro mini framework, mediante el destructuring de JavaScript, en el index.html, estamos llamando al método createApp(), dicho método está dentro del objeto Minivue (Por eso usamos el destructuring al importar la fucnión en el index.html)
var Minvue = {
    createApp(options){
        return new MinvueReactive(options);
    }
}