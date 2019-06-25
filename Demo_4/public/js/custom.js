(function ($, viewport) {
    $(document).ready(function () {
        let mobileMenuInput = $('#navigation-menu'),
            mobileMenuLabel = $('.ffw-navigation-label'),
            searchbarIcon = $('#searchMobile'),
            searchbar = $('#searchbar'),
            navMenuIcon = $('#navMenuIcon');

        mobileMenuInput.click(); //show ff-navigation mobile menu
        changeViewport();

        searchbarIcon.on('click', function () {
            document.querySelector('#categoriesNavigation').classList.remove('show');
            searchbar.slideToggle(200);
        });

        navMenuIcon.on('click', function () {
            searchbar.hide();
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

        $('#product-color, #product-size').togglebutton();
    });
})(jQuery, ResponsiveBootstrapToolkit);

const showSection = (event, sectionId) => {
    if (event.preventDefault !== undefined) {
        event.preventDefault();
    }
    let section = document.querySelector('#' + sectionId);
    section.style.display = "";
    section.style.opacity = "1";

    ['homePage', 'searchResult'].map(section => {
        if (section !== sectionId) {
            document.querySelector('#' + section).style.display = "none";
        }
    });
    window.scrollTo(0, 0);
};

const displaySpinner = (result) => {
    let spinner = document.querySelector('#spinnerWrapper'),
        page = result.paging ? result.paging : result;

    if (page.currentPage === page.pageCount) {
        spinner.style.display = "none";
    } else {
        spinner.style.display = "block";
    }
};
