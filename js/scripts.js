function buildTree() {
	console.log("Making attempt...");
	$.ajax({
		url:"http://lucasausbury.github.io/dev/decisionTree.json", 
		dataType:"json",
		success: function( data ) {
			console.log( data );
		}
	});
}

$(document).ready(function() {
	var $root = $('#root');
	var $node_tmp = $('.node-template').detach();
	var $decd_tmp = $('.decider-template').detach();

	buildTree();
});