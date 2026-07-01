$(document).ready(function () {

    $("#loginForm").submit(function (e) {

        e.preventDefault();

        const email = $("#email").val().trim();
        const password = $("#password").val().trim();

        if (email === "admin@alke.cl" && password === "1234") {

            localStorage.setItem("usuario", "Administrador");

            window.location.href = "menu.html";

        } else {

            $("#mensaje").html(
                "<div class='alert alert-danger'>Credenciales incorrectas</div>"
            );

        }

    });

});