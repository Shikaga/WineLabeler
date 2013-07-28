/**
 * A class for updating the Wine Label Presentation Model
 * @constructor
 */
var LabelGenerator = function() {
	var source = document.getElementById("entry-template").innerHTML;
	var self = this;
	this.newWineLabelContext = {
		labelGenerator: self,
		name: ko.observable(""),
		nameEditable: ko.observable(false),
		editName: function() {
			this.nameEditable(!this.nameEditable());
		},
		description: ko.observable(""),
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
		},
		duplicate: function() {
			this.labelGenerator.duplicate(this);
		},
		remove: function() {
			this.labelGenerator.remove(this);
		},
		confirm: function() {
			this.labelGenerator.addWineLabel(this);
		}
	};
}

LabelGenerator.prototype.init = function() {
	this.wineLabelArray = ko.observableArray([]);
	this.newWineLabel = this.newWineLabelContext;
	ko.applyBindings(this.wineLabelArray);
	return this;
}

//LabelGenerator.prototype.addWineLabelDiv = function() {
//	var self = this;
//	var context = {
//		labelGenerator: self,
//		name: ko.observable("Waiki"),
//		nameEditable: ko.observable(false),
//		editName: function() {
//			this.nameEditable(!this.nameEditable());
//		},
//		description: ko.observable("Lovely New World Red. Drink with a nice rare steak."),
//		descriptionEditable: ko.observable(false),
//		editDescription: function() {
//			this.descriptionEditable(!this.descriptionEditable());
//		},
//		drinkByYear: ko.observable(getCurrentYear()),
//		drinkByYearEditable: ko.observable(false),
//		editDrinkByYear: function() {
//			this.drinkByYearEditable(!this.drinkByYearEditable());
//		},
//		color: ko.observable("white"),
//		setColorWhite: function() {
//			this.color("white");
//		},
//		setColorRose: function() {
//			this.color("rose");
//		},
//		setColorRed: function() {
//			this.color("red");
//		},
//		duplicate: function() {
//			this.labelGenerator.duplicate(this);
//		},
//		remove: function() {
//			this.labelGenerator.remove(this);
//		}
//	};
//
//	this.wineLabelArray.push(context);
//}

LabelGenerator.prototype.duplicate = function(labelViewModel) {
	var viewModelClone = cloneObj(labelViewModel);
	this.wineLabelArray.push(viewModelClone);
}

LabelGenerator.prototype.remove = function(labelViewControl) {
	this.wineLabelArray.remove(labelViewControl);
}

LabelGenerator.prototype.addWineLabel = function(wineLabel) {
	var viewModelClone = cloneObj(wineLabel);
	this.wineLabelArray.push(viewModelClone);
}