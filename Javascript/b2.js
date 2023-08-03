function songay(month, year)
{
    switch(month){
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
        case 4: case 6: case 9: case 11:
            return 30;
        case 2:
            if(namnhuan(year))
                return 29;
            return 28;
        default: return 0;
    }
}

function namnhuan(year)
{
    return (year % 4 || year % 100) && (year % 400);                     
}

function xemngaygio()
{
    var date = new Date();
    var thu = date.getDay() + 1;
    var ngay = date.getDate();
    var thang = date.getMonth() + 1;
    var nam = date.getFullYear();
    document.getElementById("show1").innerHTML = "Hom nay, thu " + (thu == 1?"Chu nhat":"thu " + thu) + " ngay " + ngay + "/" + thang + "/" +nam;
    setInterval(xemio,1000);
}   

function xemio()
{
    var date = new Date();
    var gio = date.getHours();
    var phut = date.getMinutes();
    var giay = date.getSeconds();
    document.getElementById("show3"). innerHTML = gio + ":" + (phut < 10? "0" + phut: phut) + ":" + (giay < 10? "0" + giay : giay);
}