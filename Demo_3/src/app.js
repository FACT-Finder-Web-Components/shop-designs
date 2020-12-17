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

const scrollToTop = () => window.scrollTo(0, 0);

document.querySelector("ff-suggest").addEventListener("suggest-item-clicked", function (event) {
    const ffSuggestItem = event.detail.element;
    const suggestionData = event.detail.suggestion;
    if (suggestionData.type === "productName") {
        ffSuggestItem.ffPreventDefault = true;
    }
});
