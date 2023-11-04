// Contoh data yang di kelola
let contacts = [
    { id: 1, name: 'Adam', telp: '621278121' },
    { id: 2, name: 'Ade', telp: '620192992' },
    { id: 3, name: 'Figo', telp: '628908093' },
];

// Get Parent Element
const parentElement = document.querySelector('ul');
// Get Parent Element
const emptyInfoElement = document.querySelector('#empty-info');
// Get input elements
const inputName = document.getElementById('input-name');
const inputNumber = document.getElementById('input-number');

// Pada saat menambahkan data, id tidak boleh sama
// Agar id tidak sama, gunakan Date.now()  -  contohnya gini: Date.now()

const addNewContact = (value) => {
    const requestData = {
        id: value.id,
        name: value.name,
        telp: value.telp
    }
    contacts.push(requestData);
    renderContacts();
}

const deleteDataById = (id) => {
    const confirmation = confirm(`Are you sure you want to delete the data with ID ${id}?`);
    if (confirmation) {
        const filteredData = contacts.filter(contact => contact.id !== id);
        contacts = filteredData;
        renderContacts();
    }
}

const renderContacts = () => {
    // Kosongkan parent nya dulu
    parentElement.innerHTML = '';
    emptyInfoElement.innerText = '';

    if (contacts.length == 0) {
        document.getElementById('empty-info').innerText = 'There are no contacts 🤙';
    }

    // render data nya
    contacts.map(contact => {
        const childElement = document.createElement('li');
        childElement.innerText = `${contact.name} - ${contact.telp}`;

        // create button for delete a contact
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Hapus';
        deleteButton.classList.add('button-delete');
        deleteButton.style.marginLeft = '10px'
        deleteButton.addEventListener('click', (e) => {
            deleteDataById(contact.id);
        });
        childElement.appendChild(deleteButton);

        // Masukan li kedalam ul
        parentElement.appendChild(childElement);
    });
}

// Render contact for first time
renderContacts();

const resetForm = () => {
    inputName.value = '';
    inputNumber.value = '';
}

const formElement = document.querySelector('form');
// Event On Submit
formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const requestNewData = {
        id: Date.now(),
        name: inputName.value,
        telp: inputNumber.value
    };

    addNewContact(requestNewData);
    resetForm();
    console.log('Ini contoh data yang kamu tambahin', contacts);
})