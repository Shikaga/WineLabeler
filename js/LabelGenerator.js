/**
 * A class for updating the Wine Label Presentation Model
 * @constructor
 */
var LabelGenerator = function() {
	var source = document.getElementById("entry-template").innerHTML;
	var self = this;
}

LabelGenerator.prototype.init = function() {
	this.wineLabelArray = ko.observableArray([]);
	this.newWineLabel = new WineLabelBinding(this);
	ko.applyBindings(this.wineLabelArray);
}

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
	wineLabel.reset();
}