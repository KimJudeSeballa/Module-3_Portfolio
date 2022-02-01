const box = document.getElementById('box');
var a = localStorage.getItem("myValue");
var b = parseFloat(a);
var c = b.toFixed(2);
box.textContent=c+" cal";

function consume(){
    const cal = document.getElementById('cal').value;
    c-=cal;
    var d=parseFloat(c);
    var e=d.toFixed(2)
    c=e;
    box.textContent= c+" cal";
    document.getElementById('cal').value="";
    return c;
}