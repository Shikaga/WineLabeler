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
	var self = this;
	var context = {
		labelGenerator: self,
		name: ko.observable("Waiki"),
		nameEditable: ko.observable(false),
		editName: function() {
			this.nameEditable(!this.nameEditable());
		},
		description: ko.observable("Lovely New World Red. Drink with a nice rare steak."),
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
		}

	};

	this.viewModel.push(context);
}

LabelGenerator.prototype.duplicate = function(labelViewModel) {
	cloneObj = function(obj){
		if(ko.isWriteableObservable(obj)) return ko.observable(obj()); //this is the trick
		if(obj === null || typeof obj !== 'object') return obj;
		var clone = {};
		for (var key in obj) {
			if (obj[key].getSubscriptionsCount !== undefined) {
				var newKoObservable = ko.observable(obj[key]())
				clone[key] = newKoObservable;
			} else {
				clone[key] = obj[key];
			}
		}
		return clone;
	};
	var viewModelClone = cloneObj(labelViewModel);
	this.viewModel.push(viewModelClone);
}

LabelGenerator.prototype.remove = function(labelViewControl) {
	this.viewModel.remove(labelViewControl);
}