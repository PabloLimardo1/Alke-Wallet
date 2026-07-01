// Verificar sesión
if (localStorage.getItem("usuario") == null || localStorage.getItem("usuario") == "") {
    window.location.href = "login.html";
}

// Obtener saldo
let saldo = Number(localStorage.getItem("saldo"));

// Mostrar saldo
$("#saldo").text(saldo.toLocaleString("es-CL"));

// Cargar contactos
let contactos = JSON.parse(localStorage.getItem("contactos"));

$("#contacto").empty();

contactos.forEach(function (c) {
    $("#contacto").append(`<option>${c}</option>`);
});

// Buscar contacto
$("#buscar").keyup(function () {

    const texto = $(this).val().toLowerCase();

    $("#contacto option").each(function () {

        $(this).toggle(
            $(this).text().toLowerCase().includes(texto)
        );

    });

});

// Enviar dinero
$("#transferForm").submit(function (e) {

    e.preventDefault();

    const monto = Number($("#monto").val());

    const contacto = $("#contacto").val();

    if (isNaN(monto) || monto <= 0) {

        $("#mensaje").html(
            "<div class='alert alert-danger'>Ingrese un monto válido.</div>"
        );

        return;

    }

    if (monto > saldo) {

        $("#mensaje").html(
            "<div class='alert alert-danger'>Saldo insuficiente.</div>"
        );

        return;

    }

    saldo -= monto;

    localStorage.setItem("saldo", saldo);

    $("#saldo").text(saldo.toLocaleString("es-CL"));

    let movimientos = JSON.parse(
        localStorage.getItem("movimientos")
    );

    movimientos.push({

        tipo: "Transferencia",

        contacto: contacto,

        monto: monto,

        fecha: new Date().toLocaleString()

    });

    localStorage.setItem(
        "movimientos",
        JSON.stringify(movimientos)
    );

    $("#mensaje").html(
        "<div class='alert alert-success'>Transferencia realizada correctamente.</div>"
    );

    $("#monto").val("");

});

// Agregar contacto
$("#guardarContacto").click(function () {

    const nuevo = $("#nuevoContacto").val().trim();

    if (nuevo == "") return;

    contactos.push(nuevo);

    localStorage.setItem(
        "contactos",
        JSON.stringify(contactos)
    );

    $("#contacto").append(`<option>${nuevo}</option>`);

    $("#nuevoContacto").val("");

    bootstrap.Modal.getInstance(
        document.getElementById("modalContacto")
    ).hide();

});