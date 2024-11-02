function input1(value){
    document.getElementById('result').value += value;
}
function del1(){
    document.getElementById('result').value = '';
}
function calculate(){
    var a=eval(document.getElementById('result').value);
    console.log(a);
    document.getElementById('result').value = a;

}