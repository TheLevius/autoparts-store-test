/* НАЧАЛО АДАПТИВНАЯ КАРУСЕЛЬ нa owv-carousel */
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsive:{
            0:{
                items:1
            },
            1440:{
                items:1
            }
        }


    })
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.nextslidepos').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.prevslidepos').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })


});