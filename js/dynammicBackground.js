$(document).ready(function(){
    var home = document.getElementById('home');

    var backgrounds = new Array('url(images/img_3.jpg)', 'url(images/home.jpg)');

    var current = 0;

    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        home.style.background = backgrounds[current]
        home.style.backgroundSize= "cover"
        home.style.transition = "1s"
    }

    setInterval(nextBackground, 5000);

    home.style.background = 'url(images/home.jpg)';
    home.style.backgroundSize= "cover"

});