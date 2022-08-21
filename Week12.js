let selectedRow = null;

function showAlert(message, cardName){
    const div = document.createElement('div');
    div.cardName = `alert alert-${cardName}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const main = document.querySelector('.main');
    container.insertBefore(div, main);

    
}

function clearFields() {
    document.querySelector('#card').value = '';
    document.querySelector('#type').value = '';
    document.querySelector('#color').value = '';
    document.querySelector('#manaCost').value = '';
}

document.querySelector('#card-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const card = document.querySelector('#card').value;
    const type = document.querySelector('#type').value;
    const color = document.querySelector('#color').value;
    const manaCost = document.querySelector('#manaCost').value;

    if(card == '' || type == '' || color == '' || manaCost == '') {
        showAlert('Fill in all fields');
    }
    else {
        if(selectedRow == null) {
            const list = document.querySelector('#card-list');
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${card}</td>
                <td>${type}</td>
                <td>${color}</td>
                <td>${manaCost}</td>
                <td>
                <a href="#" class="btn btn-dark btn-hover text-danger btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-hover text-dark btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert('Card Added');
        }
        else {
            selectedRow.children[0].textContent = card;
            selectedRow.children[1].textContent = type;
            selectedRow.children[2].textContent = color;
            selectedRow.children[3].textContent = manaCost;
            selectedRow = null;
        }

        clearFields();
    }

});

document.querySelector('#card-list').addEventListener('click', (e) => {
    target = e.target;
    if(target.cardList.contains('edit')) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector('#card').value = selectedRow.children[0].textContent;
        document.querySelector('#type').value = selectedRow.children[1].textContent;
        document.querySelector('#color').value = selectedRow.children[2].textContent;
        document.querySelector('#manaCost').value = selectedRow.children[3].textContent;
    }
});

document.querySelector('#card-list').addEventListener('click', (e) => {
    target = e.target;
    if(target.cardList.contains('delete')) {
        target.parentElement.parentElement.remove();
    }
});