
var table = new Array();

for (var i = 0; i < document.getElementsByTagName('tr').length; i++){
	table[i] = new Array();
	for (var j = 0; j < document.getElementsByTagName('tr')[i].getElementsByTagName('td').length; j++){
		table[i][j] = document.getElementsByTagName('tr')[i].getElementsByTagName('td')[j];
	}
}

var Xi = [table[1][0].childNodes[0], table[2][0].childNodes[0], table[3][0].childNodes[0], table[4][0].childNodes[0], table[5][0].childNodes[0]]; 
var Xavg = table[3][1];
var dXi = [table[1][2], table[2][2], table[3][2], table[4][2], table[5][2]];
var d2Xi = [table[1][3], table[2][3], table[3][3], table[4][3], table[5][3]];
var Sn = table[3][4];
var dX = table[3][5];
var E = table[3][6];

function calculate(){
	var coeff = document.getElementById('coeff').value;
	var val;
	var sum = 0;
	var valid = true;
	
	for (var i = 0; i < 5; i++){
		if (Xi[i].value == null){
			valid = false;
			console.log(Xi);
		}
	}
	
	if(valid){
		for (var i = 0; i < 5; i++){
			sum += parseFloat(Xi[i].value);
		}
		sum /= 5;
		
		Xavg.innerHTML = sum;
		
		for (var i = 0; i < 5; i++){
			dXi[i].innerHTML = (sum - Xi[i].value).toPrecision(3);
			d2Xi[i].innerHTML = (Math.pow(sum - Xi[i].value, 2).toPrecision(5));
		}
		
		sum = 0;
		for (var i = 0; i < 5; i++){
			sum += parseFloat(d2Xi[i].innerHTML);
		}
		Sn.innerHTML = Math.sqrt(sum / 20).toPrecision(5);
		
		dX.innerHTML = (coeff * parseFloat(Sn.innerHTML)).toPrecision(5);
		
		E.innerHTML = (100 * parseFloat(dX.innerHTML) / parseFloat(Xavg.innerHTML)).toPrecision(4) + '%';
	}
}