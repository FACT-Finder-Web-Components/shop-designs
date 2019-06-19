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

function showSearchResult() {
    var main = document.querySelector("#searchResult");
    main.style.display = "";
    main.style.opacity = "1";
}

function showSection(event, sectionId) {
    event.preventDefault();
    const sections = ['homePage','searchResult'];
    var section = document.querySelector('#' + sectionId);
    section.style.display = "";
    section.style.opacity = "1";

    sections.map(section => {
        if (section !== sectionId) {
            jQuery('#' + section).css('display', 'none');
        }
    })
}