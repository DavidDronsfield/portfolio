$(window).scroll(function() {

	var wScroll = $(this).scrollTop();

	$(".headerMain").css({
		"transform" : "translate(0px, " + wScroll / 2.88 + "%)"
	});

	$(".headerLogo").css({
		"transform" : "translate(0px, " + wScroll / 1 + "%)"
	});


	if (wScroll > $(".skillsetSection").offset().top - ($(window).height() / 1.5)) {

		$(".skillsetSection figure").each(function(i) {
			setTimeout(function() {
				$(".skillsetSection figure").eq(i).addClass("isShowing");
			}, 150 * (i + 1));
		});

	}

	if (wScroll > 1000) {
		$("footer").css({ "opacity" : "1" });
	}
	
});