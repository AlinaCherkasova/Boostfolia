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