var $root = null, $node_tmp = null, $decd_tmp = null;
var node_dir = {}, decd_dir = {};
var discriminants = {}, classes = {};

function renderQuestion( data, counter ) {
	var $tmp = $node_tmp.clone();
	data.counter = counter;

	if( parseInt(data.fulcrum) >= 0 ) {
		console.log( discriminants[data.fulcrum] );
		console.log( node_dir );
		$tmp.render(data, node_dir);
	} 

	return $tmp;
}

function buildTree() {
	$.getJSON("http://lucasausbury.github.io/dev/decisionTree.json", function( data ) {
		discriminants = data.discriminants;
		classes = data.classes;

		$root.html('');
		$root.append( renderQuestion( data.data, 1 ) );
	});
}

$(document).ready(function() {
	$root = $('#root');
	$node_tmp = $('.node-template').detach();
	$decd_tmp = $('.decider-template').detach();
	node_dir = {
		'control-label':{
			'text':function( params ){
				return this.counter + '. ' + discriminants[this.fulcrum];
			}
		}, 'control-options':{
			'html':function( params ) {
				var $cont = $('<div />');
				var name = 

				for( var i in this.branches ) {
					var $t = $decd_tmp.clone();
					$t.find('.custom-control-description').text(i);

					$cont.append( $t );
				}

				return $cont.html();
			}
		}
	};
	decd_dir = {};

	buildTree();
});