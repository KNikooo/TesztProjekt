$(function() {
	const ajax = new AjaxHivas();
	let teszt = '/api/teszt';
	let kategoriak = '/api/kategoriak';
    let valasztottTema = '/teszt/';
	/* ajax.getAjax(teszt, tesztLista);  */
	ajax.getAjax(kategoriak, kategoriakFeltolt);
    
    $('.kategoriaSelect').on('change', function(){
        ajax.getAjax(valasztottTema+$('.kategoriaSelect').val(), tesztLista);
      });

	function kategoriakFeltolt(tomb) {
		/* console.log(tomb); */
		$('.kategoriaSelect').append(`<option>Kérem válasszon</option>`);
		tomb.forEach((element) => {
			$('.kategoriaSelect').append(`<option value='${element.id}'>${element.kategorianev}</option>`);
		});
	}

    $('.v1').on('click', function(){
        console.log('kat');
        $('.v1').style.backgroundColor = "red";
    });
	
});