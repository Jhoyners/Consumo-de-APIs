document.getElementById('searchBtn').addEventListener('click', function() {
    let city = document.getElementById('cityInput').value.trim();

    if (city === "") {
        document.getElementById('result').innerText = "Por favor escribe una ciudad.";
        return;
    }

    // Datos simulados como si vinieran de la API
    let data = {
        "madrid": { temp: 28 },
        "londres": { temp: 19 },
        "medellin": { temp: 25 },
        "bogota": { temp: 14 },
        "frankfurt": { temp: 20 },
        "japon": { temp: 19 },
        "paris": { temp: 22 },
        "tokio": { temp: 30 }
    };

    let lowerCity = city.toLowerCase();
    if (data[lowerCity]) {
        document.getElementById('result').innerText = 
            "La temperatura en " + city + " es de " + data[lowerCity].temp + "°C.";
    } else {
        document.getElementById('result').innerText = 
            "No tengo datos para la ciudad '" + city + "'.";
    }
});
