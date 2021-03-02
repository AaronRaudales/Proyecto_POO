var menu =[
    {
        nombreCategoria: "Farmacia",
        imagen :"img/farmacia.png",
        enlace: "https://glovoapp.com/hn/es/tegucigalpa/farmacia_3/",
    },
    {
       nombreCategoria : "Tiendas y regalos",
       imagen :"img/Tienda.webp",
       enlace: 'https://glovoapp.com/hn/es/tegucigalpa/tiendas-y-regalos_22/',
    },
    {
        nombreCategoria :"Super Y licores",
        imagen: "img/licores.png",
        enlace: 'https://glovoapp.com/hn/es/tegucigalpa/super-y-licores_708/',
    },
    {
        nombreCategoria: "Envios Express",
        imagen: "img/envios.png",
    },
    {
        nombreCategoria: "Cruz Roja- Donaciones",
        imagen: "img/donaciones.png",
        enlace: 'https://glovoapp.com/hn/es/tegucigalpa/cruz-roja-donaciones_1086/',
    },
    {
        nombreCategoria: "Comida",
        imagen: "img/comida.png",
    },

];

var Restaurantes =[
    {
        nombre: "La vaca Loca",
        imagen: "img/vacalova.jpg",
    },
    {
        nombre: "Pupuseria Camino del Valle",
        imagen: "img/pupuseria.jpg",
    },
    {
        nombre: "KFC",
        imagen: "img/KFC.webp",
    },
    {
        nombre: "Wendy's",
        imagen: "img/wendy.webp",
    },
    {
        nombre: "Pollo Campero",
        imagen: "img/campero.webp",
    },
    {
        nombre: "Denny's",
        imagen: "img/denys.webp",
    },
    {
        nombre: "Little Cesar Pizza",
        imagen: "img/littlecesar.webp",
    },
    {
        nombre: "Burger King",
        imagen: "img/burgerking.webp",
    },
    {
        nombre: "Pollo Campesino",
        imagen: "img/pollocampesino.webp",
    },

];

var publicidad =[
    {
        imagen:"img/repartidor.webp" ,
        titulo: "Repartidores",
        descripcion: "Solo las horas que tú quieras",
        texto: "Sé tu propio jefe. Flexibilidad de horarios, ingresos competitivos y la oportunidad de conocer tu ciudad repartiendo al aire libre. Apúntate y en menos de 24h colabora con nosotros.",
        boton: "Reparte con nosotros",
        link: 'https://couriers.glovoapp.com/hn/',
    },
    {
        imagen:"img/pizza-partner.webp" ,
        titulo: "Establecimientos asociados",
        descripcion: "Multiplica tus ventas",
        texto:"Impulsa tu negocio colaborando con nosotros y benefíciate de nuestras herramientas, nuestra tecnología y nuestra base de clientes para tener la ciudad entera a tus pies.",
        boton: "Colabora con nosotros",
        link:"https://cloud.partner.glovoapp.com/Partners",
    },
    {
        imagen: "img/glovoteam.webp",
        titulo: "Empleo",
        descripcion: "Desafíos adecuados a tu talento",
        texto: "Creamos un nuevo estilo en un ámbito muy competitivo. Esto requiere una gran iniciativa, mucho corazón y trabajo equipo. ¿Preparado/a para dar el salto?",
        boton: "Unete al equipo",
        link: "https://jobs.glovoapp.com/en/",
    },

];

var usuario =[];

var localstorage = window.localStorage;

if(localstorage.getItem('menu') == null){
    localstorage.setItem('menu', JSON.stringify(menu));
} else {
    menu = JSON.parse(localstorage.getItem('menu')); 
}

if(localstorage.getItem('publicidad') == null){
    localstorage.setItem('publicidad', JSON.stringify(publicidad));
} else {
    publicidad = JSON.parse(localstorage.getItem('publicidad')); 
}

if(localstorage.getItem('Restaurantes') == null){
    localstorage.setItem('Restaurantes', JSON.stringify(Restaurantes));
} else {
    Restaurantes = JSON.parse(localstorage.getItem('Restaurantes')); 
}

if(localstorage.getItem('usuario') == null){
    localstorage.setItem('usuario', JSON.stringify(usuario));
} else {
    usuario = JSON.parse(localstorage.getItem('usuario')); 
}

function generarMenu(){
    menu.forEach(function(menu){
        document.getElementById('menu').innerHTML+=
        `<div class="col-2" >
        <a href="${menu.enlace}" target="_blank"> <p><input id="menu1"  type="image" name="botondeenvio" src=${menu.imagen} alt="Enviar formulario">${menu.nombreCategoria}</p></a>
        </div>`;
    });
}
generarMenu();

function generarRestaurantes(){
    Restaurantes.forEach(function(resta){
        document.getElementById('restaurantes').innerHTML +=
        `<div class="col-4">
            <div class="card" id="cuadrosCard">
                <img src="${resta.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${resta.nombre}</h5>
                </div>
            </div>
        </div>`;
    })
}

generarRestaurantes();

function generarPublicidad(){
    publicidad.forEach(function(publi){
        document.getElementById('publicidad').innerHTML+=
        `<div class="col-4">
            <div class="card" >
            <img src="${publi.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title TituloCards">${publi.titulo}</h2>
                    <p class="descripcionCards">${publi.descripcion}</p>
                    <p class="card-text textoCards">${publi.texto}</p>
                    <button ${onclick}.href="${publi.link}" class="bottonCards">${publi.boton}</button>
                </div>
            </div>
        </div>`;
    })
}

generarPublicidad();

function guardar(){
    const app ={
        nombre: document.getElementById('nombreUser').value,
        email: document.getElementById('emailUser').value,
        contraseña: document.getElementById('passwordUser').value
    };

    usuario.push(app);
    localstorage.setItem('usuario' , JSON.stringify(usuario));
    generarMenu();
    generarPublicidad();
    generarRestaurantes();
    $('#modalEmpezar').modal('hide')
}