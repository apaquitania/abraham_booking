$(document).ready(function () {

	$('.carousel').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: false,
		prevArrow: null,
		nextArrow: null,
		responsive: [{
			breakpoint: 650,
			settings: {
				centerMode: false,
				variableWidth: true,
			}
		}]
	});








	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 0 ? 0 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	i = 2;
	$("#add-div").click(function (e) {
		$(".clone-here .clone-box").removeClass("to-clone");
		$(".clone-here").append("<h4>Flight " + i + "</h4>");
		i++;
		$(".to-clone").clone().appendTo(".clone-here");
	});

	$(".flight-trip").click(function (event) {
		$(".flight-trip").removeClass("active");
		$(this).addClass("active");
	});

});

function switchColor() {
	var checkBox = document.getElementById("check");
	var log = document.getElementById("log");
	var sign = document.getElementById("sign");
	var logCnt = document.getElementById("logCntnr");
	var signCnt = document.getElementById("signCntnr");
	if (checkBox.checked == true) {
		log.style.color = "rgb(0,0,0,.25)";
		sign.style.color = "white";
		logCnt.style.display = "none";
		signCnt.style.display = "block";
	} else {
		log.style.color = "white";
		sign.style.color = "rgb(0,0,0,.25)";
		logCnt.style.display = "block";
		signCnt.style.display = "none";
	}

}

function openFlight(trip) {
	var i;
	var x = document.getElementsByClassName("flightTrip");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	document.getElementById(trip).style.display = "flex";
}