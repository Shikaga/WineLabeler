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
		nameEditable: ko.observable(false),
		editName: function() {
			this.nameEditable(!this.nameEditable());
		},
		description: ko.observable("Lovely New World Red"),
		descriptionEditable: ko.observable(false),
		editDescription: function() {
			this.descriptionEditable(!this.descriptionEditable());
		},
		drinkByYear: ko.observable(getCurrentYear()),
		drinkByYearEditable: ko.observable(false),
		editDrinkByYear: function() {
			this.drinkByYearEditable(!this.drinkByYearEditable());
		},
		color: ko.observable("white"),
		setColorWhite: function() {
			this.color("white");
		},
		setColorRose: function() {
			this.color("rose");
		},
		setColorRed: function() {
			this.color("red");
		}

	};

	this.viewModel.push(context);
}