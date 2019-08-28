function toggleMap(){
    window.onload= function() {
        document.querySelector('.map__link').onclick = function() {
            let img = document.querySelector('.map__arrow');
            openbox('boxMap', img);
            return false;
        };
    };

    function openbox(id, toggler) {
        let div = document.getElementById(id);
        if(div.style.display == 'block') {
            div.style.display = 'none';
            toggler.style.transform = 'rotate(0deg)';
        }
        else {
            div.style.display = 'block';
            div.style.transition = '0.5s';
            toggler.style.transition = '0.5s';
            toggler.style.transform = 'rotate(180deg)';
        }
    }
}
toggleMap();