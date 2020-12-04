function matriceUP()
{
	var y = ($('.elemente').val()).split(' ');
	var x = ($('.dimensiuni').val()).split(' ');
	var k = 0;
	var l = x[0];
	var h = x[1];
	var matrice = '';
	for(var i = 0 ; i < l ; i++)
	{
		matrice += "<div class=\"coloana\">";
		
		for(var j = 0 ; j < h ; j++)
		{
			if(y[i + j*l])
			matrice += "<div class=\"element element" + j + i + "\">" + y[i + j*l] + "</div>";
			else
			matrice += "<div class=\"element element" + j + i + "\">" + 0 + "</div>";
		}
		
		matrice += "</div>";
	}
	$('.matrice').html(matrice);
	$('.matrice').css("width" , l * 50 + 'px');
	
	var determinant = '';
	
	determinant = "( " + parseFloat($('.element00').html()) + ' * ' + parseFloat($('.element11').html()) + ' * ' + parseFloat($('.element22').html()) + ' ) + ( ' +
				  parseFloat($('.element01').html()) + ' * ' + parseFloat($('.element12').html()) + ' * ' + parseFloat($('.element20').html()) + ' )  +  (' +
				  parseFloat($('.element10').html()) + ' * ' + parseFloat($('.element21').html()) + ' * ' + parseFloat($('.element02').html()) + ' ) - ( ' +
				  parseFloat($('.element02').html()) + ' * ' + parseFloat($('.element11').html()) + ' * ' + parseFloat($('.element20').html()) + ' ) - ( ' +
				  parseFloat($('.element00').html()) + ' * ' + parseFloat($('.element12').html()) + ' * ' + parseFloat($('.element21').html()) + ' ) - ( ' +
				  parseFloat($('.element01').html()) + ' * ' + parseFloat($('.element10').html()) + ' * ' + parseFloat($('.element22').html()) + ' ) ';
	
	determinant += " = " + parseFloat($('.element00').html()) * parseFloat($('.element11').html()) * parseFloat($('.element22').html()) + ' + ' +
				  parseFloat($('.element01').html())  *  parseFloat($('.element12').html())  *  parseFloat($('.element20').html()) + ' + ' +
				  parseFloat($('.element10').html())  *  parseFloat($('.element21').html())  *  parseFloat($('.element02').html()) + ' - ' +
				  parseFloat($('.element02').html())  *  parseFloat($('.element11').html())  *  parseFloat($('.element20').html()) + ' - ' +
				  parseFloat($('.element00').html())  *  parseFloat($('.element12').html())  *  parseFloat($('.element21').html()) + ' - ' +
				  parseFloat($('.element01').html())  *  parseFloat($('.element10').html())  *  parseFloat($('.element22').html());
	
	determinant += " = " + (parseFloat($('.element00').html()) * parseFloat($('.element11').html()) * parseFloat($('.element22').html()) +
				  parseFloat($('.element01').html())  *  parseFloat($('.element12').html())  *  parseFloat($('.element20').html()) + 
				  parseFloat($('.element10').html())  *  parseFloat($('.element21').html())  *  parseFloat($('.element02').html()) -
				  parseFloat($('.element02').html())  *  parseFloat($('.element11').html())  *  parseFloat($('.element20').html()) -
				  parseFloat($('.element00').html())  *  parseFloat($('.element12').html())  *  parseFloat($('.element21').html()) -
				  parseFloat($('.element01').html())  *  parseFloat($('.element10').html())  *  parseFloat($('.element22').html())).toString();
	
	var p = 1;
		for(var i = 0 ; i < l ; i++)
			for(var j = 0 ; j < h ; j++)
				if($('.element'+i+j).html() != '0') 
					p = 0;
				
	console.log($('.element00').html());
				
	if(!p)
	$('.determinant').html(determinant);
}

$(function(){
	matriceUP();
	$('.dimensiuni').change(function(){
	matriceUP();
});

$('.elemente').change(function(){
	matriceUP();
});

});


