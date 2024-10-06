let button = document.getElementById('btn');
let headList = document.getElementById('menu-bar');
let page = document.getElementById('content');

function showHeader () {
    if (window.innerWidth < 960) {
        headList.style.display = 'inline';
        button.style.display = 'none';
    }
}

function hideHeader () {
    if (window.innerWidth < 960) {
        headList.style.display = 'none';
        button.style.display = '';
    }
}

function showHeader2 () {
    if (window.innerWidth >= 960) {
        headList.style.display = '';
        button.style.display = 'none';
    } else {
        button.style.display = '';  // Riappare il bottone quando la finestra è più stretta di 960px
    }
}

// Eventi per mouse su button e headList
button.addEventListener('mouseenter', showHeader);
headList.addEventListener('mouseleave', hideHeader);

// Aggiungi un listener per la modifica della larghezza della finestra
window.addEventListener('resize', showHeader2);

// Esegui la funzione una volta al caricamento della pagina per verificare la larghezza iniziale
showHeader2();