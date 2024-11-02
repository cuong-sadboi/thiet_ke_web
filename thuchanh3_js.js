
function update1() {
    var a1 = parseFloat(document.getElementById('sl').value); 
    var b1 = parseFloat(document.getElementById('price').textContent.replace('$', '').trim()); 
    var c1 = a1 * b1;
    document.getElementById('tongtien').textContent = `$ ${c1.toFixed(2)}`;

    var a2 = parseFloat(document.getElementById('sl1').value); 
    var b2 = parseFloat(document.getElementById('price1').textContent.replace('$', '').trim()); 
    var c2 = a2 * b2;
    document.getElementById('tongtien1').textContent = `$ ${c2.toFixed(2)}`;

    var tong;
    if (isNaN(c1) && isNaN(c2)) {
        tong = 0;
    } else if ( isNaN(c1)) {
        tong = c2 / 2;
    } else if (isNaN(c2)) {
        tong = c1 / 2; 
    } else {
        tong = (c1 + c2) / 2;
    }

    document.getElementById('tongtientk').textContent = `$ ${tong.toFixed(2)}`;
}



function them1() {
    document.getElementById("Macbook 2").innerHTML = `
                <tr>
                    <td>macbook 2</td>
                    <td  id="price">$ 2300</td>
                    <td> <img src="images/giày-nam-e1720844745768.jpg" alt=""> </td>
                    <td> <input type="number" value="1" min="1" class="in1" onchange="update1()" id="sl"> 
                        <div class="daux" onclick="xoa1()">✖</div>
                    </td>
                    <th id="tongtien">$ 2300</th>
                </tr>
       `;
  }
  function them2() {
    document.getElementById("Dell Inspiron").innerHTML = `
                <tr>
                    <td>Dell Inspiron</td>
                    <td  id="price1">$ 1300</td>
                    <td> <img src="images/giày-nam-e1720844745768.jpg" alt=""> </td>
                    <td> <input type="number" value="1" min="1" class="in1" onchange="update1()" id="sl1"> 
                        <div class="daux" onclick="xoa2()">✖</div>
                    </td>
                    <th id="tongtien1">$ 1300</th>
                </tr>
       `;
  }
function xoa1(){
    document.getElementById('Macbook 2').innerHTML='';
}
function xoa2(){
    document.getElementById('Dell Inspiron').innerHTML='';
}