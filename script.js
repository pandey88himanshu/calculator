let input = document.getElementById("textBox");
let buttons = document.querySelectorAll("button");
let output = "";
let array = Array.from(buttons);
array.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            output = eval(output);
            input.value=output;
        }
        else if(e.target.innerHTML == 'AC'){
            output = "";
            input.value = output;
        }
        else if(e.target.innerHTML == 'DEL'){
            output = output.substring(0,output.length-1);
            input.value=output;
        }
        else{
            output += e.target.innerHTML;
            input.value = output;
        }
    })
})
let icon = document.getElementById("icon");
icon.addEventListener('click',()=>{
    if(icon.classList.contains('fa-sun')){
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    document.body.classList.add('darkMode');
}
else{
    icon.classList.add('fa-sun')
    icon.classList.remove('fa-moon')
    document.body.classList.remove('darkMode');
}
})

