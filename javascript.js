function ShowPakette(){
    let panel = document.getElementsByClassName("panel");
    panel[0].innerHTML ="<b>Beginnersklasse (A1-vlak)(aanlyn)</b> <br>  Gestruktureer rondom CERFL-vereistes <br> Prys: R70 per persoon per uur <br> R50 per persoon in pare";
document.getElementById("chk__menu").checked = false;





document.getElementById("panel1").style.visibility="visible";
document.getElementById("panel1").innerHTML ="<b>Tutorklasse - gemik op verbetering van Duits (aanlyn)</b> <br>Addisioneel tot die skoolkurrikulum vir ondersteuning en verryking. <br>Prys: R70 pper persoon per uur <br> R50 per persoon in pare";
}


function ShowEtos(){
    let panel = document.getElementsByClassName("panel");
    panel[0].innerHTML ="what is n etos even soos is akademie ons besigheid wat ";
    document.getElementById("chk__menu").checked = false;

    document.getElementById("panel1").style.visibility="hidden";
}

function ShowKontak(){
    let panel = document.getElementsByClassName("panel");
    panel[0].innerHTML ="ek het n instagram";

document.getElementById("chk__menu").checked = false;



document.getElementById("panel1").style.visibility="hidden";
}