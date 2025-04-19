document.getElementById('contact-form').addEventListener('submit', function (e) {
    const email = this.querySelector('input[type="email"]').value;
    const name = this.querySelector('input[type="text"]').value;
  
    if (!email.includes('@')) {
      alert('Please enter a valid email.');
      e.preventDefault();
    }
  
    if (name.length < 2) {
      alert('Name should be at least 2 characters.');
      e.preventDefault();
    }
  });
  function addTask() {
    const input = document.getElementById('task-input');
    const task = input.value.trim();
    if (task === '') return;
  
    const li = document.createElement('li');
    li.textContent = task;
    li.className = 'task-item';
    li.addEventListener('click', () => li.remove());
    document.getElementById('task-list').appendChild(li);
    input.value = '';
  }
  
  function addImage() {
    const fileInput = document.getElementById('image-input');
    const file = fileInput.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = function (e) {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = "User uploaded image";
      img.className = 'gallery-img';
      li.appendChild(img);
      li.addEventListener('click', () => li.remove());
      document.getElementById('task-list').appendChild(li);
    };
    reader.readAsDataURL(file);
    fileInput.value = ''; // Reset file input
  }
  