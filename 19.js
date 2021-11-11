function Reloj(){
    var Fecha = new Date();
    var hora = Fecha.getHours();
    var minuto = Fecha.getMinutes();
    var segundo = Fecha.getSeconds();

    var AMPM = "AM";
    if(hora == 0){
        hora = 12;
    }

    if(hora > 12) {
        hora = hora - 12;
        AMPM = "PM";
    }

    hora = (hora < 10) ? "0" + hora : hora;
    minuto = (minuto < 10) ? "0" + minuto : minuto;
    segundo = (segundo < 10) ? "0" + segundo : segundo;

    var time = hora + ":" + minuto + ":" + segundo + " " + AMPM;
		console.log(time)
}

Reloj();
