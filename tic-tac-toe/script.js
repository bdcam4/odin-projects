

const GameInit = (() => {
    const gameState = {};
    const gameBoard = [];
    
    const generateGridArray = (x,y) => {
        for (i = 0; i < x; i++){
            let row = document.createElement('div');
            row.classList.add('row');
            for (j = 0; j < y; j++){
                let cell = document.createElement('div');
                cell.classList.add('gridsquare');
                cell.setAttribute('onclick', `someFunction(${i}-${j})`);
                cell.setAttribute('id',`cell#${i}-${j}`);
                row.appendChild(cell);
            }
            document.getElementById('game-container').appendChild(row)
        } document.getElementById('button').remove();
    };

    return {
        generateGridArray,
    }
})();


const Game = (() => {

    const checkGameState = () => {
        Object.values(gameState).forEach(rowSum => {
            if (rowSum === 0 | rowSum === 3){
                console.log('we have a winner!')
            }
        })
    }

    const PlayerFactory = () => {
        const playMove = (gridPosition) => {
            // document.getElementById(`cell#${gridPosition}`);
            console.log(`cell #${gridPosition} is selected`)
        };
    }

    const playX = PlayerFactory();
    const playO = PlayerFactory();


    return {
      checkGameState,
      playX,
      playO,
    };
  })();
