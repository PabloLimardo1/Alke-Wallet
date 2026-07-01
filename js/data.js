if(localStorage.getItem("saldo")==null){
    localStorage.setItem("saldo",1000000);
}

if(localStorage.getItem("movimientos")==null){
    localStorage.setItem("movimientos",JSON.stringify([]));
}

if(localStorage.getItem("contactos")==null){

    const contactos=[
        "Ana",
        "Pedro",
        "Camila",
        "Diego",
        "Sofía"
    ];

    localStorage.setItem(
        "contactos",
        JSON.stringify(contactos)
    );

}