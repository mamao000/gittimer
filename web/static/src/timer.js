function fmtTime(num) { return String(num).padStart(2, '0'); }
var timerInterval = 0;
var elapsed = 0;
function timer(minutes, seconds) {
    if (minutes === void 0) { minutes = 25; }
    if (seconds === void 0) { seconds = 0; }
    clearInterval(timerInterval);
    elapsed = minutes * 60 + seconds;
    function secondWork() {
        --elapsed;
        var minutes = Math.trunc(elapsed / 60);
        var seconds = Math.round(elapsed % 60);
        document.getElementById('timer_count').innerHTML =
            "".concat(fmtTime(minutes), ":").concat(fmtTime(seconds));
    }
    timerInterval = setInterval(secondWork, 1000);
}
function stop_timer() {
    clearInterval(timerInterval);
}
function continue_timer() {
    timer(Math.round(elapsed / 60), Math.round(elapsed % 60));
}
