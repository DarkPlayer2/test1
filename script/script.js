let opciones = document.querySelectorAll('.cuadro');
let ventana = document.getElementById('ventana');
let imagen = document.querySelector('.imagen');
let descripcion = document.querySelector('.descripcion');

opciones.forEach((opcion, indice) => {
    opcion.addEventListener('click', () => {
        ventana.style.display = 'flex';
        imagen.src = `imagen${indice + 1}.jpg`;
        descripcion.textContent = `Descripción de la opción ${indice + 1}`; // Cambiar por la descripción de cada opción
    });
});

function cerrarVentana() {
    ventana.style.display = 'none';
}
function cargarContenido(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}
const menuPrincipal = `
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soporte de TI</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <div class="contenedor-titulo">
        <h1 class="titulo">Como Armar una PC</h1>
    </div>

      <div class="contenedor">
        <div class="opcion">
            <div class="cuadro" id="opcion1" onclick="cargarContenido('subpaginas/power_supply1.html')">
                <img src="images/power.jpg" alt="Imagen 1" class="power-cuadro">
            </div>
            <p class="texto-opcion">Fuente de Poder</p>
            <div id="contenido-principal">

            </div>
        </div>
        <div class="opcion">
            <div class="cuadro" id="opcion2" onclick="cargarContenido('subpaginas/mainboard_sp.html')">
                <img src="images/mainboard.jpg" alt="Imagen 2" class="mainboard-cuadro">
            </div>
            <p class="texto-opcion">Placa Madre</p>
        </div>
        <div class="opcion">
            <div class="cuadro" id="opcion3"onclick="cargarContenido('subpaginas/procesador.html')">
                <img src="images/procesador.jpg" alt="Imagen 3" class="procesador-cuadro">
            </div>
            <p class="texto-opcion">CPU</p>
        </div>
        <div class="opcion">
            <div class="cuadro" id="opcion4"onclick="cargarContenido('subpaginas/disipador.html')">
                <img src="images/disipador.jpg" alt="Imagen 4" class="disipador-cuadro">
            </div>
            <p class="texto-opcion">Disipador de CPU</p>
        </div>
        <div class="opcion">
            <div class="cuadro" id="opcion5"onclick="cargarContenido('subpaginas/grafica.html')">
                <img src="images/grafica.jpg" alt="Imagen 5" class="grafica-cuadro">
            </div>
            <p class="texto-opcion">Tarjeta Gráfica</p>
        </div>
        <div class="opcion">
            <div class="cuadro" id="opcion6"onclick="cargarContenido('subpaginas/ram.html')">
                <img src="images/ram.jpg" alt="Imagen 6" class="ram-cuadro">
            </div>
            <p class="texto-opcion">RAM</p>
        </div>
        <div class="opcion">
            <div class="cuadro" id="opcion7"onclick="cargarContenido('subpaginas/disco.html')">
                <img src="images/disco-duro.jpg" alt="Imagen 7" class="disco-duro-cuadro">
            </div>
            <p class="texto-opcion">Disco Duro</p>
        </div>
        <div class="opcion">
            <div class="cuadro" id="opcion8"onclick="cargarContenido('subpaginas/add.html')">
                <img src="images/adicional.jpg" alt="Imagen 8" class="adicional-cuadro">
            </div>
            <p class="texto-opcion">Disipador Adicional</p>
        </div>
        <div class="opcion">
            <div class="cuadro" id="opcion9"onclick="cargarContenido('subpaginas/perifericos.html')">
                <img src="images/perifericos.jpg" alt="Imagen 9" class="perifericos-cuadro">
            </div>
            <p class="texto-opcion">Perifericos</p>
        </div>
    </div>

    <div class="ventana" id="ventana">
        <img src="" alt="" class="imagen">
        <p class="descripcion"></p>
    </div>

    <script src="script.js"></script>
    <div class="copyright">&copy; 2024 Joseph R-, Proyecto básico creado con ayuda de un amigo de Desarrollo Web 6to Ciclo.</div>
</body>
</html>
`;
    function volverAlMenu() {
    document.body.innerHTML = menuPrincipal;
}
