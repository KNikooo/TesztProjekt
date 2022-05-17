function tesztLista(tomb) {
    const szuloElem = $("#teszt");
    const sablonElem = $("#sablon .adat");

    tomb.forEach(function (adat) {
        let ujElem = sablonElem.clone().appendTo(szuloElem);
        const ujTeszt = new Teszt(ujElem, adat);
        /* console.log(ujTeszt); */
    });
    sablonElem.remove();
}