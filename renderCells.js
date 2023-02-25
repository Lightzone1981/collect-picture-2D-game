import { getData } from "./getData.js";
import { getMixData } from "./getMixData.js";
import { setData } from "./setData.js";


// помечаем ячейки, которые можно перемещать
function cellsScaleUpdate(newCellsArray) {
	const allCells = document.querySelectorAll(".cell");
	const emptyCellIndex = newCellsArray.indexOf(0);
	allCells.forEach((elem, index) => {
		elem.removeAttribute("scale");
		if (
			Math.abs(index - emptyCellIndex) === 4 ||
			(Math.abs(index - emptyCellIndex) === 1 &&
				Math.floor(index / 4) + 1 === Math.floor(emptyCellIndex / 4) + 1)
		) {
			elem.setAttribute("scale", "");
		}
	});
}

export const renderCells = (type) => {
	const container = document.querySelector(".container");
	container.innerHTML = "";
	let newCellsArray = [];
	const numbersCheckbox = document.querySelector("#numbers-checkbox");
	switch (type) {
		case "new":
			newCellsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
			setData(newCellsArray);
			break;
		case "reset":
			newCellsArray = getMixData();
			setData(newCellsArray);
			break;
		case "move":
			newCellsArray = getData();
	}
	newCellsArray.forEach((elem) => {
		const cell = document.createElement("div");
		cell.id = `cell-${elem}`;
		cell.classList = "cell";
		if (elem) cell.style.backgroundImage = `url('./assets/${elem}.jpg')`;
		cell.style.backgroundSize = "contain";
		if (elem === 0) {
			cell.classList.add("empty");
		} else {
			cell.innerText = elem;
		}

		if (numbersCheckbox.checked === false) {
			cell.setAttribute("hide-numbers", "");
		}

		container.append(cell);
	});
	cellsScaleUpdate(newCellsArray);
};
