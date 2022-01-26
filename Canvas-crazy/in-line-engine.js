   let inter;
   let ini = document.getElementById("ini");
    let stop = document.getElementById("stop");

    let canvs = document.getElementById("canvas");
let w = canvs.width = 620
let h = canvs.height = 510


    let x= 20  ,y = 20, x2=0, y2=0;
    let context = canvs.getContext('2d');
    

      ini.addEventListener("click", iniciar)
      stop.addEventListener("click",parar)

function DesenhoInteligente(){  
    
        if((x>x2) && (x!=w) &&(y!=h)){ //>>>direita

            if(y2>y)as3Horas();

            else as5Horas();
        
     
        }
        else if((x<x2) && (x!=w) &&(y!=h)) { //esquerda
            if(y2>y)as10Horas();

            else as7horas();
        }
        if(y<=0)
            quina12horas()
        else if(x<=0)
            quina9horas();
        else if(y>=h){
            quina6horas();
        }
        else if(x>=w)
            quina4horas();




}
   
    function as3Horas() {

        //as 3horas
        x2 = x; y2 = y; 
            x+=20; y-=20;            
        context.moveTo(x2, y2);
        context.lineTo(x, y);
        context.strokeStyle='#ff69b4';
        context.stroke();
        
    }

    function as5Horas() {

        //as 5horas
        x2 = x; y2 = y; 
            x+=20; y+=20;
        context.moveTo(x2, y2);
        context.lineTo(x, y);
        context.strokeStyle='#f36374'
        context.stroke();
    }

    function as10Horas() {
        //as10horas
        x2 = x; y2 = y; 
            x-=20; y-=20;
        context.moveTo(x2, y2);
        context.lineTo(x, y);
        context.strokeStyle='#e9afcc';
        context.stroke();
    }

    function as7horas() {
        //as7horas
        x2 = x; y2 = y; 
            x-=20; y+=20;
        context.moveTo(x2, y2);
        context.lineTo(x, y);
        context.strokeStyle ='#8e7cc3'
        context.stroke();
        
    }

    function quina12horas() {
        
        
        {//direita
            if(x>x2)
                as5Horas();
         //esquerda
            else 
                as7horas();
        }
    }
    function quina9horas() {
        {//cima
            if(y2>y)
                as3Horas();
        //baixo
            else 
                as5Horas();
        }
    }
    function quina6horas() {
          {//direita
            if(x>x2)
                as3Horas();
           //esquerda
            else 
                as10Horas();
        }
    }
    function quina4horas() {
        {//cima
            if(y2>y) 
                as10Horas();
            else 
                as7horas();
            
        }
    }

    function parar(){

        context.clearRect(0, 0, canvs.width, canvs.height);
       clearInterval(inter);
        x= 20, y = 20, x2=0, y2=0;
    }

    function iniciar(){
        inter = setInterval(DesenhoInteligente, 40);
        
        DesenhoInteligente();
    }