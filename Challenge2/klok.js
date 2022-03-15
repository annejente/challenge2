setInterval(tijdZien, 1000);
function tijdZien() {

    var tijd = new Date();

    var uur = tijd.getHours();
    var minuut = tijd.getMinutes();
    var seconde = tijd.getSeconds();
    var uurVierentwintig = uur;
  
  
    uur = uur < 10 ? "0" + uur : uur;
    minuut = minuut < 10 ? "0" + minuut : minuut;
    seconde = seconde < 10 ? "0" + seconde : seconde;
  
    var nu = uur + ":" + minuut + ":" + seconde;

  
    document.getElementById("clock").innerHTML = nu;

    if (uurVierentwintig == 6) {
        document.getElementById("clock").style.background = "url('zon.webp')";
    } else if (uurVierentwintig < 6) {
        document.getElementById("clock").style.background = "url('nacht.jpeg')";
    } else if (uurVierentwintig > 6 && uurVierentwintig < 18) {
        document.getElementById("clock").style.background = "url('dag.jpeg')";
        document.getElementById("clock").style.color = "black";
    } else if (uurVierentwintig == 18) {
        document.getElementById("clock").style.background = "url('sunset.jpeg')";
    } else if (uurVierentwintig >= 19) {
        document.getElementById("clock").style.background = "url('nacht.jpeg')";
    } 
}

tijdZien();



