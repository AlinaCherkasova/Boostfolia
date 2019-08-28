function counter(){
    let numContainer = document.getElementsByClassName('features__cardWrapper');
    let plus = document.querySelector('.features__span');
    for(var i = 0; i < numContainer.length; i++){
        let number = numContainer[i].querySelector('.features__value');
        let numberTop = number.getBoundingClientRect().top;
        let start = +number.innerHTML;
        let end =  +number.getAttribute('data-max');
        let step = 1000 / end  * 2;
        window.addEventListener('scroll', function onScroll(){
            if(window.pageYOffset > numberTop - window.innerHeight / 2){
                this.removeEventListener('scroll', onScroll);
                let interval = setInterval(function(){
                    number.innerHTML = ++start;
                    if(start == end){
                        clearInterval(interval)
                    }
                    if(start == end && end == 100){
                        plus.style.display = 'block';
                    }
                }, step)
            };
        });
    };
};
counter();