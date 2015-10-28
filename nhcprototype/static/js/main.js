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

})(jQuery);


(function($, FieldKit){

    // Format phone inputs
    if ($('[data-widget="phone"]').length) {
        new FieldKit.TextField($('[data-widget="phone"]').get(0), new FieldKit.PhoneFormatter());
    }

})(jQuery, FieldKit);
