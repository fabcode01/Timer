//Valores do temporizador
var hour = document.querySelector('.hour')
var min = document.querySelector('.minutes')
var sec = document.querySelector('.seconds')

//Botoes add
var btnAddH = document.querySelector('.addTimeH')
var btnAddM = document.querySelector('.addTimeM')
var btnAddS = document.querySelector('.addTimeS')

//Botoes remover

var btnOutH = document.querySelector('.outTimeH')
var btnOutM = document.querySelector('.outTimeM')
var btnOutS = document.querySelector('.outTimeS')

//Botoes Controle

var btnStart = document.querySelector('#AcStart')

var btnClear = document.querySelector('#AcZero')

var btnStop = document.querySelector('#AcStop')





//Botoes Segurar e ADICIONAR MOUSE

var interval
btnAddH.addEventListener('mousedown',function(){
    interval = setInterval(function(){
        addRemove('hour','add')
    }, 50)
})
btnAddH.addEventListener('mouseup',function(){clearInterval(interval)})

//-------------------------------------

btnAddM.addEventListener('mousedown',function(){
    interval = setInterval(function(){
        addRemove('min','add')
    }, 50)
})
btnAddM.addEventListener('mouseup',function(){clearInterval(interval)})

//-------------------------------------

btnAddS.addEventListener('mousedown',function(){
    interval = setInterval(function(){
        addRemove('sec','add')
    }, 50)
})
btnAddS.addEventListener('mouseup',function(){clearInterval(interval)})

//Botoes Segurar e REMOVER MOUSE

btnOutH.addEventListener('mousedown',function(){
    interval = setInterval(function(){
        addRemove('hour','out')
    }, 50)
})
btnOutH.addEventListener('mouseup',function(){clearInterval(interval)})

//==========================================================

btnOutM.addEventListener('mousedown',function(){
    interval = setInterval(function(){
        addRemove('min','out')
    }, 50)
})
btnOutM.addEventListener('mouseup',function(){clearInterval(interval)})

//-----------------------------------------------------------

btnOutS.addEventListener('mousedown',function(){
    interval = setInterval(function(){
        addRemove('sec','out')
    }, 50)
})
btnOutS.addEventListener('mouseup',function(){clearInterval(interval)})



//Botoes Segurar e adicionar TOUCH

var interval
btnAddH.addEventListener('touchstart',function(){
    interval = setInterval(function(){
        addRemove('hour','add')
    }, 50)
})
btnAddH.addEventListener('touchend',function(){clearInterval(interval)})

//----------------------------------------------------

btnAddM.addEventListener('touchstart',function(){
    interval = setInterval(function(){
        addRemove('min','add')
    }, 50)
})
btnAddM.addEventListener('touchend',function(){clearInterval(interval)})

//---------------------------------------------------

btnAddS.addEventListener('touchstart',function(){
    interval = setInterval(function(){
        addRemove('sec','add')
    }, 50)
})
btnAddS.addEventListener('touchend',function(){clearInterval(interval)})

//BOTOES SEGURAR E REMOVER TOUCH

btnOutH.addEventListener('touchstart',function(){
    interval = setInterval(function(){
        addRemove('hour','out')
    }, 50)
})
btnOutH.addEventListener('touchend',function(){clearInterval(interval)})

//---------------------------------------------------

btnOutM.addEventListener('touchstart',function(){
    interval = setInterval(function(){
        addRemove('min','out')
    }, 50)
})
btnOutM.addEventListener('touchend',function(){clearInterval(interval)})

//---------------------------------------------------

btnOutS.addEventListener('touchstart',function(){
    interval = setInterval(function(){
        addRemove('sec','out')
    }, 50)
})
btnOutS.addEventListener('touchend',function(){clearInterval(interval)})



// Eventos de controle

btnStart.addEventListener('click', function(){
    start()
})


btnClear.addEventListener('click', function(){
    TClear()
})


