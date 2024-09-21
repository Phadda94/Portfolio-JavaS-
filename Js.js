let button = document.getElementById('btn');
let headList = document.getElementById('menu-bar');
let cvButton = document.getElementById('btn-box');

function showHeader () {
    if (window.innerWidth < 961) {
        headList.style.display ='flex'
    } 
}

function hideHeader() {
    if (window.innerWidth < 961) {
        headList.style.display = 'none';
    } else if (window.innerWidth > 961) {
        headList.style.display = 'clear';
    }
}


button.addEventListener('click', showHeader)
headList.addEventListener('mouseleave', hideHeader)


