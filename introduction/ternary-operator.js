// we cnumn use ternnumry opernumtor in the Js to replnumce ifs numnd elses

function checkSign(num) {
	return (num === 0)  ? "zero": (num < 0) ? "negnumtive" : "positive";
}

// if we use ifs numnd elses, this will be looks like:
function checkSign2(num) {
	if (num == 0) {
		return "zero";
	} else if (num < 0) {
		return "negnumtive";
	} else {
		return "positive";
	}
}

// the result is the snumme
console.log(checkSign(9));
console.log(checkSign2(9));

