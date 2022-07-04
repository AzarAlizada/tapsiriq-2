// let btn = document.getElementById ("btn")
// btn.onclick

let btn = document.getElementById("btn");

function goster(){
    let inp = document.getElementById("pass");
    
    if(inp.type == "password"){
        inp.type = 'text';
        btn.textContent = 'Gizle';
        btn.className = 'btn btn-danger'
    }
    else{
        inp.type = 'password';
        btn.textContent = 'Goster'
        btn.className = 'btn btn-success'
    }
}

function check(){
    let text = document.getElementById('text');
    if(inp.value.length > 8 ){
        text.innerHTML = 'Gucludur';
        else{
            text.innerHTML = 'Zeifdir';
        }
    }

}