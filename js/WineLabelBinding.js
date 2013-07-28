/**
 * Wine Label Binding
 * @param labelGenerator that it will be placed in
 * @return The Wine Label Bindings
 */
var WineLabelBinding = function(labelGenerator) {
	return {
		labelGenerator: labelGenerator,
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
		},
		reset: function() {
			this.name("");
			this.description("");
			this.drinkByYear(getCurrentYear());
			this.color("white");
		}
	}
};