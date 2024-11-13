document.getElementById('addBook').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;

    if (title && author && year) {
        const table = document.getElementById('bookList');
        const newRow = table.insertRow();

        const cellTitle = newRow.insertCell(0);
        const cellAuthor = newRow.insertCell(1);
        const cellYear = newRow.insertCell(2);

        cellTitle.textContent = title;
        cellAuthor.textContent = author;
        cellYear.textContent = year;

        // Clear input fields
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('year').value = '';
    } else {
        alert('Please fill in all fields');
    }
});
