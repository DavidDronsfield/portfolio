original = ["<img />", "<img />", "<img />", "<img />", "<img />", "<img />", "<img />", "<img />", "<img />", "<img />"];

var finished = function(array) {
	var formatted = [];
	array.map((el) {
		for (var i=0; i<=array.length; i++) {
			if (array[i] === 0) {
				formatted.push(<div>);
				formatted.push(array[i]);
			}
		}
	});
}

console.log(finished(original));