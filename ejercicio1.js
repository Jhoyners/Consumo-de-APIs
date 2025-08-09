fetch('https://jsonplaceholder.typicode.com/photos')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let galeria = document.getElementById('gallery');
        for (let i = 0; i < 10; i++) {
            let foto = data[i];
            let div = document.createElement('div');
            div.className = 'photo';
            div.innerHTML = `
                <img src="${foto.thumbnailUrl}" alt="${foto.title}">
                <div class="title">${foto.title}</div>
            `;
            galeria.appendChild(div);
        }
    })
    .catch(function(error) {
        console.log('Ocurrió un error:', error);
    });