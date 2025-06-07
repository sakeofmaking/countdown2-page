// @source: https://stackoverflow.com/questions/41145086/js-countdown-timer-to-a-specific-date

$(document).ready(function () {
    var countTo = $('#count_to').text();
    var deadline = new Date(countTo);

    function updateClock() {
        var now = new Date();
        var t = deadline - now;

        if (t <= 0) {
            $('#days').text('00');
            $('#hours').text('00');
            $('#minutes').text('00');
            $('#seconds').text('00');
            $('#message').text('SEE YOU LATER!');
            clearInterval(timeinterval);
            return;
        }

        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));

        $('.days').text(days.toString().padStart(2, '0'));
        $('.hours').text(('0' + hours).slice(-2));
        $('.minutes').text(('0' + minutes).slice(-2));
        $('.seconds').text(('0' + seconds).slice(-2));
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
});