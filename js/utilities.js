function getCurrentYear() {
	var yearsSince1900 = new Date().getYear();
	return yearsSince1900+1900
}

function cloneObj(obj){
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