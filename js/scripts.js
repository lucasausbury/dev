function buildTree() {
	console.log("Making attempt...");
	$.getJSON("/decisionTree.json", function( data ) {
		console.log( data );
	});
}

$(document).ready(function() {
	var $root = $('#root');
	var $node_tmp = $('.node-template').detach();
	var $decd_tmp = $('.decider-template').detach();

	buildTree();
});