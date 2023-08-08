// BT1

// B1: tạo biến
// workDay:số ngày làm
// salaryDay:lương 1 ngày
// resultSalary: tổng lương
//  B2: gán giá trị và xử lý

document.getElementById('hanlSalary').onclick = function () {
    var workDay = +document.getElementById('workDay').value;
    var salaryDay = +document.getElementById('salaryDay').value;
    var x = 1000;
    x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    var totalSalary = (workDay * salaryDay).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    document.getElementById('resultSalary').innerHTML = ` Tổng Lương: ${totalSalary} `

}
// B3: in kết quả

//--------------------------------------------------------------------

// BT2

// B1: tạo biến
// a,b,c,d,e (lần lược là các  số thực)
// sum: là tổng 5 các số thực
// n: 5 số
// trungBinhCong: trung bình cộng của 5 số thực
// B2: gán giá trị và xử lý
document.getElementById('hanl').onclick = function () {
    var a = +document.getElementById('a').value;
    var b = +document.getElementById('b').value;
    var c = +document.getElementById('c').value;
    var d = +document.getElementById('d').value;
    var e = +document.getElementById('e').value;
    var n = 5
    var sum = a + b + c + d + e;
    var trungBinhCong = sum / n
    document.getElementById('resultAvg').innerHTML = `AVG: ${trungBinhCong}`;
}
// B3: in ra kết quả

//----------------------------------------------------------

// BT3

// B1: tạo biến
// priceUsd: là giá USD
// qtyUsd: là số USD
// exchange: là tiền sau quy đổi 
// B2: gán giá trị và xử lý
document.getElementById('hanlUSD').onclick = function () {
    var priceUsd = +document.getElementById('priceUSD').value;
    var qtyUsd = +document.getElementById('qtyUSD').value;
    var x = 1000;
    x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    var exchange = (priceUsd * qtyUsd).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

    document.getElementById('resultExchange').innerHTML = `Sau quy đổi: ${exchange}`;
}
// B3: in ra kết quả

//----------------------------------------------------------

// BT4 

// B1: tạo biến
// m: là chiều dài 
// n: là chiều rộng
// cv: là chu vi 
// dt: là diện tích
// B2: gán giá trị và xử lý
document.getElementById('hanlHCN').onclick = function () {
    var length = +document.getElementById('length').value;
    var width = +document.getElementById('width').value;
    var perimeter = (length + width) * 2
    var acreage = length * width
    document.getElementById('resultPerimeter').innerHTML = `Chu vi: ${perimeter}`;
    document.getElementById('resultAcreage').innerHTML = ` Diện tích: ${acreage}`;
}
// B3: in ra kết quả

//------------------------------------------------------
// BT5:

// B1: tạo biến
// n: số có 2 chữ số
// unit: hàng đơn vị
// ten: hàng chục
// tong: sổ 2 ký số vừa nhập
// B2: gán giá trị và xử lý
document.getElementById('hanlNumber').onclick = function () {
    var number = +document.getElementById('number').value;
    var unit = Math.floor(number % 10)
    var ten = Math.floor(number / 10)
    var tong = unit + ten
    document.getElementById('resultNumber').innerHTML = ` Tổng 2 ký số: ${tong}`
}
// B3: in ra kết quả