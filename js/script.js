let $arrowjQuery = $(".arrow");  // pobieranie klasy arrow przez jQuery

let off = $("#container").offset().top;

$arrowjQuery.click(function () {
    $("html,body").animate({
            scrollTop: off
        },
        1500);
});



