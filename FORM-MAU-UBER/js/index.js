var divThanhTien = document.querySelector('#divThanhTien');
divThanhTien.style.display = 'block';
var arrChiPhi = [];
document.querySelector("#tinhTien").onclick = function () {
   var cp = new ChiPhi();
   cp.uberX = document.querySelector('#uberX').checked;
   cp.uberSUV = document.querySelector('#uberSUV').checked;
   cp.uberBLACK = document.querySelector('#uberBlack').checked;
   cp.soKM = document.querySelector('#numberKM').value;
   cp.thoigianCho = document.querySelector('#numberTime').value;

   //Yêu cầu nhập đủ thông tin
   if (cp.uberX == false && cp.uberBLACK == false && cp.uberSUV == false) {
      alert("Yêu cầu chọn loại xe!")
   } if (cp.soKM == "" || cp.thoigianCho == "") {
      alert("Yêu cầu nhập đủ thông tin!");
   } else {
      // Tinh tiền
      var sum = cp.TinhTien();
      document.querySelector('#xuatTien').innerHTML = sum;
      // Render ra modal
      arrChiPhi.push(cp);
      renderChiPhi(arrChiPhi);
   }
}

document.querySelector("#inHoaDon").onclick = function () {
   var cp = new ChiPhi();
   cp.uberX = document.querySelector('#uberX').checked;
   cp.uberSUV = document.querySelector('#uberSUV').checked;
   cp.uberBLACK = document.querySelector('#uberBlack').checked;
   cp.soKM = document.querySelector('#numberKM').value;
   cp.thoigianCho = document.querySelector('#numberTime').value;
   // renderChiPhi(arrChiPhi);
}
/**
 * 
 * @param {*} arrChiPhi 
 */
function renderChiPhi(arrChiPhi) {
   var content = "";
   for (var i = 0; i < arrChiPhi.length; i++) {
      var index = arrChiPhi[i];
      content += `
            <tr class="bg-secondary text-white">
                 <td>${index.ChonXe()}</td>
                 <td>${index.soKM}</td>
                 <td>${index.thoigianCho}</td>
                <td>${index.TinhTien()}</td>
            </tr>
      `
   }
   document.querySelector('#tblChiPhi').innerHTML = content;
}











