$(document).ready( function() {
	$(window).scroll( function() {	
		var dist = $(document).scrollTop();
		var word_end = $(".fade4").offset().top + $(".fade4").height();
		var word_fade = 1 - dist / word_end;
		$("#words").css("opacity", word_fade);

		var logo_start = $(".fade5").offset().top;
		var logo_end = $("#logo").offset().top - $("#logo").height();
		var logo_fade = ((dist - logo_start) / logo_end); 
		$("#logo").css("opacity", logo_fade);
	});

	$("#logo img").click( function() {
		$(this).attr("src", "me.jpg");
	});
});