btnStop.addEventListener('click',function(){
    TStop()
})

//Link


document.getElementById('github').addEventListener('click', function(){
    window.open('https://github.com/fabcode01', '_blank')
})











//Funcao p/ adicionar tempo

function addRemove(local, acao){

   
    if(Number(min.innerHTML) >= 59 && Number(hour.innerHTML) < 99){
        hour.innerHTML ++
        min.innerHTML = 0
    }

    if(Number(sec.innerHTML) >= 59){
        min.innerHTML ++
        sec.innerHTML = 0
    }


    if (local === 'hour' && acao === 'add' && Number(hour.innerHTML) < 99){
       hour.innerHTML ++
        
    }

     else if (local === 'min' && acao === 'add'){
        min.innerHTML ++
    } 

     else if(local === 'sec' && acao === 'add'){
        sec.innerHTML ++
    }

     else if(local === 'hour' && acao === 'out' && Number(hour.innerHTML) > 0){
        hour.innerHTML --
    } 
    
     else if(local === 'min' && acao === 'out' && Number(min.innerHTML) > 0){
        min.innerHTML --
    }

     else if(local === 'sec' && acao === 'out' && Number(sec.innerHTML) > 0){
        sec.innerHTML --
    }


}


//Zerar

function TClear(){
    sec.innerHTML = 0
    min.innerHTML = 0
    hour.innerHTML = 0
}



//Temporizador
var intervalo



function start(){
    
    

    

    
    
   

 intervalo = setInterval(function(){
        
    Sec()
}, 1000)
    
}

function Sec(){

    if (Number(sec.innerHTML) == 0 && Number(min.innerHTML) == 0 && Number(hour.innerHTML) == 0){
        document.getElementById('addDiv').style.display = 'flex'
        document.getElementById('outDiv').style.display = 'flex'
        document.getElementById('AcStart').style.display = 'flex'
        document.getElementById('AcZero').style.display = 'flex'
        document.getElementById('AcStop').style.backgroundColor = '#3a8a3a'
    }

    

    if (Number(sec.innerHTML) == 0 && Number(min.innerHTML) == 0 && Number(hour.innerHTML) == 0){
        clearInterval(intervalo)
    }
    

    if (Number(sec.innerHTML) > 0 ){

        
        sec.innerHTML --
        document.getElementById('addDiv').style.display = 'none'
        document.getElementById('outDiv').style.display = 'none'
        document.getElementById('AcStart').style.display = 'none'
        document.getElementById('AcZero').style.display = 'none'
        document.getElementById('AcStop').style.backgroundColor = 'red'

        
    }


    if(Number(sec.innerHTML) === 0 && Number(min.innerHTML) > 0){
       
       min.innerHTML --
       sec.innerHTML = 59

       
        document.getElementById('addDiv').style.display = 'none'
        document.getElementById('outDiv').style.display = 'none'
        document.getElementById('AcStart').style.display = 'none'
        document.getElementById('AcZero').style.display = 'none'
        document.getElementById('AcStop').style.backgroundColor = 'red'
    
    }

    if(Number(min.innerHTML) === 0 && Number(hour.innerHTML) > 0){
        sec.innerHTML = 59
        min.innerHTML = 59
        hour.innerHTML --

        document.getElementById('addDiv').style.display = 'none'
        document.getElementById('outDiv').style.display = 'none'
        document.getElementById('AcStart').style.display = 'none'
        document.getElementById('AcZero').style.display = 'none'
        document.getElementById('AcStop').style.backgroundColor = 'red'
    }

   
}

function TStop(){
        clearInterval(intervalo)
    
        document.getElementById('addDiv').style.display = 'flex'
        document.getElementById('outDiv').style.display = 'flex'
        document.getElementById('AcStart').style.display = 'flex'
        document.getElementById('AcZero').style.display = 'flex'
        document.getElementById('AcStop').style.backgroundColor = '#3a8a3a'
        


}


    
    

 





