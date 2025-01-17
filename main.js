const bookList = document.getElementById('book-list');
const addBookButton = document.getElementById('add-book');

addBookButton.addEventListener('click', () => {
    const title = document.getElementById('book-title').value.trim();
    const author = document.getElementById('author').value.trim();

    if (title === '' || author === '') {
        alert('Please enter both a title and an author.');
        return;
    }

    const bookItem = document.createElement('li');
    bookItem.className = 'book-item';

    const bookInfo = document.createElement('span');
    bookInfo.className = 'book-info';
    bookInfo.textContent = `${title} by ${author}`;

    const status = document.createElement('select');
    status.className = 'status';
    ['Unread', 'Reading', 'Read'].forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText;
        option.textContent = optionText;
        status.appendChild(option);
    });

    const actions = document.createElement('div');
    actions.className = 'actions';

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        bookList.removeChild(bookItem);
    });

    actions.appendChild(removeButton);
    bookItem.appendChild(bookInfo);
    bookItem.appendChild(status);
    bookItem.appendChild(actions);

    bookList.appendChild(bookItem);

    document.getElementById('book-title').value = '';
    document.getElementById('author').value = '';
});
