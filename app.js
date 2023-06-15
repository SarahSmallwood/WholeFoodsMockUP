function findStore(){
    var locate = document.querySelector('.store');
    locate.classList.toggle('locateStore');
}

const moveLogo = () => {
    let wholeFL = document.querySelector('.animateLogo')
    wholeFL.classList.toggle('move-animateLogo')
}
function showMenu(){
    var drop = document.querySelector('.dropdown');
    drop.classList.toggle('show');
}
function showOrder(){
    var about = document.querySelector('.order');
    var onlineOrd = about.style.display;
    var orderButton = document.querySelector('wholeFoods')

    if( onlineOrd === 'block'){
        about.style.display = 'none';
        orderButton.innerHTML = 'Show order';
    }
    else{
        about.style.display = 'block';
        orderButton.innerHTML = 'Hide order'
    }
}