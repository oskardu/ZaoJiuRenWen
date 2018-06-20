$(document).ready(function () {
});

$("#nav_1").on("click", function () {
    $(".main-page").hide();
    $(".dot").hide();
    $("#page_1").show();


});

$("#nav_2").on("click", function () {
    $(".main-page").hide();
    $(".dot").hide();
    $("#page_2").show();
    $("#dot_1").show();
});

$("#nav_3").on("click", function () {
    $(".main-page").hide();
    $(".dot").hide();
    $("#page_3").show();
    $("#dot_2").show();
});

$("#nav_4").on("click", function () {
    $(".main-page").hide();
    $(".dot").hide();
    $("#page_4").show();
    $("#dot_3").show();
});

$("#nav_5").on("click", function () {
    $(".main-page").hide();
    $(".dot").hide();
    $("#page_5").show();
    $("#dot_4").show();

});

$("#biansheng_home").on("click", function () {
    $(".main-page").hide();
    $(".dot").hide();
    $("#page_2").show();
    $("#dot_1").show();
    toTop();

});

$("#wutai_home").on("click", function () {
    $(".main-page").hide();
    $(".dot").hide();
    $("#page_3").show();
    $("#dot_2").show();
    toTop();

});

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
