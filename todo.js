document.getElementById('add-todo')
        .addEventListener('click', function() {
            var todoText = document.getElementById('todo-input').value;
    
            var listItem = document.createElement('li');
            listItem.className = 'todo-item';
            listItem.innerHTML = `
                <label>
                    <input type="checkbox" id="circle"/>
                    <label class="circle"></label>
                        ${todoText}
                </label>
                <button class="delete-btn">Delete</button>
            `;

    document.getElementById('todo-list').appendChild(listItem);
    document.getElementById('todo-input').value = '';

    listItem.querySelector('.delete-btn').addEventListener('click', function() {
        if(confirm('정말 삭제?')){
             listItem.remove();
        }
    });
});
