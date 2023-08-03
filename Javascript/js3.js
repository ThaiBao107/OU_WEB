function Tinh()
{
    var a = Number(document.getElementById("txta").value);
    var b = Number(document.getElementById("txtb").value);
    var c = Number(document.getElementById("txtc").value);
    console.log(a);
    var kq,x;
    if(a == 0){
        if(b == 0){
            if(c==0){ 
                document.getElementById("show").innerHTML = "PTVN";
            }
            else{
            document.getElementById("show").innerHTML = "PY vo so nghiem";
            }
        }
        else{
            x = -c / b;
            kq = x.toFixed(2);
            document.getElementById("show").innerHTML = kq;
        }
    }
    else
    {
        delta = b*b - 4 * a * c;
         if(delta > 0)
         {
             var x1 = (-b + Math.sqrt(delta)) / ( 2 * a);
             var x2 = (-b - Math.sqrt(delta)) / (2 * a);
                document.getElementById("show").innerHTML = x1;
                document.getElementById("show1").innerHTML = x2;
         }
         else if(delta == 0)
        {
            kq = (-b) / (2*a);
            document.getElementById("show"). innerHTML = kq.toFixed(2);
        }
        else
        {
            document.getElementById("show").innerHTML = "PTVN";
        }
    }
}

function Huy()
{
    window.location.reload();
}