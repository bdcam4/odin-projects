

const Game = (() => {
    const gameBoard = Array.from(Array(3), () => new Array(3));
    let currentPlayer = 'X'

    const generateGrid = (x,y) => {
        for (i = 0; i < x; i++){
            let row = document.createElement('div');
            row.classList.add('row');
            for (j = 0; j < y; j++){
                let cell = document.createElement('div');
                cell.classList.add('gridsquare');
                cell.setAttribute('onclick', `Game.playMove(${i},${j})`);
                cell.setAttribute('id',`cell#${i}-${j}`);
                row.appendChild(cell);
            }
            document.getElementById('game-container').appendChild(row)
        } document.getElementById('button').remove();
    };

    const playMove = (x,y) => {
        updateGameBoard(x,y)
        // evaluateBoardState();
        switch(currentPlayer) {
            case 'X':
                gameBoard[x][y] = 'X';
                currentPlayer = 'O';
            break;
            case 'O':
                gameBoard[x][y] = 'O';
                currentPlayer = 'X';
            break;
        }
    }

    const updateGameBoard = (x,y) => {
        let currentMove = document.getElementById(`cell#${x}-${y}`);
        currentMove.classList.add(`played${currentPlayer}`)
        currentMove.removeAttribute("onclick");
    };

    const displayBoard = () => {
        console.log(gameBoard)
    };

    const evaluateAxis = (modifier,x,y) => {
        let currentAxis = [];
        let initialCell = [x,y];
        for (i=1; i<=3; i++){
            currentCell = gameBoard[y][x];
            currentAxis.push(currentCell);
            x += modifier[0];
            y += modifier[1];
        }
        if (currentAxis.every( (value, i, arr) => value === arr[0] )) {
            console.log(currentAxis);
            endGame(modifier,initialCell)
        }
    }

    const evaluateBoardState = () => {
        const modifier = {
            'diagonal1': [1,1],
            'diagonal2': [1,-1],
            'row':       [1,0],
            'column':    [0,1]
        };
        evaluateAxis(modifier.row,0,0)
        evaluateAxis(modifier.row,0,1);
        evaluateAxis(modifier.row,0,2);
        evaluateAxis(modifier.column,0,0);
        evaluateAxis(modifier.column,1,0);
        evaluateAxis(modifier.column,2,0);
        evaluateAxis(modifier.diagonal1,0,0);
        evaluateAxis(modifier.diagonal2,0,2);
    }

    const endGame = (modifier,initialCell) => {
        let x = initialCell[0];
        let y = initialCell[1];
        let allCells = document.querySelector('.gridsquare');
        allCells.removeAttribute('onclick');
        for (i=1; i<=3; i++){
            let currentWinningCell = document.getElementById(`cell#${y}-${x}`);
            currentWinningCell.classList.add('win')
            x += modifier[0];
            y += modifier[1];
        }
    }

    return {
        generateGrid,
        playMove,
        evaluateBoardState,
        displayBoard,
    }
})();

// Couldn't make this idea work out neatly unfortunately
//
//     const gameState = {
//         'row1': 0,
//         'row2': 0,
//         'row3': 0,
//         'column1': 0,
//         'column2': 0,
//         'column3': 0,
//         'diagonal1': 0,
//         'diagonal2': 0,        
//     };
//
//     const checkGameState = () => {
//             Object.values(gameState).forEach(rowSum => {
//             if (rowSum === 3 | rowSum === 30){
//                 console.log('we have a winner!')
//             }
//         })
//     };
