function buildTree(){console.log("Making attempt..."),$.getJSON("/decisionTree.json",function(e){console.log(e)})}$(document).ready(function(){var e=$("#root"),o=$(".node-template").detach(),t=$(".decider-template").detach();buildTree()});