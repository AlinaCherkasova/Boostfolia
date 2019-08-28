function toggleCard(){
    let container = document.querySelector('.plans__contentWrapper');
    let card = container.getElementsByClassName('plans__cardWrapper');

    for(var i = 0; i < card.length; i++ ){
        card[i].addEventListener('click', function(){
            let active = document.getElementsByClassName('active');
            active[0].className = active[0].className.replace(' active','');
            this.className += ' active';
        });
    };
};
toggleCard();