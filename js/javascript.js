/* НАЧАЛО АДАПТИВНАЯ КАРУСЕЛЬ нa owv-carousel */
$(document).ready(function() {

    var stuffOwl = $('.storestuff__cellswrap');
    stuffOwl.owlCarousel({
        loop:true,
        margin:16,
        dots:false,

        responsive:{
            0:{
                items:1
            },
            640: {
                items:2
            },
            961:{
                items:4
            }
        }
    });
    // Go to the next item
    $('.gallerynav__nextbox').click(function() {
        stuffOwl.trigger('next.owl.carousel', [300]);
    })
    // Go to the previous item
    $('.gallerynav__prevbox').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        stuffOwl.trigger('prev.owl.carousel', [300]);
    });
    var productsOwl = $('.storegallery__price-slide');
    productsOwl.owlCarousel({
        loop:true,
        margin:100,

        responsive:{
            0:{
                items:1
            },
            961:{
                items:1
            }
        }


    })



});