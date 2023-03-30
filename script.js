function convert() {
	const fromValue = parseFloat(document.getElementById("from-value").value);
	const fromUnit = document.getElementById("from-unit").value;
	const toUnit = document.getElementById("to-unit").value;
	let toValue;
  
	if (fromUnit === "kg" && toUnit === "g") {
	  toValue = fromValue * 1000;
	} else if (fromUnit === "g" && toUnit === "kg") {
	  toValue = fromValue / 1000;
	} else if (fromUnit === "kg" && toUnit === "lbs") {
	  toValue = fromValue * 2.20462;
	} else if (fromUnit === "lbs" && toUnit === "kg") {
	  toValue = fromValue / 2.20462;
	} else if (fromUnit === "m" && toUnit === "ft") {
	  toValue = fromValue * 3.28084;
	} else if (fromUnit === "ft" && toUnit === "m") {
	  toValue = fromValue / 3.28084;
	} else if (fromUnit === "m" && toUnit === "in") {
	  toValue = fromValue * 39.3701;
	} else if (fromUnit === "in" && toUnit === "m") {
	  toValue = fromValue / 39.3701;
	} else if (fromUnit === "m" && toUnit === "cm") {
		toValue = fromValue * 100;
	} else if (fromUnit === "cm" && toUnit === "m") {
		toValue = fromValue / 100;
	} else if (fromUnit === "in" && toUnit === "cm") {
		toValue = fromValue * 2.54;
	} else if (fromUnit === "cm" && toUnit === "in") {
		toValue = fromValue / 2.54;
	} else if (fromUnit === "ft" && toUnit === "cm") {
		toValue = fromValue * 30.48;
	} else if (fromUnit === "cm" && toUnit === "ft") {
		toValue = fromValue / 30.48;
	} else if (fromUnit === "c" && toUnit === "f") {
	  toValue = (fromValue * 9/5) + 32;
	} else if ( fromUnit === "f" && toUnit === "c") {
	  toValue = ((fromValue - 32) * 5) / 9;
	} else if ( fromUnit === "f" && toUnit === "k") {
	  toValue = ((fromUnit - 32) * 5) / 9 + 273.15;
	} else if ( fromUnit === "c" && toUnit === "k") {
		toValue = fromUnit + 273.15;
	} else if ( fromUnit === "k" && toUnit === "c") {
		toValue = fromUnit - 273.15;
	} else if ( fromUnit === "k" && toUnit === "f") {
		toValue = ((fromUnit - 273.15) * 9) / 5 + 32;
	} 
	document.getElementById("to-value").value = toValue.toFixed(2);
}