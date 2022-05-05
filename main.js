
var arrNum = [];

function nhapMang() {
    var num_1 = Number(document.getElementById('number_1').value);

    var output = "";

    arrNum.push(num_1);

    for (var i = 0; i < arrNum.length; i++) {
        var giaTri = arrNum[i];
        output += giaTri + ' ';
    }

    return output;
}

document.getElementById('subMit_1').onclick = function () {
    var arrEle = nhapMang();
    document.getElementById('show_1').innerHTML = arrEle;

}

// 1.
function tinhTong() {
    var tong = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            tong += arrNum[i];
        }
    }
    return tong;
}

document.getElementById('subMit_2').onclick = function () {
    var sumEle = tinhTong();
    document.getElementById('show_2').innerHTML = sumEle;

}

// 2.
function demSoDuong() {
    var count = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            count++;
        }
    }
    return count;
}

document.getElementById('subMit_3').onclick = function () {
    var poNum = demSoDuong();
    document.getElementById('show_3').innerHTML = poNum;
}

// 3.
function timSoNhoNhat() {
    var result = arrNum.sort(function (phanTu, phanTuTruoc) {
        return phanTu - phanTuTruoc;
    })
    var soNho = result[0];
    return soNho;
}

document.getElementById('subMit_4').onclick = function () {
    var sortNum = timSoNhoNhat();
    document.getElementById('show_4').innerHTML = sortNum;
}

// 4.

function timSoDuongNhoNhat() {
    var arrPo = [];
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            arrPo.push(arrNum[i]);
        }
    }
    var mangSoDuong = arrPo.sort(function (so, soTruoc) {
        return so - soTruoc;
    })
    var soDuongNhoNhat = mangSoDuong[0];
    return soDuongNhoNhat;
}

document.getElementById('subMit_5').onclick = function () {
    var sortNumSmall = timSoDuongNhoNhat();
    document.getElementById('show_5').innerHTML = sortNumSmall;
}

// 5.
function timSoChanCuoi() {
    var evenArr = [];
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 === 0) {
            evenArr.push(arrNum[i]);
        }
    }
    var lastEle = evenArr.pop();
    return lastEle;
}

document.getElementById('subMit_6').onclick = function () {
    var lastEven = timSoChanCuoi();
    document.getElementById('show_6').innerHTML = lastEven;
}

// 6.
function doiViTri() {
    var loca = [];
    var viTri1 = Number(document.getElementById('number_2').value);
    var viTri2 = Number(document.getElementById('number_3').value);

    loca = arrNum[viTri1];
    arrNum[viTri1] = arrNum[viTri2];
    arrNum[viTri2] = loca;
    return arrNum;

}

document.getElementById('subMit_7').onclick = function () {
    var localNum = doiViTri();
    document.getElementById('show_7').innerHTML = localNum;
}

// 7.

function sapXepTangDan() {
    var mangTang = arrNum.sort(function (so2, so1) {
        return so2 - so1;
    })
    return mangTang;
}

document.getElementById('subMit_8').onclick = function () {
    var sortUp = sapXepTangDan();
    document.getElementById('show_8').innerHTML = sortUp;
}

// 8.
function check(n) {

    let flag = 1;

    if (n < 2) return flag = 0;

    var i = 2;
    while (i < n) {
        if (n % i == 0) {
            flag = 0;
            break;
        }
        i++;
    }

    return flag;
}

function prime(){
    var sumPrime = [];
    var find = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if (check(arrNum[i]) == 1){
            sumPrime += arrNum[i];
        }
    }
    var find = sumPrime[0];
    return find
}


document.getElementById('subMit_9').onclick = function () {
    var firstPrime = prime();
    document.getElementById('show_9').innerHTML = firstPrime;
}

// 9.
arrNumInt = [];

function nhapMangNguyen() {
    var num_4 = Number(document.getElementById('number_4').value);

    var xuat = "";

    arrNumInt.push(num_4);

    for (var i = 0; i < arrNumInt.length; i++) {
        var giaTriNguyen = arrNumInt[i];
        xuat += giaTriNguyen + ' ';
    }

    return xuat;
}
document.getElementById('subMit_10').onclick = function () {
    var mangNguyen = nhapMangNguyen();
    document.getElementById('show_10').innerHTML = mangNguyen;
}

function demSoNguyen() {
    var tongSoNguyen = 0;
    for (var i = 0; i < arrNumInt.length; i++) {
        if (Number.isInteger(arrNumInt[i]) == true) {
            tongSoNguyen++;
        }
    }
    return tongSoNguyen;
}

document.getElementById('subMit_11').onclick = function () {
    var sumInt = demSoNguyen();
    document.getElementById('show_11').innerHTML = sumInt;
}

// 10.

function soSanhAmDuong() {
    soDuong = 0;
    soAm = 0;
    var soSanh = "";
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            soDuong++
        } else {
            soAm++
        }
    }

    if (soAm > soDuong) {
        soSanh = "Số âm nhiều hơn sô dương";
    } else if (soAm < soDuong) {
        soSanh = "Số dương nhiều hơn số âm";
    } else {
        soSanh = "hai số bằng nhau";
    }

    return soSanh
}

document.getElementById('subMit_12').onclick = function () {
    var negPoNum = soSanhAmDuong();
    document.getElementById('show_12').innerHTML = negPoNum;
}