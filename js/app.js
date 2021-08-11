'use strict';

createGameField();
function createGameField(rowsCount = 20, colsCount = 20) {
    const tableField = document.createElement('table');
    tableField.classList.add('game-field__table');
    for (let i = 0; i < rowsCount; i++) {
        const tr = document.createElement('tr');
        for (let i = 0; i < colsCount; i++) {
            const td = document.createElement('td');
            tr.append(td);
            
        }
        tableField.append(tr);
    }
    document.querySelector('.game-field').append(tableField);
    
}