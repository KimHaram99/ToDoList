document.getElementById('add-todo')
        .addEventListener('click', function() {
            var todoText = document.getElementById('todo-input').value;
    
            var listItem = document.createElement('li');
            listItem.className = 'todo-item';
            listItem.innerHTML = `
                <span>
                    <input type='checkbox' name='circle'/>${todoText}
                </span>
                <button class="delete-btn">Delete</button>
            `;

    document.getElementById('todo-list').appendChild(listItem);
    document.getElementById('todo-input').value = '';

    listItem.querySelector('.delete-btn').addEventListener('click', function() {
        listItem.remove();
    });
});
