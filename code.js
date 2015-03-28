function imageFwd(type) {	

	var elem = document.getElementById(type);
	var source = elem.src;

	var len = source.length;
	var number = Number(source.substring(len - 5, len - 4));

	if (number === 8) {
		number = 1;
	} else {
		number = number + 1;
	}

	elem.src = type + number.toString() + ".png";
}


function imageBwd(type) {
	
	var elem = document.getElementById(type);
	var source = elem.src;
	var len = source.length;

	var number = Number(source.substring(len - 5, len - 4));

	if (number === 1) {
		number = 7;
	} else {
		number = number - 1;
	}

	elem.src = type + number.toString() + ".png";
}
