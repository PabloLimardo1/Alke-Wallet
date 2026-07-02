if (!localStorage.getItem("logged")) {
   window.location.href = "login.html";
}

}

const usuario=localStorage.getItem("usuario");

$("#usuario").text(usuario);

$("#saldo").text(

    Number(localStorage.getItem("saldo")).toLocaleString("es-CL")

);

$("body").hide().fadeIn(500);

$(".menu-btn").hide().each(function(i){

    $(this).delay(i*150).fadeIn();

});

$("#cerrarSesion").click(function(){

    localStorage.removeItem("usuario");

    window.location.href="login.html";

});
