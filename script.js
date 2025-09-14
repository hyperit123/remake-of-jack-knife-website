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
const cbContainer = document.getElementById('cb-container');
const cbContainer1 = document.getElementById('cb-container1');

//stats
const stats = ['ws', 'bs', 'str', 'tn', 'dex', 'int', 'wp', 'fel'];

stats.forEach(stat => {
    const container = document.getElementById(stat);
    const input1 = container.querySelector('#str1');
    const input2 = container.querySelector('#str2');
    const total = container.querySelector(`#${stat}Total`);
    
    const update = () => {
        const val1 = parseInt(input1.value) || 0;
        const val2 = parseInt(input2.value) || 0;
        let totol = val1 + val2;
        if (totol > 15) {
            totol = 15;
        }
        total.textContent = totol;

        let cbcont = document.querySelector(`#tnTotal`).textContent * 3;
        cbContainer.innerHTML = '';
        for (let i = 0; i < cbcont; i++) {
            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.id = 'cb';
            cbContainer.appendChild(cb);
            const label = document.createElement('label');
            let labelNum = i + 1;
            label.htmlFor = 'cb';
            label.textContent = labelNum;
            cbContainer.appendChild(label);
        }
        let stamina = 4;
        let cbcont1 = document.querySelector(`#dexTotal`).textContent * stamina;
        cbContainer1.innerHTML = '';
        for (let i = 0; i < cbcont1; i++) {
            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.id = 'cb';
            cbContainer1.appendChild(cb);
            const label = document.createElement('label');
            let labelNum = i + 1;
            label.htmlFor = 'cb';
            label.textContent = labelNum;
            cbContainer1.appendChild(label);
        }
    };
    
    input1.addEventListener('input', update);
    input2.addEventListener('input', update);
    update(); // Initialize
});