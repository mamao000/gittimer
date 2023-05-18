function fmtTime(num) { return String(num).padStart(2, '0'); }
var timerInterval = 0;
var elapsed = 0;
var isStop = false;
var activate = false;
var minutes = 25;
var seconds = 0;
function timer() {
    if (activate && isStop) {
        minutes = 25;
        seconds = 1;
    }
    activate = true;
    isStop = false;
    document.getElementById('txt_btn_start').innerHTML =
        "START";
    document.getElementById('txt_btn_stop').innerHTML =
        "STOP";
    clearInterval(timerInterval);
    //let minutes :number = minute;
    elapsed = minutes * 60 + seconds;
    function secondWork() {
        --elapsed;
        if (elapsed <= 0) {
            terminate();
        }
        minutes = Math.trunc(elapsed / 60);
        seconds = Math.round(elapsed % 60);
        document.getElementById('timer_count').innerHTML =
            "".concat(fmtTime(minutes), " : ").concat(fmtTime(seconds));
    }
    timerInterval = setInterval(secondWork, 1000);
}
function set_minutes() {
    var input = Number(document.getElementById('input_settimer').value);
    minutes = input;
    console.log('change to ${minutes} minutes');
    document.getElementById('timer_count').innerHTML =
        "".concat(minutes, " : 00");
}
function terminate() {
    activate = false;
    stop_timer();
    var music = document.getElementById("AUDIO");
    //music.play();
    music.autoplay = true;
}
function stop_display() {
    var music = document.getElementById("AUDIO");
    music.pause();
}
function stop_and_conti() {
    if (!activate)
        return;
    if (isStop) {
        isStop = false;
        continue_timer();
        document.getElementById('txt_btn_stop').innerHTML =
            "STOP";
    }
    else {
        isStop = true;
        stop_timer();
        document.getElementById('txt_btn_stop').innerHTML =
            "CONTI";
        document.getElementById('txt_btn_start').innerHTML =
            "RESTART";
    }
}
function stop_timer() {
    clearInterval(timerInterval);
}
function continue_timer() {
    timer();
}
