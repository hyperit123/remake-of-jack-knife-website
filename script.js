let checkbox = 1;
const addCheckbox = document.getElementById('addCheckbox');
const removeCheckbox = document.getElementById('removeCheckbox');
const checkboxContainer = document.getElementById('checkboxContainer');

addCheckbox.addEventListener('click', function() {
    checkbox++;
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.id = 'checkbox' + checkbox;
    checkboxContainer.appendChild(newCheckbox);
});

removeCheckbox.addEventListener('click', function() {
    if (checkbox > 1) {
        checkbox--;
        checkboxContainer.removeChild(checkboxContainer.lastChild);
    }
    else {
        alert('Cannot remove the last checkbox.');
    }
});

