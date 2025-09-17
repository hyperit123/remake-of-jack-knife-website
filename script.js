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

//modify functionality  
const Modcb = document.getElementById('Modcb');
const Modcb1 = document.getElementById('Modcb1');   


//stats
const stats = ['ws', 'bs', 'str', 'tn', 'dex', 'per','int', 'wp', 'fel'];

stats.forEach(stat => {
    const container = document.getElementById(stat);
    const input1 = container.querySelector('#str1');
    const input2 = container.querySelector('#str2');
    const total = container.querySelector(`#${stat}Total`);
    const Modcb = document.getElementById('Modcb');
    const Modcb1 = document.getElementById('Modcb1'); 
    
    const update = () => {
        const val1 = parseInt(input1.value) || 0;
        const val2 = parseInt(input2.value) || 0;
        let totol = val1 + val2;
        if (totol > 15) {
            totol = 15;
        }
        total.textContent = totol;  

        let mod = Modcb.value || 3;
        let mod1 = Modcb1.value || 4;

        let cbcont = document.querySelector(`#tnTotal`).textContent * mod;
        cbContainer.innerHTML = '';
        for (let i = 0; i < cbcont; i++) {

            let labelNum = i + 1;
            const cbwrapper = document.createElement('div');
            cbwrapper.className = 'cb-wrapper';
            cbContainer.appendChild(cbwrapper);
            cbwrapper.style.position = 'relative';
            cbwrapper.style.display = 'inline-block';

            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.id = 'cb'+ labelNum;
            cbwrapper.appendChild(cb);

            const label = document.createElement('label');
            label.htmlFor = 'cb'+ labelNum;
            label.textContent = labelNum;
            cbwrapper.appendChild(label);
            label.style.position = 'absolute';
            label.style.right = '8px';
            label.style.top = '8px';
            label.style.pointerEvents = 'none';
        }
        let cbcont1 = document.querySelector(`#dexTotal`).textContent * mod1;
        cbContainer1.innerHTML = '';
        for (let i = 0; i < cbcont1; i++) {

            let labelNum = i + 1;
            const cbwrapper = document.createElement('div');
            cbwrapper.className = 'cb-wrapper';
            cbContainer1.appendChild(cbwrapper);
            cbwrapper.style.position = 'relative';
            cbwrapper.style.display = 'inline-block';

            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.id = 'cb'+ labelNum;
            cbwrapper.appendChild(cb);

            const label = document.createElement('label');
            label.htmlFor = 'cb'+ labelNum;
            label.textContent = labelNum;
            cbwrapper.appendChild(label);
            label.style.position = 'absolute';
            label.style.right = '8px';
            label.style.top = '8px';
            label.style.pointerEvents = 'none';
            label.style.color = 'var(--text)';
        }
    };
    
    input1.addEventListener('input', update);
    input2.addEventListener('input', update);
    Modcb.addEventListener('input', update);
    Modcb1.addEventListener('input', update);
    update(); // Initialize 
});

//tap functionality
const actionsTab = document.getElementById('actionsTab');
const traitsTab = document.getElementById('traitsTab');
const inventoryTab = document.getElementById('inventoryTab');
const actions = document.getElementById('Actions');
const traits = document.getElementById('Traits');
const inventory = document.getElementById('Inventory');

const updateActionsTab = () => {
    actions.style.display = 'block';
    traits.style.display = 'none';
    inventory.style.display = 'none';
    actionsTab.style.backgroundColor = 'var(--accent)';
    traitsTab.style.backgroundColor = 'var(--main-color)';
    inventoryTab.style.backgroundColor = 'var(--main-color)';
}

const updateTraitsTab = () => {
    actions.style.display = 'none';
    traits.style.display = 'block';
    inventory.style.display = 'none';
    actionsTab.style.backgroundColor = 'var(--main-color)';
    traitsTab.style.backgroundColor = 'var(--accent)';
    inventoryTab.style.backgroundColor = 'var(--main-color)';
}

const updateInventoryTab = () => {
    actions.style.display = 'none';
    traits.style.display = 'none';
    inventory.style.display = 'block';
    actionsTab.style.backgroundColor = 'var(--main-color)';
    traitsTab.style.backgroundColor = 'var(--main-color)';
    inventoryTab.style.backgroundColor = 'var(--accent)';
}

actionsTab.addEventListener('click', updateActionsTab);
traitsTab.addEventListener('click', updateTraitsTab);
inventoryTab.addEventListener('click', updateInventoryTab);
updateActionsTab();

// add text areas functionality
const addtbbtn = ['addtbbtn1', 'addtbbtn2', 'addtbbtn3', 'addtbbtn4', 'addtbbtn5', 'addtbbtn6', 'addtbbtn7','addtbbtn8'];
const TBContainer = ['TBContainer1', 'TBContainer2', 'TBContainer3', 'TBContainer4', 'TBContainer5', 'TBContainer6', 'TBContainer7','TBContainer8'];

addtbbtn.forEach((btn, i) => {
    const ta = document.createElement('textarea');
    ta.id = 'ta' + i;
    TBContainer[i].appendChild('ta' + i);
    console.log(TBContainer[i]);
});