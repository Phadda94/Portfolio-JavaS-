let button = document.getElementById('btn');
let headList = document.getElementById('menu-bar');
let cvButton = document.getElementById('btn-box');




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


button.addEventListener('click', showHeader);

headList.addEventListener('mouseleave', hideHeader);


