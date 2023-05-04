function fmtTime(num) { return String(num).padStart(2, '0'); }
var timerInterval = 0;
var elapsed = 0;
var isStop = false;
function timer(minutes, seconds) {
    if (minutes === void 0) { minutes = 25; }
    if (seconds === void 0) { seconds = 0; }
    isStop = false;
    document.getElementById('btn_stop').innerHTML =
        "STOP";
    clearInterval(timerInterval);
    elapsed = minutes * 60 + seconds;
    function secondWork() {
        --elapsed;
        if (elapsed <= 0) {
            terminate();
        }
        var minutes = Math.trunc(elapsed / 60);
        var seconds = Math.round(elapsed % 60);
        document.getElementById('timer_count').innerHTML =
            "".concat(fmtTime(minutes), " : ").concat(fmtTime(seconds));
        document.getElementById('btn_start').innerHTML =
            "RESTART";
    }
    timerInterval = setInterval(secondWork, 1000);
}
function terminate() {
    stop_timer();
    var music = document.createElement("AUDIO");
    music.setAttribute("src", "./music/Oregairu\ Zoku\ OST\ -\ Replica.mp3");
    music.autoplay = true;
    console.log("autoplay started");
}
function stop_and_conti() {
    if (isStop) {
        isStop = false;
        continue_timer();
        document.getElementById('btn_stop').innerHTML =
            "STOP";
    }
    else {
        isStop = true;
        stop_timer();
        document.getElementById('btn_stop').innerHTML =
            "CONTI";
    }
}
function stop_timer() {
    clearInterval(timerInterval);
}
function continue_timer() {
    timer(Math.trunc(elapsed / 60), Math.round(elapsed % 60));
}
