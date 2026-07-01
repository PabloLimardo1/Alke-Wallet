let saldo = Number(localStorage.getItem("saldo"));

if (localStorage.getItem("usuario") == null) {
    window.location.href = "login.html";
}

$("#saldo").text(saldo.toLocaleString("es-CL"));

$("#depositForm").submit(function (e) {

    e.preventDefault();

    const monto = Number($("#monto").val());

    if (isNaN(monto) || monto <= 0) {

        $("#mensaje").html(
            "<div class='alert alert-danger'>Ingrese un monto válido.</div>"
        );

        return;

    }

    saldo += monto;

    localStorage.setItem("saldo", saldo);

    $("#saldo").text(saldo.toLocaleString("es-CL"));

    let movimientos = JSON.parse(
        localStorage.getItem("movimientos")
    );

    movimientos.push({
        tipo: "Depósito",
        monto: monto,
        fecha: new Date().toLocaleString()
    });

    localStorage.setItem(
        "movimientos",
        JSON.stringify(movimientos)
    );

    $("#mensaje").html(
        "<div class='alert alert-success'>Depósito realizado correctamente.</div>"
    );

    $("#monto").val("");

});