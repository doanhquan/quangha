$(document).ready(function () {
    
   //isotope

    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    // Owl-carousel
   $('.tool-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            },
            768: {
                items: 4
            }
           
        }
    })


//
    // sticky navigation menu

    let nav_offset_top = $('.main-menu').height() + 50;

    function navbarFixed() {
        if ($('.main-menu').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.main-menu ').addClass('navbar_fixed');
                    $('.navbar_fixed').css('padding','0')

                } else {
                    $('.main-menu').removeClass('navbar_fixed');
                    
                
                }
            })
        }
    }

    navbarFixed();




});

