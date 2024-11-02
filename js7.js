function cong(){
    var a=parseFloat(document.getElementById('soa').value);
    var b=parseFloat(document.getElementById('sob').value);
    var c=a+b;
    console.log(c);
    document.getElementById("kq").value=c;
}
function tru(){
    var a=parseFloat(document.getElementById('soa').value);
    var b=parseFloat(document.getElementById('sob').value);
    var c=a-b;
    console.log(c);
    document.getElementById("kq").value=c;
}
function nhan(){
    var a=parseFloat(document.getElementById('soa').value);
    var b=parseFloat(document.getElementById('sob').value);
    var c=a*b;
    console.log(c);
    document.getElementById("kq").value=c;
}
function chia(){
    var a=parseFloat(document.getElementById('soa').value);
    var b=parseFloat(document.getElementById('sob').value);
    if(b==0){
        c=0;
    } else{
        var c=a/b;
    }

    console.log(c);
    document.getElementById("kq").value=c;
}