const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Bootstrap",
				weight: 12.3
			}, {
				text: "CSS3",
				weight: 8
			}, {
				text: "VueJS",
				weight: 14
			}, {
				text: "",
				weight: 3
			}, {
				text: "Express",
				weight: 7
			}, {
				text: "MongoDB",
				weight: 10
			}, {
				text: "HTML5",
				weight: 9
			}, {
				text: "Javascript",
				weight: 15
			}, {
				text: "Postman",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"I am a Full-Stack Web Developer.", "I love everything about code.", "I also love UI/UX design process.", "I love solving problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
