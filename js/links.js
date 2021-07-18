$(document).on('click', '.links a', function() {
    $(this).addClass('active').siblings().removeClass('active');
});