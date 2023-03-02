let cols = 2;

function addColumns() {
    [...document.querySelectorAll('#table tr')].forEach((row, i) => {
        let input = document.createElement('input');
        input.className = 'tableCellInput';
        let cell = document.createElement('td')
        cell.className = 'tableCell';
        cell.appendChild(input);
        row.appendChild(cell);
        
    });
    cols++;
}

function addRows() {
    let row = document.createElement('tr');
    for (let i = 0; i < cols; i++) {
        let input = document.createElement('input');
        input.className = 'tableCellInput';
        let cell = document.createElement('td')
        cell.className = 'tableCell';
        cell.appendChild(input);
        row.appendChild(cell);
    }
    document.querySelector('#table').appendChild(row)
}

function removeColumns() {
    [...document.querySelectorAll('#table tr')].forEach((row, i) => {
        row.removeChild(row.lastChild);
    });
    cols--;
}

function removeRows() {
    document.querySelector('#table').removeChild(document.querySelector('#table').lastChild)
}