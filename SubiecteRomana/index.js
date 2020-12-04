function matriceUP()
{
	console.log('ceva');
	var y = $('.elemente').split(' ');
	var x = $('.dimensiuni').split(' ');
	var k = 0;
	var l = x[0];
	var h = x[1];
	var matrice = '';
	for(var i = 1 ; i <= h ; i++)
		for(var j = 1 ; j <= l ; j++)
		{
			matrice += "<div>" + y[k] + "</div>";
			k++;
		}
}

$(function(){
	matriceUP();
});