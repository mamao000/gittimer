function fmtTime(num: number) {return String(num).padStart(2,'0'); }

let timerInterval:number = 0;
let elapsed:number = 0;


function timer(minutes: number = 25, seconds: number = 0){
    clearInterval(timerInterval);
    elapsed = minutes * 60 + seconds;
    function secondWork(){
        --elapsed;
        const minutes = Math.trunc(elapsed / 60);
        const seconds = Math.round(elapsed % 60);
        document.getElementById('timer_count').innerHTML =
            `${ fmtTime(minutes) }:${fmtTime(seconds)}`;
    }
    timerInterval = setInterval(secondWork, 1000);
}

function stop_timer(){
    clearInterval(timerInterval);
}

function continue_timer(){
    timer(Math.round(elapsed / 60), Math.round(elapsed % 60));
}
