(function($){

    // Make table rows clickable
    $('.table').on('click', 'tr', function (e) {
        if ($(e.target).is('a, input')) {
            return;
        }
        location.href = $(this).find('a').attr('href');
    });

    // Format date widgets
    $('[data-widget="date"]').datetimepicker({
        format: 'MM/DD/YYYY',
        viewMode: 'years'
    });

})(jQuery);


(function($, FieldKit){

    // Format phone inputs
    new FieldKit.TextField($('[data-widget="phone"]').get(0), new FieldKit.PhoneFormatter());

})(jQuery, FieldKit);
