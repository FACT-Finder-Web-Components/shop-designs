
(function($, viewport) {
    $(document).ready(function(){
        const mobileMenuInput =  $('#navigation-menu');
        const mobileMenuLabel =  $('.ffw-navigation-label');

        $("#searchMobile").on('click', function() {
            $('.searchbar').slideToggle(300);
            }
        );

        if (viewport.is('<=md')) {
            mobileMenuInput.click();
            mobileMenuLabel.hide();
        }

        $(window).resize(
            viewport.changed(function() {
                console.log(viewport.current());
                if(viewport.is('<=md')) {
                    mobileMenuInput.click();
                    mobileMenuLabel.hide();
                }
            })
        );
    });

})(jQuery, ResponsiveBootstrapToolkit);
