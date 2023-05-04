function fmtTime(num: number) {return String(num).padStart(2,'0'); }

let timerInterval:number = 0;
let elapsed:number = 0;
let isStop: boolean = false;

function timer(minutes: number = 25, seconds: number = 0){
    isStop = false;
    document.getElementById('btn_stop').innerHTML =
        `STOP`;

    clearInterval(timerInterval);
    elapsed = minutes * 60 + seconds;
    function secondWork(){
        --elapsed;
        if(elapsed <= 0){
            terminate();
        }
        const minutes = Math.trunc(elapsed / 60);
        const seconds = Math.round(elapsed % 60);
        document.getElementById('timer_count').innerHTML =
            `${ fmtTime(minutes) } : ${fmtTime(seconds)}`;
        document.getElementById('btn_start').innerHTML =
            `RESTART`;
    }
    timerInterval = setInterval(secondWork, 1000);
}

function terminate(): void{
    stop_timer();
    let music = document.createElement("AUDIO") as HTMLMediaElement;
    music.setAttribute("src", "./music/Oregairu\ Zoku\ OST\ -\ Replica.mp3");
    music.autoplay = true;
    console.log("autoplay started");
}

function stop_and_conti(): void{
    if(isStop){
        isStop = false;
        continue_timer();
        document.getElementById('btn_stop').innerHTML =
            `STOP`;
    }
    else{
        isStop = true;
        stop_timer();
        document.getElementById('btn_stop').innerHTML =
            `CONTI`;
    }
}
function stop_timer(){
    clearInterval(timerInterval);
}

function continue_timer(){
    timer(Math.trunc(elapsed / 60), Math.round(elapsed % 60));
}
