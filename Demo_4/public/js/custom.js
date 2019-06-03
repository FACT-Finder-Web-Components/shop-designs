
(function($, viewport) {

    $(document).ready(function(){
        // const navComponent = $('ff-navigation');
        const navbar = $('#categoriesNavigation');
        const mobileMenuInput =  $('#navigation-menu');
        const mobileMenuLabel =  $('.ffw-navigation-label');

        $("#searchMobile").on('click', function() {
            $('.searchbar').slideToggle(300);
            }
        );

        if (viewport.is('>md')) {
            // navComponent.data('layout','horizontal');
            // navbar.removeClass('collapse');
            // navComponent.attr('mobile','false');
            // navComponent.attr('flyout','true');
        } else {
            // navComponent.data('layout','vertical');
            mobileMenuInput.click();
            mobileMenuLabel.hide();
            // navComponent.attr('mobile','true');
            // navComponent.attr('flyout','false');
        }


        $(window).resize(
            viewport.changed(function() {
                console.log(viewport.current());
                if(viewport.is('>md')) {
                    // navComponent.attr('layout','horizontal');
                    // navbar.removeClass('collapse');
                    // navComponent.attr('mobile','false');
                } else {
                    // navComponent.attr('layout','vertical');
                    // navComponent.attr('mobile','true');
                    mobileMenuInput.click();
                    mobileMenuLabel.hide();
                   // navbar.removeClass('collapse');
                }
            })
        );
    });

})(jQuery, ResponsiveBootstrapToolkit);
