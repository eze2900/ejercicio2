/**
 * Created by admin on 10/13/16.
 */
var button = function () {
    $('.cosas').hide();
    $('.footer-btn').on('click', function () {
        if ($(this).height() != 100) {
            $(this).height(100);
            $('.cosas').hide();
        } else {
            $(this).height(200);
            $('.cosas').show();
        }
    })
}
$(document).ready(button);