/*
Theme Name: ARD
Description: Architecture Template
Author: Rafava
Version: 1.2
*/

/* ==================================================================

 * Table of Contents:
 *
 * 1.0 - Menu features
 * 2.0 - Multiscroll
 * 3.0 - Reverse sections
 * 4.0 - Detect mobile
 * 5.0 - Resize
 * 6.0 - Close button projects
 * 7.0 - Section image background
 * 8.0 - Fade in-out projects sections
 * 9.0 - Bigtext
 * 10.0- Homeheight owl-carousel
 * 11.0- Design owl-carousel
 * 12.0- Scroll down-up
 * 13.0- Team lightbox
 * 14.0- Design lightbox
 * 15.0- Map lightbox
 * 17.0- Contact form
 * 18.0- Add #first on load

================================================================== */

$(document).ready(function() {
    "use strict";

    //MENU FEATURES
    function homeheightmenu() {
        $(".home-link").css({
            "margin-top": -1 * $(".home-link").height() / 2 + "px"
        });
        $(".home-height").css({
            height: $(window).outerHeight(true)
        });
    }
    homeheightmenu();

    //MULTISCROLL
    $('#main-container').multiscroll({
        sectionsColor: ['white','white','white','white','white','white'],
        anchors: ['first','second','third','fourth','fifth','sixth'],
        easing:'easeInOutCubic',
        menu:'.menu-left',
        scrollingSpeed: 1000,
        afterLoad: function(anchorLink, index) {
            $(".loader-frame").fadeOut();
            if (index == 1){
                if ($(window).width() <= 1024) {
                $(".loader-background").animate({width:'0%'},600,'swing').fadeOut();
                $('.updown-navigation').fadeOut(450);
                $('.menu-left').fadeOut(450);
                }
                else{
                $(".loader-background").animate({width:'40%'},600,'swing').fadeOut();
                $('.updown-navigation').fadeOut(450);
                $('.menu-left').fadeOut(450);
                }
            } else{
                $('.updown-navigation').fadeIn(450);
                $('.menu-left').fadeIn(450);
            }
            sectionimage(anchorLink, index);
            naviclose(anchorLink, index);
        }
    });

    //REVERSE SECTIONS (MOBILE)
    function reverseSection() {
        if ($(window).width() <= 1024) {
            $("#right2").insertAfter("#right1");
            $("#right3").insertAfter("#right2");
            $("#right4").insertAfter("#right3");
            $("#right5").insertAfter("#right4");
            $("#right6").insertAfter("#right5");
        } else {
            $("#right2").insertBefore("#right1");
            $("#right3").insertBefore("#right2");
            $("#right4").insertBefore("#right3");
            $("#right5").insertBefore("#right4");
            $("#right6").insertBefore("#right5");
        }
    }
    reverseSection();

    //DETECT MOBILE
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    if(isMobile.iOS()) {
        if ($(window).width() <= 1024) {
          $('html, body').css({
            'overflow' : 'auto',
            'height' : 'auto'
          });
        }
    }
    if(isMobile.any()){}else{
        $(window).resize(function(){
            reverseSection();
            $(".active .vegas-slide-inner").css("animation","0");
        });
    }
    if ((window.screen.width > 1024)  || (window.screen.height > 1024)){
        $(window).on("orientationchange",function(){
            location.reload();
        });
    }

    //RESIZE
    $(window).resize(function(){
        homeheightmenu();
    });

    //CLOSE BUTTON PROJECTS
    function naviclose(anchorLink, index) {
        if ($(window).width() > 1024) {
            if (index == 4){
                $('.section-projects .navigation').fadeIn('slow');
            } else{
                $('.section-projects .navigation').fadeOut('slow');
            }
        }
    }

    //SECTION IMAGE BACKGROUND
    function sectionimage(anchorLink, index){
        //ABOUT
        if (index == 2){
            $("#left2").vegas({
                slides: [
                { src:  "./img/backgrounds/about-left.jpg"  },
                ],
                delay: 7000,
                cover:false,
                align:'right',
                timer:false,
                animation: [ 'kenburns' ]
            });
            $("#right2").vegas({
                slides: [
                { src: "./img/backgrounds/about-right.jpg" },
                ],
                delay: 7000,
                cover:false,
                align:'left',
                timer:false,
                animation: [ 'kenburns' ]
            });
        }
        //DESIGN
        if (index == 3){
            $("#left3").vegas({
                slides: [
                { src: "./img/backgrounds/design-left.jpg" },
                ],
                delay: 7000,
                cover:false,
                align:'right',
                timer:false,
                animation: [ 'kenburns' ]
            });
            $("#right3").vegas({
                slides: [
                { src: "./img/backgrounds/design-right.jpg" },
                ],
                delay: 7000,
                cover:false,
                align:'left',
                timer:false,
                animation: [ 'kenburns' ]
            });
        }
        //PROJECTS
        if (index == 4){
            $("#left4").vegas({
                slides: [
                  { src: "./img/background-left.jpg" },//MAIN BACKGROUND
                  { src: "./img/background-left.jpg" },//PROJECT 1
                  { src: "./img/background-left.jpg" },//PROJECT 2
                  { src: "./img/background-left.jpg" } //PROJECT 3
                ],
                delay: 7000,
                cover:false,
                autoplay:false,
                align:'right',
                timer:false,
                animation: [ 'kenburns' ]
            });
            $("#right4").vegas({
                slides: [
                { src: "./img/background-right.jpg" },//MAIN BACKGROUND
                { src: "./img/background-right.jpg" },//PROJECT 1
                { src: "./img/background-right.jpg" },//PROJECT 2
                { src: "./img/background-right.jpg" } //PROJECT 3
                ],
                delay: 7000,
                cover:false,
                autoplay:false,
                align:'left',
                timer:false,
                animation: [ 'kenburns' ]
            });
        }
        //SERVICES
        if (index == 5){
            $("#left5").vegas({
                slides: [
                  { src: "./img/background-left.jpg" },
                ],
                delay: 7000,
                cover:false,
                align:'right',
                timer:false,
                animation: [ 'kenburns' ]
            });
            $("#right5").vegas({
                slides: [
                { src: "./img/background-right.jpg" },
                ],
                delay: 7000,
                cover:false,
                align:'left',
                timer:false,
                animation: [ 'kenburns' ]
            });
        }
        //CONTACT
        if (index == 6){
            $("#left6").vegas({
                slides: [
                  { src: "./img/background-left.jpg" },
                ],
                delay: 7000,
                cover:false,
                align:'right',
                timer:false,
                animation: [ 'kenburns' ]
            });
            $("#right6").vegas({
                slides: [
                { src: "./img/background-right.jpg" },
                ],
                delay: 7000,
                cover:false,
                align:'left',
                timer:false,
                animation: [ 'kenburns' ]
            });
        }
    }

    //FADE IN-OUT PROJECTS SECTIONS
    $('.projects-link-1').on("click", function(e) {
        if (nodoubleclick) return;
        nodoubleclick = true;
        e.preventDefault();
        $('.section-one').fadeOut( 650, function(){
            $('.section-two').addClass('active-section');
            $('.section-two').hide().fadeIn(850);
            if ($(window).width() > 1024) {
            $('#left4').vegas('options', 'transition', 'slideLeft2').vegas('jump',1);//PROJECT 1
            $('#right4').vegas('options', 'transition', 'slideRight2').vegas('jump',1);//PROJECT 1
            }
        });
    });
    $('.projects-link-2').on("click", function(e) {
        if (nodoubleclick) return;
        nodoubleclick = true;
        e.preventDefault();
        $('.section-one').fadeOut( 650, function(){
            $('.section-three').addClass('active-section');
            $('.section-three').hide().fadeIn(850);
            if ($(window).width() > 1024) {
            $('#left4').vegas('options', 'transition', 'slideLeft2').vegas('jump',2);//PROJECT 2
            $('#right4').vegas('options', 'transition', 'slideRight2').vegas('jump',2);//PROJECT 2
            }
        });
    });
    $('.projects-link-3').on("click", function(e) {
        if (nodoubleclick) return;
        nodoubleclick = true;
        e.preventDefault();
        $('.section-one').fadeOut( 650, function(){
            $('.section-four').addClass('active-section');
            $('.section-four').hide().fadeIn(850);
            if ($(window).width() > 1024) {
            $('#left4').vegas('options', 'transition', 'slideLeft2').vegas('jump',3);//PROJECT 3
            $('#right4').vegas('options', 'transition', 'slideRight2').vegas('jump',3);//PROJECT 3
            }
        });
    });
    $('.close-projects').on("click", function(e) {
        nodoubleclick = false;
        e.preventDefault();
        $('.active-section').fadeOut( 650, function(){
            $(this).removeClass('active-section');
            $('.section-one').hide().fadeIn(850);
            if ($(window).width() > 1024) {
            $('#left4').vegas('options', 'transition', 'slideLeft2').vegas('jump',0);//MAIN BACKGROUND
            $('#right4').vegas('options', 'transition', 'slideRight2').vegas('jump',0);//MAIN BACKGROUND
            }
        });
    });var nodoubleclick = false;

    //BIGTEXT
    $('.home-name').bigtext({
        maxfontsize: 115
    });
    $('.home-sub-a').bigtext({
        maxfontsize: 85
    });

    //HOMEHEIGHT OWL-CAROUSEL
    var homeheight = $("#home-carousel");
    homeheight.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        items: 3,
        pagination: false,
        autoHeight: true,
        itemsDesktop : [1200,2]
    });
    $(".home-navigation ul .next").on("click", function() {
        homeheight.trigger("owl.next");
    });
    $(".home-navigation ul .prev").on("click", function() {
        homeheight.trigger("owl.prev");
    });

    //DESIGN OWL-CAROUSEL
    var design = $("#design-carousel");
    design.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        items: 3,
        pagination: false,
        itemsDesktop : [1200,3]
    });
    $(".navigation ul .next").on("click", function() {
        design.trigger("owl.next");
    });
    $(".navigation ul .prev").on("click", function() {
        design.trigger("owl.prev");
    });

    //SERVICES OWL-CAROUSEL
    var services = $("#services-carousel");
    services.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        items: 3,
        pagination: false,
        itemsDesktop : [1400,2]
    });
    $(".navigation ul .next").on("click", function() {
        services.trigger("owl.next");
    });
    $(".navigation ul .prev").on("click", function() {
        services.trigger("owl.prev");
    });

    //SCROLL DOWN-UP
    $(".updown-navigation ul .up").on("click", function() {
        $('#main-container').multiscroll.moveSectionUp();
    });
    $(".updown-navigation ul .down").on("click", function() {
        $('#main-container').multiscroll.moveSectionDown();
    });

    //TEAM LIGHTBOX
    $('.about-popup-link').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade',
        removalDelay: 400
    });

    //DESIGN IMAGES LIGHTBOX
    $('.design-popup-link').magnificPopup({
        type:'image',
        mainClass: 'mfp-fade',
        removalDelay: 400
    });

    //CONTACT FORM
    $("input,textarea").jqBootstrapValidation({

        preventSubmit: true,
        submitError: function($form, event, errors) {
        },
        submitSuccess: function($form, event) {
        event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#message").val();
        var firstName = name;
        if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
        }
        $.ajax({
                url: "./js/mailer.php",
                type: "POST",
                data: {name: name, email: email, message: message},
                cache: false,
                success: function() {
                // Success message
                $('#success').html("<div class='alert alert-success'>");
                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append( "</button>");
                $('#success > .alert-success').append("Your message has been sent. ");
                $('#success > .alert-success').append('</div>');
                //clear all fields
                $('#contactForm').trigger("reset");
                },
                error: function() {
                // Fail message
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append( "</button>");
                $('#success > .alert-danger').append("Sorry "+firstName+" it seems that my mail server is not responding");
                $('#success > .alert-danger').append('</div>');
                //clear all fields
                $('#contactForm').trigger("reset");
                },
                })
                },
                filter: function() {
                return $(this).is(":visible");
                },
                });
        $("a[data-toggle=\"tab\"]").on("click", function(e) {
                e.preventDefault();
                $(this).tab("show");
        });
        $('#name').on("focus", function() {
        $('#success').html('');

    });

});

$(window).load(function() {
    "use strict";

   //ADD #FIRST ON LOAD
   window.location.hash = '';
   window.location.hash = "first";

});