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

        factfinder.communication.ResultDispatcher.subscribe('suggest', function (suggestion) {
            suggestion.forEach(function (element) {
                if (element.type == 'searchTerm') {
                    element.name = element.name.charAt(0).toUpperCase() + element.name.slice(1).toLowerCase();
                }
            });
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

        $('#product-color, #product-size').togglebutton();
    });

})(jQuery, ResponsiveBootstrapToolkit);
