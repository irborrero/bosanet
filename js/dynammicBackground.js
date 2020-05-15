$(document).ready(function(){
    var home = document.getElementById('home');
    var how_it_works = document.getElementById('how_it_works')
    var what_we_do = document.getElementById('what_we_do')
    var contact = document.getElementById('contact')

    var backgrounds = new Array( 'url(images/home/titulo5.png) no-repeat','url(images/home/titulo9.jpg) no-repeat');

    var current = 0;

    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        home.style.background = backgrounds[current]
        home.style.backgroundSize= "cover"
        home.style.transition = "1s"
    }

    setInterval(nextBackground, 6000);

    home.style.background = 'url(images/home/titulo5.png) no-repeat';
    home.style.backgroundSize= "cover";
    how_it_works.style.background = 'url(images/platfromBlack.png)' ;
    how_it_works.style.backgroundSize= "100vw";
    how_it_works.style.backgroundAttachment = "fixed";
    contact.style.background = 'url(images/contact-us.png)'
    contact.style.backgroundSize= "100vw";
    contact.style.backgroundAttachment = "fixed";
    what_we_do.style.background = 'url(images/platfromBlack.png)' ;
    what_we_do.style.backgroundSize= "100vw";
    what_we_do.style.backgroundAttachment = "fixed"

});