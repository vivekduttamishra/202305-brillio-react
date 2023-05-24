
const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
]

export function checkWinner(cells) {
    if(cells.filter((cell) => cell== null).length <= 0 ){
        return -1;
    };


    let winnerCells = [];
    for (const element of winner) {
        let matrix = element;
        let temp = cells[matrix[0]];
        if (temp != null) {
            if (temp === cells[matrix[1]] && temp === cells[matrix[2]]) {
                winnerCells.push(matrix)
            }
        }
    }
    return winnerCells;

}