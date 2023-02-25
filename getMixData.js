export function getMixData() {
    // алгоритм перемешивания карточек
    const cellsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
    let emptyIndex = cellsArray.indexOf(0);

    for (let i = 0; i < 200; i++) {
        const randomMove = Math.floor(Math.random() * 4) + 1;
        switch (randomMove) {
            case 1: {
                if (emptyIndex - 4 >= 0) {
                    cellsArray[emptyIndex] = cellsArray[emptyIndex - 4];
                    cellsArray[emptyIndex - 4] = 0;
                    emptyIndex = emptyIndex - 4;
                }
                break;
            }
            case 2: {
                if (emptyIndex + 4 <= 15) {
                    cellsArray[emptyIndex] = cellsArray[emptyIndex + 4];
                    cellsArray[emptyIndex + 4] = 0;
                    emptyIndex = emptyIndex + 4;
                }
                break;
            }
            case 3: {
                if ([0, 4, 8, 12].indexOf(emptyIndex) === -1) {
                    cellsArray[emptyIndex] = cellsArray[emptyIndex - 1];
                    cellsArray[emptyIndex - 1] = 0;
                    emptyIndex = emptyIndex - 1;
                }
                break;
            }
            case 4: {
                if ([3, 7, 11, 15].indexOf(emptyIndex) === -1) {
                    cellsArray[emptyIndex] = cellsArray[emptyIndex + 1];
                    cellsArray[emptyIndex + 1] = 0;
                    emptyIndex = emptyIndex + 1;
                }
                break;
            }
        }
    }
    return cellsArray;
}
