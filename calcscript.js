let res= document.getElementById('inputBox');
console.log(res);

function addvalue(value){
    res.value +=value;
}
function calc(){
    res.value=eval(res.value);

}
function del(){
    res.value=res.value.slice(0,-1);
}
function clearres(){
    res.value = '';
}

