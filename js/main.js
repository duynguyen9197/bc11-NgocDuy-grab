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
// tạo biến global
const giaKmDauX = 8000;
const giaKmTren1X = 7500;
const giaKmTren19X = 7000;
const giaChoX = 2000;
// grabSUV
const giaKmDauSuv = 9000;
const giaKmTren1Suv = 8500;
const giaKmTren19Suv = 8000;
const giaChoSuv = 3000;
// grabBlack
const giaKmDauBlack = 10000;
const giaKmTren1Black = 9500;
const giaKmTren19Black = 9000;
const giaChoBlack = 3500;

var tienCho = 0;
var tienKM_1 = 0;
var tienKM_2 = 0;
var tienKM_3 = 0;
var tongTien = 0;

document.getElementById("tinhtien").onclick = function (event) {
  event.preventDefault();
  // value input
  var soKm = document.getElementById("Kilomet").value;
  var thoiGianCho = document.getElementById("Time").value;
  var loaiXe = layLoaiXe();
  console.log(loaiXe);

  if (!loaiXe) {
    alert("Bạn chưa chọn loại xe");
    return;
  }
  switch (loaiXe) {
    case "grabX":
      tinhChiTiet(
        soKm,
        thoiGianCho,
        giaKmDauX,
        giaKmTren1X,
        giaKmTren19X,
        giaChoX
      );

      break;

    case "grabSuv":
      tinhChiTiet(
        soKm,
        thoiGianCho,
        giaKmDauSuv,
        giaKmTren1Suv,
        giaKmTren19Suv,
        giaChoSuv
      );
      break;

    case "grabBlack":
      tinhChiTiet(
        soKm,
        thoiGianCho,
        giaKmDauBlack,
        giaKmTren1Black,
        giaKmTren19Black,
        giaChoBlack
      );
      break;

    default:
      break;
  }
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tongTien;
  console.log(tongTien);
};

// Hàm lấy loại xe
function layLoaiXe() {
  var radioGrabX = document.getElementById("grabX");
  var radioGrabSuv = document.getElementById("grabSUV");
  var radioGrabBlack = document.getElementById("grabBlack");
  if (radioGrabX.checked) {
    return "grabX";
  } else if (radioGrabSuv.checked) {
    return "grabSuv";
  } else if (radioGrabBlack.checked) {
    return "grabBlack";
  } else {
    return null;
  }
}
// Hàm tính tiền
function tinhGiaCho(thoiGianCho, giaCho) {
  if (thoiGianCho >= 3) {
    return Math.floor(thoiGianCho / 3) * giaCho;
  } else {
    return 0;
  }
}
function tinhKm_1(soKm, giaKm_1) {
  return soKm * giaKm_1;
}
function tinhKmTren1(soKm, giaKmTren1) {
  return parseFloat((soKm - 1) * giaKmTren1);
}
function tinhKmTren19(soKm, giaKmTren19) {
  return parseFloat((soKm - 19) * giaKmTren19);
}
// hàm tính chi tiết
function tinhChiTiet(
  soKm,
  thoiGianCho,
  giaKm_1,
  giaKmTren1,
  giaKmTren19,
  giaCho
) {
  if (0 < soKm && soKm <= 1) {
    tienCho = tinhGiaCho(thoiGianCho, giaCho);
    tienKM_1 = tinhKm_1(1, giaKm_1);
    tongTien = tienCho + tienKM_1;
  } else if (soKm > 1 && soKm <= 19) {
    tienCho = tinhGiaCho(thoiGianCho, giaCho);
    tienKM_1 = tinhKm_1(1, giaKm_1);
    tienKM_2 = tinhKmTren1(soKm, giaKmTren1);
    tongTien = tienCho + tienKM_1 + tienKM_2;
  } else if (soKm > 19) {
    tienCho = tinhGiaCho(thoiGianCho, giaCho);
    tienKM_1 = tinhKm_1(1, giaKm_1);
    tienKM_2 = tinhKmTren1(19, giaKmTren1);
    tienKM_3 = tinhKmTren19(soKm, giaKmTren19);
    tongTien = tienCho + tienKM_1 + tienKM_2 + tienKM_3;
  } else {
    alert("Nhập số Km");
  }
  console.log(tienCho);
}
// in hóa đơn
var inKM_2 = 0;
var inKM_3 = 0;
document.getElementById("inhoadon").onclick = function () {
  var soKm = document.getElementById("Kilomet").value;
  var thoiGianCho = document.getElementById("Time").value;
  var inBangGia = layLoaiXe();
  console.log(tongTien);
  if (tongTien === 0) {
    document.getElementById("table_tong").innerHTML = "Bạn chưa tính tiền";
    return;
  }

  switch (inBangGia) {
    case "grabX":
      document.getElementById("DG_KM_1").innerHTML = giaKmDauX;
      document.getElementById("DG_KM_2").innerHTML = giaKmTren1X;
      document.getElementById("DG_KM_3").innerHTML = giaKmTren19X;
      document.getElementById("in_DG_timeCho").innerHTML = giaChoX;

      break;
    case "grabSuv":
      document.getElementById("DG_KM_1").innerHTML = giaKmDauSuv;
      document.getElementById("DG_KM_2").innerHTML = giaKmTren1Suv;
      document.getElementById("DG_KM_3").innerHTML = giaKmTren19Suv;
      document.getElementById("in_DG_timeCho").innerHTML = giaChoSuv;
      break;
    case "grabBlack":
      document.getElementById("DG_KM_1").innerHTML = giaKmDauBlack;
      document.getElementById("DG_KM_2").innerHTML = giaKmTren1Black;
      document.getElementById("DG_KM_3").innerHTML = giaKmTren19Black;
      document.getElementById("in_DG_timeCho").innerHTML = giaChoBlack;
      break;

    default:
      break;
  }
  document.getElementById("inTimeCho").innerHTML = thoiGianCho;
  document.getElementById("table_tong").innerHTML = "TỔNG TIỀN " + tongTien;

  insoKm(soKm);
  inTinhChiTiet(tienKM_1, tienKM_2, tienKM_3, tienCho);
};
function insoKm(soKm, inKM_2, inKM_3) {
  if (0 < soKm && soKm <= 1) {
    document.getElementById("SD_KM_1").innerHTML = soKm;
  } else if (soKm > 1 && soKm <= 19) {
    inKM_2 = soKm - 1;
    document.getElementById("SD_KM_1").innerHTML = 1;
    document.getElementById("SD_KM_2").innerHTML = inKM_2;
  } else {
    inKM_3 = soKm - 19;
    document.getElementById("SD_KM_1").innerHTML = 1;
    document.getElementById("SD_KM_2").innerHTML = 18;
    document.getElementById("SD_KM_3").innerHTML = inKM_3;
  }
}

function inTinhChiTiet(tienKM_1, tienKM_2, tienKM_3, tienCho) {
  document.getElementById("TT_KM_1").innerHTML = tienKM_1;
  document.getElementById("TT_KM_2").innerHTML = tienKM_2;
  document.getElementById("TT_KM_3").innerHTML = tienKM_3;
  document.getElementById("inTimeThanhTien").innerHTML = tienCho;
}
