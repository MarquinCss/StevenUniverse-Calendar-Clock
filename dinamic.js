function clock () {
    //ignore var img = document.querySelector("img")
    //clock
    const areaDoRelogio = document.querySelector(".clo");
    const horaAgora = new Date();
    const hours = horaAgora.getHours ();
    const minutes = horaAgora.getMinutes ();
    const seconds = horaAgora.getSeconds ();
    const formatoHoras = hours.toString ().padStart(2, "0");
    //para testar os horários sem precisar esperar transforme em comentário o de ciam e use este const formatoHoras = 13
    const formatoMinutos = minutes.toString ().padStart(2, "0");
    const formatoSegundos = seconds.toString ().padStart(2, "0");
    
    areaDoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;

    //calendar-frase

    const frase = document.querySelector(".frase");
    //Array é um arranjo ou estrutura de dados onde amarzemanamos uma coleção de elementos.
    //array Dias da semana
    dia = new Array ("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado");
//Array Mês
    mes = new Array ("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");

    hoje = new Date ()

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2,0)} de  ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`
    //manhã
  
    if (formatoHoras >= 6 && formatoHoras < 12){ 
        document.getElementById("container").style.backgroundImage = "url('https://64.media.tumblr.com/3a36658e9e9201723cd55601dd8c34f9/tumblr_n4tqi6n4Ob1tau3obo1_500.gif')";
document.getElementById("container").style.color ="#000";
document.querySelector(".clo").textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}Am` ;

document.body.style.backgroundColor ="yellow";

document.querySelector(".msg").innerHTML = ` <img src="https://media.tenor.com/XN7RjSa1DvEAAAAj/abrupt-sleep.gif"> Bom dia <br> Site Produzido Por Marco Marchi`
 }

    //tarde

    else if(formatoHoras >= 12 && formatoHoras < 18 ){
        document.getElementById("container").style.backgroundImage = "url('https://e0.pxfuel.com/wallpapers/639/543/desktop-wallpaper-steven-universe-steven-universe-temple.jpg')";
document.body.style.backgroundColor ="hotpink";
document.querySelector(".clo").textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}Pm`;
document.querySelector(".msg").innerHTML = `<img width="100px" height="100px" src="https://media.tenor.com/L4TD4MWFy40AAAAj/kirby.gif">Boa Tarde <br> Site Produzido Por Marco Marchi`


    }

    //madrugada
    else if (formatoHoras <= 5){
        document.getElementById("container").style.backgroundImage = "url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700264068.jpg')";
        document.getElementById("container").style.color ="#fff"

   document.querySelector(".clo").textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}Am`;
document.body.style.backgroundColor ="#191970";
   document.querySelector(".msg").innerHTML = ` <img width="100px" height="100px" src="https://i.pinimg.com/originals/c0/9a/97/c09a97a8f18cb8908ea897639cbe4fa8.gif"> Hora de Dormir, né? <br> Site Produzido Por Marco Marchi`
        //(ignorar) aqui se usaria um imagem.src="urlDaImagem"
    }

    //noite

    else {
        document.getElementById("container").style.backgroundImage = "url('https://i.gifer.com/origin/41/418c8f3f92998eca2a8359744e285de8.gif')";
        document.getElementById("container").style.color ="#fff";
        document.querySelector(".clo").textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}Pm`;
document.body.style.backgroundColor ="#483D8B";
        document.querySelector(".msg").innerHTML = ` <Img width="150px" height="150px;" src="https://uploads.ungrounded.net/tmp/img/289000/iu_289520_8976933.gif"> Boa Noite <br> Site Produzido Por Marco Marchi`
        
    }

 


    }
setInterval (clock, 1000);