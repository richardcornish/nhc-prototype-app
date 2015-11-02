(function($){

    // Make table rows clickable
    $('.table-row-link').on('click', 'tbody tr', function (e) {
        if ($(e.target).is('a, input')) {
            return;
        }
        location.href = $(this).find('a').attr('href');
    });

    // Format date widgets
    $('[data-widget="date-dob"]').datetimepicker({
        format: 'MM/DD/YYYY',
        viewMode: 'years'
    });
    $('[data-widget="date-schedule"]').each(function(){
        $(this).datetimepicker({
            stepping: 15,
            sideBySide: true,
            minDate: new Date(),
            enabledHours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        });
    });

    // Chosen select widget
    $('.form-control-chosen').chosen();

    // Favorite button
    $('[data-favorite-text]').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).button('favorite');
        } else {
            $(this).button('unfavorite');
        }
    });

})(jQuery);
