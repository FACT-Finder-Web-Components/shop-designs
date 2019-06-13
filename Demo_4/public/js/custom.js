(function ($, viewport) {
    $(document).ready(function () {
        var mobileMenuInput = $('#navigation-menu');
        var mobileMenuLabel = $('.ffw-navigation-label');

        $("#searchMobile").on('click', function () {
            $('.searchbar').slideToggle(300);
        });

        if (viewport.is('<=md')) {
            mobileMenuInput.click();
            mobileMenuLabel.hide();
        }

        $('.service-nav .card').on('click', '.card-header', function (e) {
            $(e.delegateTarget).toggleClass('collapsed');
        });

        $(window).resize(
            viewport.changed(function () {
                if (viewport.is('<=md')) {
                    mobileMenuInput.click();
                    mobileMenuLabel.hide();
                }
            })
        );
    });

})(jQuery, ResponsiveBootstrapToolkit);
