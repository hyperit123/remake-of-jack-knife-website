let checkbox = 1;
const addCheckbox = document.getElementById('addCheckbox');
const removeCheckbox = document.getElementById('removeCheckbox');
const checkboxContainer = document.getElementById('checkboxContainer');

// Function to create a numbered checkbox container
function createNumberedCheckbox(number) {
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.display = 'inline-block';
    container.style.margin = '5px';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox' + number;
    checkbox.style.width = '30px';
    checkbox.style.height = '30px';
    checkbox.style.appearance = 'none';
    checkbox.style.border = '2px solid #333';
    checkbox.style.borderRadius = '4px';
    checkbox.style.position = 'relative';
    checkbox.style.cursor = 'pointer';
    
    const numberSpan = document.createElement('span');
    numberSpan.textContent = number;
    numberSpan.style.position = 'absolute';
    numberSpan.style.top = '50%';
    numberSpan.style.left = '50%';
    numberSpan.style.transform = 'translate(-50%, -50%)';
    numberSpan.style.fontSize = '14px';
    numberSpan.style.fontWeight = 'bold';
    numberSpan.style.pointerEvents = 'none';
    numberSpan.style.color = '#333';
    
    // Add checked state styling
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            this.style.backgroundColor = '#007bff';
            numberSpan.style.color = 'white';
        } else {
            this.style.backgroundColor = 'transparent';
            numberSpan.style.color = '#333';
        }
    });
    
    container.appendChild(checkbox);
    container.appendChild(numberSpan);
    return container;
}

// Function to update all checkbox numbers
function updateCheckboxNumbers() {
    // Clear container
    checkboxContainer.innerHTML = '';
    
    // Add numbered checkboxes
    for (let i = 1; i <= checkbox; i++) {
        const numberedCheckbox = createNumberedCheckbox(i);
        checkboxContainer.appendChild(numberedCheckbox);
    }
}

addCheckbox.onclick = function() {
    checkbox++;
    updateCheckboxNumbers();
};

removeCheckbox.onclick = function() {
    if (checkbox > 1) {
        checkbox--;
        updateCheckboxNumbers();
    }
    else {
        alert('Cannot remove the last checkbox.');
    }
};

// Initialize the first checkbox with number
updateCheckboxNumbers();

const pfpImport = document.getElementById('pfpImport');
pfpImport.onclick = function() {
    document.getElementById('pfpInput').click();
};

const pfpInput = document.getElementById('pfpInput').addEventListener('change', function() {
    if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('pfp').src = e.target.result;
        };
        reader.readAsDataURL(this.files[0]);
    }
});

const levelDropdown = document.getElementById('levelDropdown');
for (let i = 1; i <= 50; i++) {
    const option = document.createElement('option');
    option.value = 'Level ' + i;
    option.textContent = 'Level ' + i;
    levelDropdown.appendChild(option);
}