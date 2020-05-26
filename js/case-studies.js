$(document).ready(function(){

    //SELECTING DOM BOXES

    //Brands boxes
    var csbrands1 = document.getElementById('cs-brands-1');
    var csbrands2 = document.getElementById('cs-brands-2');
    var csbrands3 = document.getElementById('cs-brands-3');
    var csbrands4 = document.getElementById('cs-brands-4');
    var csbrands5 = document.getElementById('cs-brands-5');

    //Businesses boxes
    var csbus1 = document.getElementById('cs-business-1');
    var csbus2 = document.getElementById('cs-business-2');
    var csbus3 = document.getElementById('cs-business-3');

    //Client boxes
    var cscli1 = document.getElementById('cs-clients-1');
    var cscli2 = document.getElementById('cs-clients-2');
    var cscli3 = document.getElementById('cs-clients-3');
    var cscli4 = document.getElementById('cs-clients-4');
    var cscli5 = document.getElementById('cs-clients-5');
    var cscli6 = document.getElementById('cs-clients-6');
    var cscli7 = document.getElementById('cs-clients-7');
    var cscli8 = document.getElementById('cs-clients-8');



    //SELECTING IMAGES FOR EACH BOX
    //Brands boxes
    var icsbrands1 = new Array(
        'images/case_studies/brands/group1/alpina.png',
               'images/case_studies/brands/group1/delSur.png',
               'images/case_studies/brands/group1/guarana.png');
    var icsbrands2 = new Array(
        'images/case_studies/brands/group2/garoto.png',
        'images/case_studies/brands/group2/nestle.png',
        'images/case_studies/brands/group2/superloss.png');
    var icsbrands3 = new Array(
        'images/case_studies/brands/group3/art-biography.png',
        'images/case_studies/brands/group3/camil.png',
        'images/case_studies/brands/group3/selmi.png');
    var icsbrands4 = new Array(
        'images/case_studies/brands/group4/lacta.png',
        'images/case_studies/brands/group4/superloss.png',
        'images/case_studies/brands/group4/true-ideology.png');
    var icsbrands5 = new Array(
        'images/case_studies/brands/group5/arepa.png',
        'images/case_studies/brands/group5/guarana.png',
        'images/case_studies/brands/group5/renata.png');

    //Brands boxes
    var icsbus1 = new Array(
        'images/case_studies/businesses/group1/cien.png',
        'images/case_studies/businesses/group1/nutreya.png',
        'images/case_studies/businesses/group1/delSur.png');
    var icsbus2 = new Array(
        'images/case_studies/businesses/group2/ivpSport.png',
        'images/case_studies/businesses/group2/logistic-alliance.png',
        'images/case_studies/businesses/group2/serlatina.png');
    var icsbus3 = new Array(
        'images/case_studies/businesses/group3/delSur.png',
        'images/case_studies/businesses/group3/ivp-travels.png',
        'images/case_studies/businesses/group3/logistic-alliance.png');

    //Client Boxes
    var icscli1 = new Array(
        'images/case_studies/clients/group1/crategory.png',
        'images/case_studies/clients/group1/krasdale.png',
        'images/case_studies/clients/group1/unifi.png');
    var icscli2 = new Array(
        'images/case_studies/clients/group2/amazon.png',
        'images/case_studies/clients/group2/kroger.png',
        'images/case_studies/clients/group2/walgreens.png');
    var icscli3 = new Array(
        'images/case_studies/clients/group3/kehe.png',
        'images/case_studies/clients/group3/target.png',
        'images/case_studies/clients/group3/walmart.png');
    var icscli4 = new Array(
        'images/case_studies/clients/group4/cheney.png',
        'images/case_studies/clients/group4/smoothieKing.png',
        'images/case_studies/clients/group4/sysco.png');
    var icscli5 = new Array(
        'images/case_studies/clients/group5/heb.png',
        'images/case_studies/clients/group5/publix.png',
        'images/case_studies/clients/group5/unifiedgroc.png');
    var icscli6 = new Array(
        'images/case_studies/clients/group6/jetro.png',
        'images/case_studies/clients/group6/pathmark.png',
        'images/case_studies/clients/group6/wholefoods.png');
    var icscli7 = new Array(
        'images/case_studies/clients/group7/cvs.png',
        'images/case_studies/clients/group7/shaws.png',
        'images/case_studies/clients/group7/trader.png');
    var icscli8 = new Array(
        'images/case_studies/clients/group8/fogo.png',
        'images/case_studies/clients/group8/texas.png',
        'images/case_studies/clients/group8/winn.png');


    //SETTING COUNTERS

    //Brand boxes
    var ccsbrands1 = 0;
    var ccsbrands2 = 0;
    var ccsbrands3 = 0;
    var ccsbrands4 = 0;
    var ccsbrands5 = 0;

    //Business boxes
    var ccsbus1 = 0;
    var ccsbus2 = 0;
    var ccsbus3 = 0;

    //Client boxes
    var ccscli1 = 0;
    var ccscli2 = 0;
    var ccscli3 = 0;
    var ccscli4 = 0;
    var ccscli5 = 0;
    var ccscli6 = 0;
    var ccscli7 = 0;
    var ccscli8 = 0;



    //ALTERNATING IMAGES - 1
    function nextImage() {

        //Brand boxes -------------------------------------------------------------------------
        ccsbrands2++;
        ccsbrands2 = ccsbrands2 % icsbrands2.length;
        csbrands2.src = icsbrands2[ccsbrands2]
        csbrands2.style.transition = "1s"

        ccsbrands4++;
        ccsbrands4 = ccsbrands4 % icsbrands4.length;
        csbrands4.src = icsbrands4[ccsbrands4]
        csbrands4.style.transition = "1s"

        ccsbrands5++;
        ccsbrands5 = ccsbrands5 % icsbrands5.length;
        csbrands5.src = icsbrands5[ccsbrands5]
        csbrands5.style.transition = "1s"

        //Business boxes -------------------------------------------------------------------------

        ccsbus2++;
        ccsbus2 = ccsbus2 % icsbus2.length;
        csbus2.src = icsbus2[ccsbus2]
        csbus2.style.transition = "1s"

        ccsbus3++;
        ccsbus3 = ccsbus3 % icsbus3.length;
        csbus3.src = icsbus3[ccsbus3]
        csbus3.style.transition = "1s"

        //Client boxes -------------------------------------------------------------------------
        ccscli1++;
        ccscli1 = ccscli1 % icscli1.length;
        cscli1.src = icscli1[ccscli1]
        cscli1.style.transition = "1s"

        ccscli2++;
        ccscli2 = ccscli2 % icscli2.length;
        cscli2.src = icscli2[ccscli2]
        cscli2.style.transition = "1s"

        ccscli5++;
        ccscli5 = ccscli5 % icscli5.length;
        cscli5.src = icscli5[ccscli5]
        cscli5.style.transition = "1s"

    }

    //ALTERNATING IMAGES - 2
    function nextImage1() {

        //Brand boxes -------------------------------------------------------------------------
        ccsbrands1++;
        ccsbrands1 = ccsbrands1 % icsbrands1.length;
        csbrands1.src = icsbrands1[ccsbrands1]
        csbrands1.style.transition = "1s"


        ccsbrands3++;
        ccsbrands3 = ccsbrands3 % icsbrands3.length;
        csbrands3.src = icsbrands3[ccsbrands3]
        csbrands3.style.transition = "1s"



        //Business boxes -------------------------------------------------------------------------
        ccsbus1++;
        ccsbus1 = ccsbus1 % icsbus1.length;
        csbus1.src = icsbus1[ccsbus1]
        csbus1.style.transition = "1s"

        ccsbus3++;
        ccsbus3 = ccsbus3 % icsbus3.length;
        csbus3.src = icsbus3[ccsbus3]
        csbus3.style.transition = "1s"

        //Client boxes -------------------------------------------------------------------------
        ccscli3++;
        ccscli3 = ccscli3 % icscli3.length;
        cscli3.src = icscli3[ccscli3]
        cscli3.style.transition = "1s"

        ccscli4++;
        ccscli4 = ccscli4 % icscli4.length;
        cscli4.src = icscli4[ccscli4]
        cscli4.style.transition = "1s"


        ccscli6++;
        ccscli6 = ccscli6 % icscli6.length;
        cscli6.src = icscli6[ccscli6]
        cscli6.style.transition = "1s"

        ccscli7++;
        ccscli7 = ccscli7 % icscli7.length;
        cscli7.src = icscli7[ccscli7]
        cscli7.style.transition = "1s"

        ccscli8++;
        ccscli8 = ccscli8 % icscli8.length;
        cscli8.src = icscli8[ccscli8]
        cscli8.style.transition = "1s"
    }

    setInterval(nextImage, 7000);
    setInterval(nextImage1, 3000);


    //SETTING UP INITIAL IMAGE

    //Brand boxes
    csbrands1.src = 'images/case_studies/brands/group1/alpina.png';
    csbrands2.src = 'images/case_studies/brands/group2/garoto.png';
    csbrands3.src = 'images/case_studies/brands/group3/art-biography.png';
    csbrands4.src = 'images/case_studies/brands/group4/lacta.png';
    csbrands5.src = 'images/case_studies/brands/group5/arepa.png';

    //Business boxes
    csbus1.src = 'images/case_studies/businesses/group1/cien.png';
    csbus2.src = 'images/case_studies/businesses/group2/ivpSport.png';
    csbus3.src = 'images/case_studies/businesses/group3/delSur.png';

    //Client boxes
    cscli1.src = 'images/case_studies/clients/group1/crategory.png';
    cscli2.src = 'images/case_studies/clients/group2/amazon.png';
    cscli3.src = 'images/case_studies/clients/group3/kehe.png';
    cscli4.src = 'images/case_studies/clients/group4/cheney.png';
    cscli5.src = 'images/case_studies/clients/group5/heb.png';
    cscli6.src = 'images/case_studies/clients/group6/jetro.png';
    cscli7.src = 'images/case_studies/clients/group7/cvs.png';
    cscli8.src = 'images/case_studies/clients/group8/fogo.png';
});