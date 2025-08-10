const galeria = document.getElementById("galeria");

async function cargarImagenes() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10");
    const fotos = await respuesta.json();

    fotos.forEach(foto => {
      const div = document.createElement("div");
      div.classList.add("foto");

      div.innerHTML = `
        <img src="${foto.url}" alt="${foto.title}">
        <h3>${foto.title}</h3>
        <p>ID: ${foto.id}</p>
      `;

      galeria.appendChild(div);
    });
  } catch (error) {
    console.error("Error al cargar las imágenes:", error);
    galeria.innerHTML = "<p>No se pudieron cargar las imágenes.</p>";
  }
}

cargarImagenes();
