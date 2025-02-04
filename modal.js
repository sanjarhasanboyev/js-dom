const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const editModal = document.getElementById('editModal');
const closeModal = document.getElementById('closeModal');
const postForm = document.getElementById('postForm');
const table = document.getElementById('table');
const closeEditModal = document.getElementById('closeEditModal');
const editChanges = document.getElementById('editChanges');
const editForm = document.getElementById('editForm');

openModal.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

let count = 1;
postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Form ga keldi");
    const title = document.getElementById('title');
    const userText = document.getElementById('userText');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    td1.textContent = count++;
    td2.textContent = title.value;
    td3.textContent = userText.value;
    td4.appendChild(editBtn);
    td4.appendChild(deleteBtn);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
    postForm.reset();
    modal.style.display = 'none';
});

closeEditModal.addEventListener('click', () => {
    editModal.style.display = 'none';
})

// delete row
table.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const row = e.target.closest('tr');
        row.remove();
    }
    updateRowNumbers();
});

// update row
let currentRow = null;
table.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')) {
        currentRow = e.target.closest('tr');
    }
})

// edit row
editModal.addEventListener('submit', (e) => {
    e.preventDefault();
    const editTitle = document.getElementById('editTitle').value;
    const editBody = document.getElementById('editBody').value;
    currentRow.cells[1].textContent = editTitle;
    currentRow.cells[2].textContent = editBody;
    editForm.reset();
    editModal.style.display = 'none';
})


// edit modal
table.addEventListener('click', (e) => {
    const editTitle = document.getElementById('editTitle');
    const editBody = document.getElementById('editBody');
    editTitle.value = currentRow.cells[1].textContent;
    editBody.value = currentRow.cells[2].textContent;
    if (e.target.classList.contains('edit-btn')) {
        editModal.style.display = 'flex';
    }
});

// update id number
function updateRowNumbers() {
    const rows = document.querySelectorAll('#table tr');
    rows.forEach((data, index) => {
        if (index > 0) {
            data.cells[0].textContent = index;
        }
    })
    count = rows.length;
}

// keyboard => esc
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && modal.style.display === 'flex') {
        modal.style.display = 'none';
    }
});