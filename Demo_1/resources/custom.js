function showProductDetail(event) {
    var ffRecord = event.currentTarget;
    var recordData = ffRecord.recordData;
    var main = document.querySelector("#searchResult");
    main.style.opacity = "0";

    var section = document.querySelector("#productDetail");
    section.style.opacity = "0";
    section.style.display = "";

    setTimeout(function () {
        main.style.display = "none";
        var productFfRecord = section.querySelector("ff-record");
        productFfRecord.recordData = ffRecord.recordData;
        section.querySelector("ff-recommendation").recordId = recordData.id;
        section.style.opacity = "1";
    }, 300);
}

function hideProductDetail() {
    document.querySelector("#productDetail").style.display = "none";
}

function showSearchResult() {
    var main = document.querySelector("#searchResult");
    main.style.display = "";
    main.style.opacity = "1";
}

var setActive = false;
function showOverlay(timeout, showSpinner) {
    setActive = true;
    setTimeout(function () {
        if (setActive === true) {
            if (showSpinner === true) {
                document.querySelector("#overlayNav #spinner").style.display = "block";
            } else {
                document.querySelector("#overlayNav #spinner").style.display = "none";
            }
            document.querySelector("#overlayNav").classList.add("active");
        }
    }, timeout);
}

function hideOverlay(timeout) {
    setActive = false;
    setTimeout(function () {
        if (setActive === false) {
            document.querySelector("#overlayNav").classList.remove("active");
        }
    }, timeout)
}

function hideSuggest() {
    factfinder.communication.ResultDispatcher.dispatchSuggest(void 0);
}

var navigation = document.querySelector("ff-header-navigation");
var navigationMouseDelay = 400;
navigation.setAttribute("mouseenter-delay", navigationMouseDelay);
navigation.setAttribute("mouseleave-delay", navigationMouseDelay);
navigation.addEventListener("mouseenter", function () {
    hideSuggest();
    showOverlay(navigationMouseDelay, false);
});

navigation.addEventListener("mouseleave", function () {
    hideOverlay(navigationMouseDelay, false);
});

document.addEventListener("keyup", function (e) {
    if (e.keyCode === 27) {
        navigation.onHoverEnd();
    }
    return true;
});

function toggleSortbox() {
    var sortbox = document.querySelector('#sortbox');
    var opened = !sortbox.opened;
    sortbox.toggle();
    if (opened === true) {
        showOverlay(0, false);
    } else {
        hideOverlay(0, false);
    }

}

document.querySelector("ff-suggest").addEventListener("suggest-item-clicked", function (event) {
    const ffSuggestItem = event.detail.element;
    const suggestionData = event.detail.suggestion;
    if (suggestionData.type === "productName") {
        ffSuggestItem.ffPreventDefault = true;

        const id = suggestionData.attributes.ArticleNumber;
        factfinder.communication.EventAggregator.addFFEvent({
            type: "search",
            query: id,
            isArticleNumber: true,
            topics: function () {
                return ["detailPage"];
            }
        });
    }
});
