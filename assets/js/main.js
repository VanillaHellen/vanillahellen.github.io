(function(){
  // Vertical Timeline - by CodyHouse.co
	function VerticalTimeline( element ) {
		this.element = element;
		this.blocks = this.element.getElementsByClassName("cd-timeline__block");
		this.images = this.element.getElementsByClassName("cd-timeline__img");
		this.contents = this.element.getElementsByClassName("cd-timeline__content");
		this.offset = 0.8;
	};

	var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
		verticalTimelinesArray = [],
		scrolling = false;
	if( verticalTimelines.length > 0 ) {
		for( var i = 0; i < verticalTimelines.length; i++) {
			(function(i){
				verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
			})(i);
		}

		//show timeline blocks on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
			}
		});
	}

	function checkTimelineScroll() {
		verticalTimelinesArray.forEach(function(timeline){
		});
		scrolling = false;
	};

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
})();