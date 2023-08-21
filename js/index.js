// bài 1 :Nhập điểm chuẩn hội đồng , điểm 3 môn thi của thí sinh , khu vực , đối tượng dự thi . Cho biết thí sinh đậu hay rớt và tổng số điểm đạt được

// b1 : xác định input 
// điểm chuẩn : benchMark
// điểm môn 1 : subject1
// điểm môn 2 : subject2
// điểm môn 3 : subject3
// khu vực : area
// đối tượng : object

// b2: xử lí 
function resultbtn() {
    var benchMark = document.getElementById('benchMark').value;
    var area = +document.getElementById('area').value;
    var object = +document.getElementById('object').value;
    var subject1 = +document.getElementById('subject1').value;
    var subject2 = +document.getElementById('subject2').value;
    var subject3 = +document.getElementById('subject3').value;
    
    var total = subject1 + subject2 + subject3;
    var lastTotal ;

    if(subject1 == 0 || subject2 == 0 || subject3 == 0 ){
        document.querySelector('#result').innerHTML = `
            <p>Bạn đã Rớt vì có điểm bé hơn hoặc bằng 0</p>
        `;
    }else{
        if(area === "x" && object === 0 ){
            lastTotal = total;
        }else if(area === "x"){
            lastTotal = total + object;
        }else if(object === 0){
            lastTotal = total + area;
        }else{
            lastTotal = total + area + object;
        }
    }
// b3: in kết quả 
    if(lastTotal >= benchMark){
        document.querySelector('#result').innerHTML = `
            <p style="margin-bottom: 0;">Tổng điểm : ${lastTotal}</p>
            <p>Bạn đã đậu </p>
        `;
    }else{
        document.querySelector('#result').innerHTML = `
            <p>Tổng điểm : ${lastTotal}</p>
            <p>Bạn đã rớt </p>
        `;
    }

}

// bài 2 : tính tiền điện
// b1 : xác định input 
// tên : name
// số điện sử dụng : kw 

// b2: xử lí 
function btnKw() {
    var name = document.getElementById('name').value;
    var kw = +document.getElementById('number').value;
    var bill ;
    var x = 1000;
    x = x.toLocaleString("it-IT", { style: "currency", currency: "VND"});

    if(kw <= 50){
        bill = kw * 500;
    }else if(kw <= 100){
        bill = (50 * 500) + (kw -50) * 650;
    }else if(kw <= 200){
        bill = (50 * 500) + (50 * 650) + (kw - 100) * 850;
    }else if(kw <= 350){
        bill = (50 * 500) + (50 * 650) + ( 100 * 850) + (kw - 200) * 1100;
    }else{
        bill = (50 * 500) + (50 * 650) + ( 100 * 850) + ( 150 * 1000) + ( kw - 350) * 1300;
    }
    // b3 : in kết quả 
    document.querySelector('#pay').innerHTML = `
        <p style="margin-bottom: 0;">Tên khách hàng : ${name}</p>
        <p>Tổng tiền điện : ${bill.toLocaleString("it-IT", { style: "currency", currency: "VND"})}</p>
    `;
}


// bài 3 :tính thuế thu nhập cá nhân
// b1: xác định input 
// họ tên : name1
// tổng thu nhập năm : salary
// số người phụ thuộc : person

// b2 : xử lí 
function roundToThree(num){
    return +(Math.round(num + "e+3") + "e-3");
}

function btnThue() {
    var name1 = document.getElementById('name1').value;
    var salary = +document.getElementById('salary').value;
    var person = +document.getElementById('person').value;
    var salaryChiuThue = salary - 4000000 - (person * 1600000) ;
    var thue;
    var x = 1000;
    x = x.toLocaleString("it-IT", { style: "currency", currency: "VND"});

    if(salary < 0){
        alert('số tiền thu nhập không hợp lệ ');
    }else{
        if(salaryChiuThue <= 60e+6){
            thue = salaryChiuThue * 0.05;
        }else if(salaryChiuThue <= 120e+6){
            thue = (60e+6 * 0.05) + (salaryChiuThue - 60e+6) * 0.1
        }else if(salaryChiuThue <= 210e+6){
            thue = (60e+6 * 0.05) + ( 60e+6 * 0.1) + (salaryChiuThue - 120e+6 ) * 0.15;
        }else if(salaryChiuThue <= 384e+6){
            thue = (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (salaryChiuThue - 210e+6) * 0.2;
        }else if(salaryChiuThue <= 624e+6){
            thue = (60e+6 * 0.05) + (60e+6 * 0.1) + ( 90e+6 * 0.15) + (174e+6 * 0.2) + ( salaryChiuThue - 384e+6) * 0.25;
        }else if(salaryChiuThue <= 960e+6){
            thue = (60e+6 * 0.05) + (60e+6 * 0.1) + ( 90e+6 * 0.15) + (174e+6 * 0.2) + (240e+6 * 0.25) (salaryChiuThue -624e+6 ) * 0.3;
        }else{
            thue = (60e+6 * 0.05) + (60e+6 * 0.1) + ( 90e+6 * 0.15) + (174e+6 * 0.2) + (240e+6 * 0.25) + (336e+6 * 0.3) + ( salaryChiuThue - 960e+6) * 0.35;
        }
    }
    // b3 : in kết quả 
    document.querySelector('#Thue').innerHTML = `
        <p style="margin-bottom: 0;">Họ tên : ${name1}</p>
        <p>Thuế thu nhập cá nhân phải trả : ${thue.toLocaleString("it-IT", { style: "currency", currency: "VND"})}</p>
    `;
}

// bài 4 : tính hóa đơn khách hàng cho cty cáp
// b1: xác định input 
// loại khách hàng : clientType
// số kết nối : numberConnect
// mã khách hàng : clientCode
// số kênh cao cấp : vipChannel

// b2 : xử lí 
function showHide() {
    var clientType = document.querySelector('#clientType').value;
    if(clientType == 1) {
        document.querySelector('#connect').style.display="block";
        document.querySelector('#numberConnect').style.display="block";
    }else{
        document.querySelector('#numberConnect').style.display="none";
    }
}


function btnHoaDon(){
    var clientType = document.getElementById('clientType').value;
    var numberConnect = +document.getElementById('numberConnect').value;
    var clientCode = document.getElementById('clientCode').value;
    var vipChannel = +document.getElementById('vipChannel').value;
    var sum ;
    var x = 1000;
    x = x.toLocaleString("it-IT", { style: "currency", currency: "VND"});

    if(clientType == 1) {
        if(numberConnect <= 10){
            sum =  15 + 75  + 50 * vipChannel;
        }else {
            sum = 15 + 75 + (numberConnect - 10) * 5 + (50 * vipChannel);
        }
    }else{
        document.querySelector('#numberConnect').style.display="none";
        sum = 4.5 + 20.5 + 7.5 * vipChannel;
    }
    // b3 : in kết quả 
    document.getElementById('cap').innerHTML = `
        <p style="margin-bottom: 0;">Mã khách hàng : ${clientCode}</p>
        <p>Tính tiền cáp : ${sum.toLocaleString("it-IT", { style: "currency", currency: "VND"})}</p>
    `;
}