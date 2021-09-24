const log = document.getElementById('first_name');
console.log(e.target.value);
console.log(log);

if(log){
    input.addEventListener('input',newValue);
}

function newValue(e){
    log.textcontent = e.target.value;
    alert(e.target.value);
}
/*
$('.hey').on('click', function(){
    newValue(e);
})*/