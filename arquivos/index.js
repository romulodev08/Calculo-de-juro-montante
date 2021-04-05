var capital = document.getElementById('c')
var taxa = document.getElementById('i')
var tempo = document.getElementById('t')
var juro = document.getElementById('j')
var montante = document.getElementById('m')
var resultado = document.getElementById('resultado')
function calcular(){
    var c = Number(capital.value)
    var i = Number(taxa.value)
    var t = Number(tempo.value)
    var j = Number(juro.value)
    var m = Number(montante.value)             
    if(i == 0 && j == 0 && c != 0 && t != 0 && m != 0){
        j = m - c
        i = j / (c * t /100)
        resultado.innerHTML= `Taxa ${i.toFixed(2)}% <br/>Juro: R$${j.toFixed(2)}`.replace('.',',').replace('.',',')
    }else if(t == 0 && j == 0 && c != 0 && i != 0 && m != 0){
        j = m - c
        t = j / (c * i /100)
        resultado.innerHTML= `Tempo: ${t.toFixed(0)} <br/>Juro: R$${j.toFixed(2)}`.replace('.',',').replace('.',',')
    }else if(j == 0 && c !=0 && i !=0 && t !=0){
        j = c * i * t /100
        m = j + c
        resultado.innerHTML= `Juro: R$${j.toFixed(2)} <br/>Montante: R$${m.toFixed(2)}`.replace('.',',').replace('.',',')
    }else if(c == 0 && j !=0 && i !=0 && t !=0){
        c = j / (t * i /100)
        m = j + c
        resultado.innerHTML= `Capital: R$${c.toFixed(2)} <br/>Montante: R$${m.toFixed(2)}`.replace('.',',').replace('.',',')
    }else if(i == 0 && j !=0 && c !=0 && t !=0){
        i = j / (c * t /100)
        m = j + c
        resultado.innerHTML=`Taxa: ${i.toFixed(2)}% <br/>Montante: R$${m.toFixed(2)}`.replace('.',',').replace('.',',')
    }else if(t == 0 && j !=0 && c !=0 && i !=0){
        t = j / (c * i /100)
        m = j + c
        resultado.innerHTML= `Tempo: ${t.toFixed(2)} <br/>Montante: R$${m.toFixed(2)}`.replace('.',',').replace('.',',')
    }
}