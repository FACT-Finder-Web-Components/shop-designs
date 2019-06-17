(function ($, viewport) {
    $(document).ready(function () {
        let mobileMenuInput = $('#navigation-menu'),
            mobileMenuLabel = $('.ffw-navigation-label'),
            searchbarIcon = $('#searchMobile'),
            searchbar = $('.searchbar');

        mobileMenuInput.click();
        changeViewport();

        searchbarIcon.on('click', function () {
            searchbar.slideToggle(200);
        });

        $('.service-nav .card').on('click', '.card-header', function (e) {
            $(e.delegateTarget).toggleClass('collapsed');
        });

        $(window).resize(
            viewport.changed(function () {
                changeViewport();
            })
        );

        function changeViewport() {
            if (viewport.is('<=md')) {
                searchbar.hide();
                mobileMenuLabel.hide();
            } else {
                searchbar.show();
            }
        }
    });

})(jQuery, ResponsiveBootstrapToolkit);
