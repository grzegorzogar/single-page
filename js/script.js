let arrow = document.getElementsByClassName('arrow'); // czysty js


let $arrowjQuery = $(".arrow");  // pobieranie klasy arrow przez jQuery

let off = $("#container").offset().top;

$arrowjQuery.on("click", function () {
    $("body").animate({
        scrollTop: $("#container").offset().top
    }, 1000)
});
