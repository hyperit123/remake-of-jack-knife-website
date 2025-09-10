// Profile image functionality
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

// Checkbox functionality
const addCheckbox = document.getElementById('addCheckbox');
const removeCheckbox = document.getElementById('removeCheckbox');
const checkboxContainer = document.getElementsByClassName('checkboxContainer');
const addCheckbox1 = document.getElementById('addCheckbox1');
const removeCheckbox1 = document.getElementById('removeCheckbox1');
let checkboxCount = 1;

addCheckbox.addEventListener('click', function() {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox' + checkboxCount;
    checkboxContainer.appendChild(checkbox);
    checkboxCount++;
});

removeCheckbox.addEventListener('click', function() {
    if (checkboxCount > 1) {
        checkboxContainer.removeChild(checkboxContainer.lastElementChild);
        checkboxCount--;
    }
});


