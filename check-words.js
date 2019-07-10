(function() {

	window.addEventListener("load", init);

	const UNDESCRIPTIVE_WORDS = ["clean", "fun", "organized", "dirty", "cheap", "expensive", "classy", "well-dressed",
								 "pretty", "messy", "cute", "good", "healthy", "fresh", "high-quality", "low-quality", 
								 "industrial", "aggressive", "gentle", "decorative", "unnecessary", "well-kept", "nice"];

	function init() {
		id("clear").addEventListener("click", function() {
			id("text-to-check").value = "";
			id("finished").innerHTML = "";
		})
		id("check-words").addEventListener("click", checkWords);
	}

	function checkWords() {
		let text = id("text-to-check").value;
		let textArray = text.split(" ");
		let finishedText = "<p>Result: </p><p>";
		for (let i = 0; i < textArray.length; i++) {
			console.log(textArray[i]);
			if (UNDESCRIPTIVE_WORDS.includes(textArray[i].toLowerCase())) {
				finishedText += "<span class='highlighted'>" + textArray[i] + "</span> "; 
			} else {
				finishedText += textArray[i] + " ";
			}
		}
		id("finished").innerHTML = finishedText + "<p>";
	}

	function id(elementId) {
		return document.getElementById(elementId);
	}
})();
