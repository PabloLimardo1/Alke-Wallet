$(document).ready(function () {

    $("#loginForm").submit(function (e) {
        e.preventDefault();

        const email = $("#email").val();
        const password = $("#password").val();

        // 🔐 credenciales de prueba
        if (email === "admin@alke.cl" && password === "1234") {

            // 🧠 guardar sesión
            localStorage.setItem("logged", "true");
            localStorage.setItem("usuario", email);

            // 💰 inicializar saldo si no existe
            if (!localStorage.getItem("saldo")) {
                localStorage.setItem("saldo", "10000");
            }

            // 🚀 redirigir al menú (ajusta ruta según ubicación del login.html)
           window.location.href = "menu.html";

        } else {

            $("#mensaje").html(`
                <div class="alert alert-danger">
                    Credenciales incorrectas
                </div>
            `);
        }
    });

});
