jQuery(function ($) {
    let $body = $('body');

    $body.on('click', '.see-all-link', (e) => {
        showSection(e, 'searchResult')
    });

    $body.on('click', '.ff-asn-group', scrollToTop);

    $('.service-nav .card').on('click', '.card-header', function (e) {
        $(e.delegateTarget).toggleClass('collapsed');
    });

    $('#product-color, #product-size').togglebutton();
});

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
    scrollToTop();
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

const scrollToTop = () => window.scrollTo(0, 0);
