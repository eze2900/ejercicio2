/**
 * Created by admin on 10/13/16.
 */
var button = function () {
    $('.cosas').hide();
    $('.footer-btn').on('click', function () {
        if ($('.footer-btn').height() != 100) {
            $('.footer-btn').height(100);
            $('.cosas').hide();
            $('.btn-text').show();
        } else {
            $('.footer-btn').height(200);
            $('.cosas').show();
            $('.btn-text').hide();
        }
    })
}
$(document).ready(button);