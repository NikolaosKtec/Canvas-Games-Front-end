let block = document.getElementsByClassName('block')
let button = document.getElementById('stopButton')
let ini = document.getElementById('ini')

    ini.addEventListener('click',iniF)
    button.addEventListener('click', stopF)

    for( let i=0; i<block.length; i++){
    
        block[i].addEventListener('mouseover', vermelho);
    }
    for( let i=0; i<block.length; i++){
    
        block[i].addEventListener('mouseout', laranja);
    }

    function iniF(){
        for( let i=0; i<block.length; i++){
            block[i].addEventListener('mouseout', laranja);
            block[i].addEventListener('mouseover', vermelho);
        }
    }
    
    function stopF(){
        for( let i=0; i<block.length; i++){
            block[i].removeEventListener('mouseout', laranja);
            block[i].removeEventListener('mouseover', vermelho);
        }
    }
    

    function laranja(u){
        
        u.target.style ='background-color: rgb(200, 70, 0);'  

    }
    
    function vermelho(u){
    
        u.target.style ='background-color: rgb(65,200,0);'

    }   