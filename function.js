function inArray(arrayToCheck, value) {
	for (var i = 0; i < arrayToCheck.length; i++){
		if(arrayToCheck[i] === value){
			return true;
		}
		return false;
	}
}

inArray(num, 4);

//recursive functions

function factorial(num) {
	if(num <= 1){
		return 1;
	}
	else {
		return num * factorial(num - 1)
	}
}

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
