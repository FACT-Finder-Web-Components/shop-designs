import 'bootstrap/dist/js/bootstrap.min';
import './scss/styles.scss'
import './js/select-togglebutton';

jQuery(function ($) {
    let $body = $('body');

    $body.on('click', '.ff-asn-group', scrollToTop);

    $('.service-nav .card').on('click', '.card-header', function (e) {
        $(e.delegateTarget).toggleClass('collapsed');
    });

    $('#product-color, #product-size').togglebutton();
});

window.displaySpinner = (result) => {
    let spinner = document.querySelector('#spinnerWrapper'),
        page = result.paging ? result.paging : result;

    if (page.currentPage === page.pageCount) {
        spinner.style.display = "none";
    } else {
        spinner.style.display = "block";
    }
};

const scrollToTop = () => window.scrollTo(0, 0);


