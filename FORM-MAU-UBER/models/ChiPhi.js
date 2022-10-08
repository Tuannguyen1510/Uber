function ChiPhi(){
    this.uberX= true;
    this.uberSUV = true;
    this.uberBLACK= true;
    this.soKM ="";
    this.thoigianCho="";
    this.time ="";

    this.ChonXe = function (){
         var ketqua;
          if(this.uberX){
             ketqua = 'uberX';
          }else  if(this.uberSUV){
             ketqua = 'uberSUV';
          }else if(this.uberBLACK){
             ketqua = 'uberBLACK';
          }
          return ketqua;
      }

      this.TinhTien = function (){
        var loaiXe= this.ChonXe();
        var thanhTien = 0;
        switch(loaiXe){
          case 'uberX' :
             if(Number(this.soKM) <= 1){
                thanhTien = Number(this.soKM)* 8000 + Number(this.thoigianCho)*2000;
             }else if(Number(this.soKM) > 1 && Number(this.soKM) <= 20 ){
                thanhTien = Number(this.soKM)* 12000 + Number(this.thoigianCho)*2000;
             }else if(Number(this.soKM) > 20 ){
                thanhTien = Number(this.soKM)* 10000 + Number(this.thoigianCho)*2000;
             } 
          break;
          // uberSUV
          case 'uberSUV' :
             if(Number(this.soKM) <= 1){
                thanhTien = Number(this.soKM)* 9000 + Number(this.thoigianCho)*3000;
             }else if(Number(this.soKM) > 1 && Number(this.soKM) <= 20 ){
                thanhTien =Number(this.soKM)* 14000 + Number(this.thoigianCho)*3000;
             }else if(Number(this.soKM) > 20 ){
                thanhTien = Number(this.soKM)* 12000 + Number(this.thoigianCho)*3000;
             }
          break;
          //uberBLACK
          case 'uberBLACK' :
             if(Number(this.soKM) <= 1){
                thanhTien = Number(this.soKM)* 10000 + Number(this.thoigianCho)*4000;
             }else if(Number(this.soKM) > 1 && Number(this.soKM) <= 20 ){
                thanhTien = Number(this.soKM)* 16000 + Number(this.thoigianCho)*4000;
             }else if(Number(this.soKM) > 20 ){
                thanhTien = Number(this.soKM)* 14000 + Number(this.thoigianCho)*4000;
             }
          break;
        }
        return thanhTien;
     }
}