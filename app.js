
let output=document.getElementById("input")

function show(num){
     output.value+=num
}
function equals(){
    try{
        output.value=eval(output.value)
    }
    catch{
        output.value="error!"
    }
}
function del(){
    output.value=output.value.slice(0,-1)
}

function clr(){
    output.value=""
}

