

var winningCombos=[
    //row wins
    [0,1,2],
    [3,4,5],
    [6,7,8],

    //col wins
    [0,3,6],
    [1,4,7],
    [2,5,8],

    //diagnol wins
    [0,4,8],
    [2,4,6]
]

export const checkGame=(cells)=>{

    var result={
        completed: false, //or true
        winner: null, //or O or X
        winningCells:null , // [0,1,2]     
        get draw(){
            return this.completed && !this.winner
        },
        moves: cells.filter(cell=> cell!==null).length
    };

    for(var winningCombo of winningCombos){

        var [a,b,c] = winningCombo; 

        if(cells[a] && cells[a]===cells[b] && cells[a]===cells[c]){
            result.winner=cells[a];
            result.winningCombo=winningCombo
            break;   
        }
    }

    result.completed= result.winner || result.moves===9;

   
    return result;

}