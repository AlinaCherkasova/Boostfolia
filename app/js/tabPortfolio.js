function togglePortfolio(){
    let container = document.querySelector('.portfolio__list');
    let card = container.getElementsByClassName('portfolio__items');

    for(var i = 0; i < card.length; i++ ){
        card[i].addEventListener('click', function(){
            let active = document.getElementsByClassName('active');
            active[0].className = active[0].className.replace(' active','');
            this.className += ' active';
        });
    };
};
togglePortfolio();