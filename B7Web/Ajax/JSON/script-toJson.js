$(function () {

    $('#form').bind('submit', function (e) {
        e.preventDefault();

        var txt = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'ajax-tojson.php',
            data: txt,
            dataType: 'json',
            success: function(json) {
                alert('Nome é:' + json.name + ' e tem ' + json.qt_name + ' caracteres');
            }
        });
    });
});