/**
 * A class for updating the Wine Label Presentation Model
 * @constructor
 */
var LabelGenerator = function() {
	var source = document.getElementById("entry-template").innerHTML;
}

LabelGenerator.prototype.init = function() {
	this.viewModel = ko.observableArray([]);
	ko.applyBindings(this.viewModel);
	return this;
}


LabelGenerator.prototype.addWineLabelDiv = function() {
	var context = {
		name: ko.observable("Waiki"),
		description: ko.observable("Lovely New World Red"),
		drinkByYear: ko.observable(2018),
		drinkByYearEditable: ko.observable(true),
		makeOlder: function(){
			this.drinkByYear(this.drinkByYear()+1);
		},
		editDrinkByYear: function() {
			this.drinkByYearEditable(!this.drinkByYearEditable);
		}
	};

	this.viewModel.push(context);
}