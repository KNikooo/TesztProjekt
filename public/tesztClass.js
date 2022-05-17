class Teszt {
	constructor(elem, adat) {
		this.elem = elem;
		this.adat = adat;

		this.kerdes = elem.children('.kerdes');
		this.v1 = elem.children('.valaszok').children('.v1');
		this.v2 = elem.children('.valaszok').children('.v2');
		this.v3 = elem.children('.valaszok').children('.v3');
		this.v4 = elem.children('.valaszok').children('.v4');

		this.setAdatok(this.adat);
	}

	setAdatok(ertekek) {
		this.kerdes.html(ertekek.kerdes);
        this.v1.html(ertekek.v1);
        this.v2.html(ertekek.v2);
        this.v3.html(ertekek.v3);
        this.v4.html(ertekek.v4);
	}

}