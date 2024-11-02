function update(){
    var a = parseFloat(document.getElementById('sl').value);
    var b = parseFloat(document.getElementById('price').textContent);
    var c =a*b;
    document.getElementById('gia').innerHTML =c;

    var a1 = parseFloat(document.getElementById('sl1').value);
    var b1 = parseFloat(document.getElementById('price1').textContent);
    var c1 =a1*b1;
    document.getElementById('gia1').innerHTML =c1;
    var Tong =c+c1;
    document.getElementById('tongtien').value=Tong;
}

function mua(){
    document.getElementById('sp1').innerHTML=`
                    <tr>
                        <td class="daux" onclick="xoa()">✖</td>
                        <td>
                            <img src="images/312051553_3195731920685758_2796978630271241540_n-e1720845005261.jpg" class="img1" alt="">
                        </td>
                        <td>San pham 1</td>
                        <td>
                            <input type="number" value="1" min="1" class="in1" onchange="update()" id="sl">
                        </td>
                        <td id="price">
                            30000
                        </td>
                        <td class="tt" >
                            <input type="text" value="30000" onchange="update()" id="gia" class="in2">
                        </td>
                    </tr>`
}
function xoa(){
    document.getElementById('sp1').innerHTML='';
}
