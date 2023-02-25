import { getData } from "./getData.js";
import { renderCells } from "./renderCells.js";
import { setData } from "./setData.js";

function moveCell(cellTargetId, cellTargetIndex, emptyCellIndex, cellsArray) {
		cellsArray[emptyCellIndex] = Number(cellTargetId);
		cellsArray[cellTargetIndex] = 0;
		setData(cellsArray);
}

export function play() {
	const container = document.querySelector(".container");
	const cellsArray = getData();
	container.addEventListener("click", (event) => {
		if (event.target.id.includes("cell-") && event.target.hasAttribute('scale')) {
			const cellTargetId = event.target.id.split("-").at(-1);
			const cellTargetIndex = cellsArray.indexOf(Number(cellTargetId));
			const emptyCellIndex = cellsArray.indexOf(0);
			moveCell(cellTargetId, cellTargetIndex, emptyCellIndex, cellsArray);
            renderCells("move");
            setTimeout(() => {
              if (JSON.stringify(cellsArray) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0])) {
                alert('Congratulations!')
            } 
           }, 500) 
		}
	});
}
