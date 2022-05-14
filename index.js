const numbers = document.querySelectorAll(".num");
const submit = document.querySelector("#submit");

for (let number of numbers) {
	number.addEventListener("click", function () {
		removeClass();
		this.classList.add("selected");
	});
}

function removeClass() {
	let selected = document.querySelectorAll(".selected");
	for (i = 0; i < selected.length; i++) {
		selected[i].classList.remove("selected");
	}
}

submit.addEventListener("click", function () {
	let ratingOn = document.getElementsByClassName("selected");
	if (ratingOn.length > 0) {
		let sections = document.querySelectorAll(".items-wrapper");
		for (let section of sections) {
			section.classList.toggle("dont-display");
		}
		const rating = parseInt(ratingOn[0].innerHTML);
		const youSelected = document.querySelector(".you-selected");
		youSelected.innerHTML = `You selected ${rating} out of 5`;
	} else {
		alert("Select your rating!");
	}
});
