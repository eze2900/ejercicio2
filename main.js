/**
 * Created by admin on 10/13/16.
 */
var button = function () {
    $('.footer-btn').on('click', function () {
        if ($(this).text() != 'Open') {
            $(this).text('Open');
        } else {
            $(this).text('Closed');
        }
        if ($(this).height() != 100) {
            $(this).height(100);
        } else {
            $(this).height(200);
        }
    })
}
$(document).ready(button);