function Dangki(){
    var ten_dp = document.forms.myForm["txtTen"].value;
    var MK = document.forms.myForm["txtMK"].value;
    var ngaysinh = document.forms.myForm["txtNam"].value;
    var year = new Date(ngaysinh);
    var gender = document.forms.myForm["txtBox"].value;
    var mon = document.forms.myForm["choose"].value;
    var present_day = new Date();
    document.forms.myForm["text"].value = ten_dp + "<br>" + MK + "<br>" + (present_day.getFullYear - year.getFullYear) + "<br>" + gender + "<br>" + choose + "<br>";
    return false;
}