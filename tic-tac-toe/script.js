

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

    const updateGameBoard = (x,y) => {
        // console.log(`updateGameBoard - ${currentPlayer}, x: ${x}, y: ${y}`)
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

    const playMove = (x,y) => {
        let currentMove = document.getElementById(`cell#${x}-${y}`);
        currentMove.classList.add('played');
        currentMove.removeAttribute("onclick");
        // console.log(`playMove - ${currentPlayer}, x: ${x}, y: ${y}`);
        updateGameBoard(x,y);
    };

    const displayBoard = () => {
        console.log(gameBoard)
    };

    const evaluateAxis = (modifier,x,y) => {
        for (i=0; i<3; i++){
            if (gameBoard[x][y] === ???)
        }
    }

    const evaluateBoardState = () => {
        const modifier = {
            'diagonal1': [1,1],
            'diagonal2': [1,-1],
            'row':       [1,0],
            'column':    [0,1]
        };
        evaluateAxis(modifier.row,0,0);
        evaluateAxis(modifier.row,0,1);
        evaluateAxis(modifier.row,0,2);
        evaluateAxis(modifier.column,0,0);
        evaluateAxis(modifier.column,1,0);
        evaluateAxis(modifier.column,2,0);
        evaluateAxis(modifier.diagonal1,0,0);
        evaluateAxis(modifier.diagonal2,0,2);
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
