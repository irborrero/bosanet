$(document).ready(function(){
    var home = document.getElementById('home');
    var how_it_works = document.getElementById('how_it_works')

    var backgrounds = new Array( 'url(images/home/titulo5.png)','url(images/home/titulo9.jpg)');

    var current = 0;

    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        home.style.background = backgrounds[current]
        home.style.backgroundSize= "cover"
        home.style.transition = "1s"
    }

    setInterval(nextBackground, 6000);

    home.style.background = 'url(images/home/titulo5.png)';
    home.style.backgroundSize= "cover";
    how_it_works.style.background = 'url(images/home/titulo5.png)';
    how_it_works.style.backgroundSize= "100vw";
});