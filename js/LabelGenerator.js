/**
 * A class for generating the WineLabel div elements
 * @constructor
 */
var LabelGenerator = function() {
	var source = document.getElementById("entry-template").innerHTML;
	this.template = Handlebars.compile(source);
}

LabelGenerator.prototype.getWineLabel = function() {
	var context = {name: "Waiki", description: "Lovely New World Red", drinkByYear: "2018"};
	var html = this.template(context);
	var div = document.createElement("span");
	div.innerHTML = html;
	return div;
}

LabelGenerator.prototype.addWineLabelDiv = function(div) {
	var wineLabel = this.getWineLabel();
	div.appendChild(wineLabel);
}