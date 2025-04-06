let tasks = document.querySelector('ul');
let inputField = document.getElementById('inputs');
let addBtn = document.querySelector('.btn-success');

// Create the Completed tasks container and heading
let completedTask = document.createElement('div');
completedTask.id = 'completed-tasks';
completedTask.className = 'mx-auto text-center w-50'; // Optional centering

let h2 = document.createElement('h2');
h2.innerText = "Completed Tasks";
completedTask.appendChild(h2); // Append only ONCE here

document.body.appendChild(completedTask);




addBtn.addEventListener('click', () => {
  const value = inputField.value.trim();
  if (!value) return;

  let completed = false;

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = value;

  li.className = "task-item d-flex justify-content-between align-items-center p-2 rounded mb-2";

  const btn_container = document.createElement('div');

  // Toggle checkbox
  const toggle = document.createElement('input');
  toggle.type = 'checkbox';
  toggle.className = 'form-check-input me-2';

  toggle.addEventListener('change', () => {
    completed = toggle.checked;
    
    if (completed) {
      
      span.classList.add('text-success');
      completedTask.appendChild(li);
      
    } else {
      span.classList.remove('text-success');
      tasks.appendChild(li);
    }
  });

  // Edit button
  const edit = document.createElement('button');
  edit.textContent = 'Edit';
  edit.className = 'btn btn-sm btn-success me-1';

  edit.addEventListener('click', () => {
    if (li.querySelector('input[type="text"]')) return;

    const input = document.createElement('input');
    input.type = 'text';
    input.className="d-flex column align-items-center editInput ";
    input.value = span.textContent;

    

    input.addEventListener('blur', () => {
      if (input.value.trim() !== '') {
        span.textContent = input.value.trim();
      }
      li.removeChild(input);
    });

    input.addEventListener('keypress', e => {
      if (e.key === 'Enter') input.blur();
    });

    li.appendChild(input);
    input.focus();
  });

  // Delete button
  const del = document.createElement('button');
  del.textContent = 'Delete';
  del.className = 'btn btn-sm btn-danger';

  del.addEventListener('click', () => {
    li.remove();
  });

  btn_container.appendChild(edit);
  btn_container.appendChild(del);

  li.appendChild(toggle);
  li.appendChild(span);
  li.appendChild(btn_container);

  tasks.appendChild(li);
  inputField.value = '';
});
