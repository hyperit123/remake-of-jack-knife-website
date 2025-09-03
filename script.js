let checkbox = 1;
const addCheckbox = document.getElementById('addCheckbox');
const removeCheckbox = document.getElementById('removeCheckbox');
const checkboxContainer = document.getElementById('checkboxContainer');
//let cbgName = document.getElementById('cbgName').value;

addCheckbox.onclick = function() {
    checkbox++;
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.id = 'checkbox' + checkbox;
    checkboxContainer.appendChild(newCheckbox);
    // Add a line break after every 10th checkbox
    //if (checkbox % 10 === 0) {
    //const lineBreak = document.createElement('br');
    //    checkboxContainer.appendChild(lineBreak);
    //}
};

removeCheckbox.onclick = function() {
    if (checkbox > 1) {
        // Remove the last element (which might be a checkbox or a <br>)
        checkboxContainer.removeChild(checkboxContainer.lastChild);

        checkbox--;
        
        // If we just removed a line break, also remove the checkbox
        //if (checkbox % 10 === 0 && checkboxContainer.lastChild.tagName === 'INPUT') {
            // We removed a <br>, now remove the checkbox too
        //} 
        //else if (checkbox % 10 === 0) {
        //    // We removed a checkbox that was followed by a <br>, so remove the <br> too
        //    if (checkboxContainer.lastChild && checkboxContainer.lastChild.tagName === 'BR') {
        //        checkboxContainer.removeChild(checkboxContainer.lastChild);
        //    }
        //}
        //if (checkboxContainer.lastChild.tagName === 'BR') {
        //    checkbox = checkbox; 
        //}
        //else {
        //    checkbox--;
        //}
    }
    else {
        alert('Cannot remove the last checkbox.');
    }
};

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
