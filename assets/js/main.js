$(function(){
	$( ".history-btn").click(function() {
		$(this).parent().parent().find( ".attack" ).slideUp( "fast" );
		$(this).parent().parent().find( ".protect" ).slideUp( "fast" );
		$(this).parent().parent().find( ".history" ).slideToggle( "fast" );
	});

	$( ".attack-btn").click(function() {
		$(this).parent().parent().find( ".history" ).slideUp( "fast" );
		$(this).parent().parent().find( ".protect" ).slideUp( "fast" );
		$(this).parent().parent().find( ".attack" ).slideToggle( "fast" );
	});

	$( ".protect-btn").click(function() {
		$(this).parent().parent().find( ".history" ).slideUp( "fast" );
		$(this).parent().parent().find( ".attack" ).slideUp( "fast" );
		$(this).parent().parent().find( ".protect" ).slideToggle( "fast" );
	});
});