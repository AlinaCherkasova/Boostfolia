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