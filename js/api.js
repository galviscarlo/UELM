'use strict'

const galery = document.querySelector ('.galery');
const feed = document.querySelector('.contenedor-galery');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
/* agregar token mediante variable de entorno (PHP)*/
const token = '/'
/*documentacion de la api de visualizacion basica de instagram*/
const url = '/'

fetch(url)
.then(res => res.json())
.then( data => CrearHtml(data))

function CrearHtml(data){
    for (const img of data) {
        galery.innerHTML += `
        <div class="image overflow">
        <img loading="lazy" src="${img.media_url}" alt="">
        <div class="opacity-hover">
         <a href="${img.permalink}" class="caption">
          <p>
            ${img.caption.slice(0, 100)}
         </p>
         </a>
        </div>
        </div>
        `;
    }
}