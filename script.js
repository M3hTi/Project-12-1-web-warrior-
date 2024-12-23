$(() => {
    $('nav ul li').hover(
        function() {
            $(this).find('.dropdown').stop(false, false).slideDown(400);
        },
        function() {
            $(this).find('.dropdown').stop(false, false).slideUp(400);
        }
    );
});