$(function () {
    $(".map_search").mouseenter(function () {
        $(".search_hide").stop().slideDown();
    });
    $(".map_search").mouseleave(function () {
        $(".search_hide").stop().slideUp();
    });
});