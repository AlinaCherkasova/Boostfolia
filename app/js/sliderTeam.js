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