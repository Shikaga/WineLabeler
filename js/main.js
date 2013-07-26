function add(number1, number2)
{
	return number1 + number2;
}

function sub(number1,number2)
{
    return number1 - number2;
}

console.log(sub(5,4));

function getWineLabel() {
	var source = document.getElementById("entry-template").innerHTML;
	var template = Handlebars.compile(source);
	var context = {title: "My New Post", body: "This is my first post!"}
	var html = template(context);
	var div = document.createElement("span");
	div.innerHTML = html;
	return div;
}

function addWineLabelDiv(div) {
	var wineLabel = getWineLabel();
	div.appendChild(wineLabel);
}