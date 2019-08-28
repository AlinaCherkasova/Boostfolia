function infinitySlider(){
    let images = document.querySelectorAll('.header__slider img');
    let current = 0;

    function slider(){
        for(let i = 0; i < images.length; i++){
            images[i].classList.add('opacity0');
        }
        images[current].classList.remove('opacity0');

        if(current + 1 == images.length){
            current = 0;
        }else{
            current++
        }
    }
    let timer = setTimeout(function sliderTime(){
        slider();
        timer = setTimeout(sliderTime, 5000);
    }, 5000);
}
infinitySlider();
function carousel(){
    let block = document.querySelector('.carousel__slider');
    let prev = document.querySelector('.carousel__arrow_prev').onclick = sliderLeft;
    let next = document.querySelector('.carousel__arrow_next').onclick = sliderRight;
    let left = 0

    function sliderLeft(){
        left -= 696;
        if(left < -696){
            left = 0;
        }
        block.style.left = left + 'px'
    }
    function sliderRight(){
        left += 696;
        if(left > 0){
            left = -696;
        }
        block.style.left = left + 'px'
    }
}
carousel();
function openTab(event, tabId){
    let tabcontent = document.getElementsByClassName('skills');
    for(var i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }
    
    let tablinks = document.getElementsByClassName('cardProfile__sliderRadio');
    for(var i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace('check', '')
    }
    let openTabId = document.getElementById(tabId);
    event.currentTarget.className += ' check';
    openTabId.style.display = 'block';
}
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
function toggleBlog(){
    let img = document.querySelectorAll('.blog__cardImgWrap img');
    let links = document.querySelectorAll('.blog__cardLinks');

    // for(let i = 0; i < img.length; i++){
    //     img[i].addEventListener('mouseover', function(){
    //         img[i].style.filter = 'blur(5px)';
    //         links[i].style.visibility = 'visible';
    //     });
    //     img[i].addEventListener('mouseout', function(){
    //         img[i].style.filter = 'blur(0px)';
    //         links[i].style.visibility = 'hidden';
    //     });
    // }
};
toggleBlog();
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
function valid(form){
    let name = document.querySelector('#name').value;
    let mail = document.querySelector('#mail').value;
    let message = document.querySelector('#message').value;
    let pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

    if(name.length < 2 || name.lenght > 15) {
        alert("Your name is not correct");
        return false;
    } else if(pattern.test(mail) == false){
        alert("Your e-mail is not correct");
        return false;
    } else if(message == '' || message == " "){
        alert("You don't write the message");
        return false;
    } else{
        return true;
    }
}
function toggleHamburger() {
	let hamburger = {
		navToggle: document.querySelector('.nav__toggle'),
		overlay: document.querySelector('.overlay'),
		menu: document.querySelector('.menu'),

		doToggle: function(e) {
			e.preventDefault();
			this.navToggle.classList.toggle('active');
			this.overlay.classList.toggle('active');
			this.menu.classList.toggle('active');
		}
	};
	hamburger.navToggle.addEventListener('click', function(e) { 
		hamburger.doToggle(e);
	});
};
toggleHamburger();

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