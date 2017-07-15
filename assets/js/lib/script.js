$("ul").on("click", "li", function() {
    $(this).toggleClass("selected");
});

$("ul").on("click", "span", function() {
   $(this).parent().fadeOut(500, function() {
        $(this).remove();
   });
   event.stopPropagation();
});

$("input").on("keypress", function(event) {
    var inputValue = $(this).val();
    if(event.which === 13) {
        $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span>" + inputValue + "</li>");
    }
});

$(".fa-plus").on("click", function() {
    $("input").fadeToggle(300);
});
