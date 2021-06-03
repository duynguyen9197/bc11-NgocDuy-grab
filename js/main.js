/**
 * Đầu vào
 *  - loaiXe
 *  - soKm
 *  - tgCho
 *
 * Xử lý
 *  - function layLoaiXe()
 *      + Dom tới 3 thẻ input của loại xe: radioGrabX, radioGrabSuv, radioGrabBlack
 *      + if(radioGrabX.checked){return "grabX"}
 *      + else if(radioGrabSuv.checked){return "grabSuv"}
 *      + else{return "grabBlack"}
 *  - function tinhTien()
 *      + Dom tới lấy soKm, tgCho từ 2 thẻ input
 *      + Gọi lại hàm layLoaiXe => nhận giá trị loại xe gì?
 *      + switch
 *          case "grabX":
 *
 *          case "grabSuv":
 *
 *          case "grabBlack":
 *
 *  - function tinhKmDau(soKm, giaKmDau):
 *      + return soKm * giaKmDau
 *  - function tinhKmTren1(soKm, giaKmTren1):
 *      + return (soKm - 1) * giaKmTren1;
 *  - function tinhKmTren19(soKm, giaKmTren19);
 *      + return (soKm - 19) * giaKmTren19
 *  - function tinhGiaCho(tgCho, giaCho):
 *      if(tgCgo >= 3) return Math.floor(tgCho / 3) * giaCho
 */
function layLoaiXe() {
  var radioGrabX = document.getElementById("grabX");
  var radioGrabSuv = document.getElementById("grabSUV");
  var radioGrabBlack = document.getElementById("grabBlack");
  if (radioGrabX.checked) {
    return "grabX";
  } else if (radioGrabSuv.checked) {
    return "grabSuv";
  } else {
    return "grabBlack";
  }
}
function tinhTien() {
  var soKm = document.getElementById("Kilomet").value;
  var thoiGianCho = document.getElementById("Time").value;
  var Money = "";
  switch (layLoaiXe) {
    case grabX:
      const giaKmDau = 8000;
      const giaKmTren1 = 7500;
      const giaKmTren19 = 7000;
      const giaCho = 2000;
      if (soKm == 1) {
        Money = tinhKmDau(soKm, giaKmDau) + tinhGiaCho(thoiGianCho, giaCho);
      } else if (soKm > 1 && soKm <= 19) {
        Money = tinhKmTren1(soKm, giaKmTren1) + tinhGiaCho(thoiGianCho, giaCho);
      } else {
        Money =
          tinhKmTren19(soKm, giaKmTren19) + tinhGiaCho(thoiGianCho, giaCho);
      }

      break;
    case grabSuv:
      const giaKmDau = 9000;
      const giaKmTren1 = 8500;
      const giaKmTren19 = 8000;
      const giaCho = 3000;
      if (soKm == 1) {
        Money = tinhKmDau(soKm, giaKmDau) + tinhGiaCho(thoiGianCho, giaCho);
      } else if (soKm > 1 && soKm <= 19) {
        Money = tinhKmTren1(soKm, giaKmTren1) + tinhGiaCho(thoiGianCho, giaCho);
      } else {
        Money =
          tinhKmTren19(soKm, giaKmTren19) + tinhGiaCho(thoiGianCho, giaCho);
      }
      break;
    case grabBlack:
      const giaKmDau = 10000;
      const giaKmTren1 = 9500;
      const giaKmTren19 = 9000;
      const giaCho = 3500;
      if (soKm == 1) {
        Money = tinhKmDau(soKm, giaKmDau) + tinhGiaCho(thoiGianCho, giaCho);
      } else if (soKm > 1 && soKm <= 19) {
        Money = tinhKmTren1(soKm, giaKmTren1) + tinhGiaCho(thoiGianCho, giaCho);
      } else {
        Money =
          tinhKmTren19(soKm, giaKmTren19) + tinhGiaCho(thoiGianCho, giaCho);
      }
      break;

    default:
      break;
  }
  return Money;
}
function tinhKmDau(soKm, giaKmDau) {
  return soKm * giaKmDau;
}
function tinhKmTren1(soKm, giaKmTren1) {
  return (soKm - 1) * giaKmTren1;
}
function tinhKmTren19(soKm, giaKmTren19) {
  return (soKm - 19) * giaKmTren19;
}
function tinhGiaCho(thoiGianCho, giaCho) {
  if (thoiGianCho >= 3) {
    return Math.floor(thoiGianCho / 3) * giaCho;
  }
}
document.getElementById("tinhtien").onclick = function () {
  console.log(Money);
};
