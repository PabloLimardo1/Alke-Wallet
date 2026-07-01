if (localStorage.getItem("usuario") == null) {
    window.location.href = "login.html";
}

const movimientos = JSON.parse(
    localStorage.getItem("movimientos")
);

if (movimientos.length === 0) {

    $("#tablaMovimientos").append(
        "<tr><td colspan='4' class='text-center'>No existen movimientos.</td></tr>"
    );

} else {

    movimientos.slice().reverse().forEach(function (movimiento) {

        let color =
            movimiento.tipo === "Depósito"
                ? "text-success"
                : "text-danger";

        let signo =
            movimiento.tipo === "Depósito"
                ? "+"
                : "-";

        $("#tablaMovimientos").append(`
            <tr>
                <td>${movimiento.fecha}</td>
                <td>${movimiento.tipo}</td>
                <td>${movimiento.contacto || "-"}</td>
                <td class="${color}">
                    ${signo}$${Number(movimiento.monto).toLocaleString("es-CL")}
                </td>
            </tr>
        `);

    });

}