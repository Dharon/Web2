$(document).ready(function(){

	//$("input.boton").click(function(){ alert($("div.contenido").find("p").size()); });
	
    $("a.enl").click(function(){ $("p.ocultar").toggle()});
    $( "input.boton" ).click(function(event) {  $("p").eq(3).toggle()});
    $( "input.boton1" ).click(function() {  $("p").eq(4).toggle("slow")});
	});
