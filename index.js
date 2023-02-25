import { renderCells } from "./renderCells.js";
import { play } from "./play.js";

const root = document.querySelector("#root");

const buttonsContainer = document.createElement("div");
buttonsContainer.classList = "buttons-container";

const viewButton = document.createElement("button");
viewButton.id = "view-button";
viewButton.type = "button";
viewButton.title = "Show picture";

const bigImage = document.createElement("div");
bigImage.id = "big-image";
bigImage.setAttribute("hidden", "");

const resetButton = document.createElement("button");
resetButton.id = "reset-button";
resetButton.type = "button";
resetButton.title = "Mix cards";

const numbersCheckbox = document.createElement("input");
numbersCheckbox.id = "numbers-checkbox";
numbersCheckbox.type = "checkbox";

const numbersCheckboxLabel = document.createElement("label");
numbersCheckboxLabel.id = "numbers-checkbox-label";
numbersCheckboxLabel.setAttribute("for", numbersCheckbox.id);
numbersCheckboxLabel.title = "Show numbers";

buttonsContainer.append(
	viewButton,
	resetButton,
	numbersCheckbox,
	numbersCheckboxLabel
);

const container = document.createElement("div");
container.id = "container";
container.classList = "container";

root.append(bigImage, container, buttonsContainer);

renderCells("reset");

resetButton.addEventListener("click", (event) => {
	if (event.target.id === "reset-button") {
		renderCells("reset");
		play();
	}
});

viewButton.addEventListener("mouseover", () => {
	bigImage.removeAttribute("hidden");
});
viewButton.addEventListener("mouseout", () => {
	bigImage.setAttribute("hidden", "");
});
numbersCheckbox.addEventListener("click", () => {
	const allCells = document.querySelectorAll(".cell");
	allCells.forEach((elem) => {
		elem.toggleAttribute("hide-numbers");
	});
});
play();
