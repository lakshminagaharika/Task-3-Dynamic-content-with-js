// Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate form submission
    alert('Form submitted successfully!');
});

// Fetch data from an external API
document.getElementById('fetchData').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            let dataContainer = document.getElementById('dataContainer');
            dataContainer.innerHTML = '';
            data.forEach(post => {
                let postElement = document.createElement('div');
                postElement.className = 'card mb-3';
                postElement.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.body}</p>
                    </div>
                `;
                dataContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});