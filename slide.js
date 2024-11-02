var img=[];
img[1] = 'images/Desktop_Homepage_Banner01.jpg';
img[2] = 'images/312051553_3195731920685758_2796978630271241540_n-e1720845005261.jpg';
img[3] = 'images/Banner_Sale-off-1.jpg';
function next(){
    var a = document.getElementById('img1').getAttribute('src');
    if(a==img[1]){
        a=document.getElementById('img1').setAttribute('src',img[2]);
    } else if(a==img[2]){
        document.getElementById('img1').setAttribute('src',img[3]);
    }else{
        document.getElementById('img1').setAttribute('src',img[1]);
    }
}
function prev(){
    var a = document.getElementById('img1').getAttribute('src');
    if(a==img[1]){
        a=document.getElementById('img1').setAttribute('src',img[3]);
    } else if(a==img[3]){
        document.getElementById('img1').setAttribute('src',img[2]);
    }else{
        document.getElementById('img1').setAttribute('src',img[1]);
    }
}
setInterval(auto,5000);
function auto(){
    var a = document.getElementById('img1').getAttribute('src');
    if(a==img[1]){
        a=document.getElementById('img1').setAttribute('src',img[2]);
    } else if(a==img[2]){
        document.getElementById('img1').setAttribute('src',img[3]);
    }else{
        document.getElementById('img1').setAttribute('src',img[1]);
    }
}