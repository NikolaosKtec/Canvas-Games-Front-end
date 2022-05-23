let button = document.getElementById('send')
//alert(button)
button.addEventListener("click", QuandtChurras)
    
// carne -250gr por pessoa + de 4horas -400
//cerveja -700ml por pessoa + de 4 horas -1050ml
//Refrigerante/agua -500ml por pessoa + de 4 horas -740ml 
//crianças valem por 0,75;


/*function teste(){
    let result = document.getElementById('result')
    let adulto = document.getElementById('adulto').value
    let crianca = document.getElementById('criança').value
    let tempoChurras = document.getElementById('tempoChurras').value
    alert(adulto)

    result.innerText = 'Quantidade necessária para o churrasco: '+
    2+'ml de carveja '+2+'ml de relfri '+0+' gr de carne'
    document.write('<img/>')

}*/

function QuandtChurras(){
    //alert(button)
    const result = document.getElementById('result')
    const adulto = document.getElementById('adulto').value
    const crianca = document.getElementById('criança').value
    const tempoChurras = document.getElementById('tempoChurras').value

    if(tempoChurras<4){
        carne = (adulto*250)+(crianca*187)
        cerveja = (adulto*700)
        refri = (crianca*500)
    }
    if(tempoChurras>=4){
        carne = (adulto*400)+(crianca*300)
        cerveja = (adulto*1050)
        refri = (crianca*740)
    }

    result.innerText = 'Quantidade necessária para o churrasco: '+
    cerveja+'ml de cerveja '+refri+'ml de relfri '+carne+'gr de carne'

    const imgNew =  document.createElement('img')

    result.appendChild(imgNew)
     
     imgNew.setAttribute('src','assets/comida-vinho-e-cerveja-1638385313236_v2_450x337.jpg')
     //imgNew.setAttribute('class','w3-circle')

     imgNew.style = 'max-width:15rem;  display:block; margin: auto;  border: solid aliceblue; margin-top:1rem; border-radius: 6rem;'
    // imgNew.style = 'border-radius: 1rem;'
     result.style = 'margin:1rem'
    }

