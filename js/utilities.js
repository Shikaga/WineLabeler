function add(number1, number2)
{
	return number1 + number2;
}

function sub(number1,number2)
{
    return number1 - number2;
}

console.log(sub(5,4));

function getCurrentYear() {
	var yearsSince1900 = new Date().getYear();
	return yearsSince1900+1900
}