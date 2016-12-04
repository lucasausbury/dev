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
	console.log( "A" );
	$.getJSON("http://lucasausbury.github.io/dev/decisionTree.json", function( out ) {
		alert("B");
		var t = $node_tmp.clone();
		var x = null;

		discriminants = data.discriminants;
		classes = data.classes;

		$root.html('');
		console.log( out );
		for( var i in out.data ) {
			x = out.data[i];

			if( parseInt(x.fulcrum) >= 0 )
				$root.append( t.render(x, node_dir) );
		}
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