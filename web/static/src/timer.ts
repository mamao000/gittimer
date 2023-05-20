function fmtTime(num: number) {return String(num).padStart(2,'0'); }

let timerInterval:number = 0;
let elapsed:number = 0;
let isStop: boolean = false;
let activate: boolean = false;
let minutes:number = 25;
let seconds:number = 0;

function timer() : void{
    if(activate && isStop){
        minutes = 25;
        seconds = 1;
    }
    activate = true;
    isStop = false;
    document.getElementById('txt_btn_start').innerHTML =
        `START`;
    document.getElementById('txt_btn_stop').innerHTML =
        `STOP`;

    clearInterval(timerInterval);
    //let minutes :number = minute;
    elapsed = minutes * 60 + seconds;
    function secondWork(){
        --elapsed;
        if(elapsed <= 0){
            terminate();
        }
        minutes = Math.trunc(elapsed / 60);
        seconds = Math.round(elapsed % 60);
        document.getElementById('timer_count').innerHTML =
            `${ fmtTime(minutes) } : ${fmtTime(seconds)}`;
    }
    timerInterval = setInterval(secondWork, 1000);
}

function set_minutes(): void {
    let input: number = Number((<HTMLInputElement>document.getElementById('input_settimer')).value);
    minutes = input;
    console.log('change to ${minutes} minutes');
    document.getElementById('timer_count').innerHTML =
        `${ minutes } : 00`;
}

function terminate(): void{
    activate = false;
    stop_timer();
    let music = document.getElementById("AUDIO") as HTMLMediaElement;
    //music.play();
    music.autoplay = true;
}


function stop_display(): void{
    let music = document.getElementById("AUDIO") as HTMLMediaElement;
    music.pause();
}

function stop_and_conti(): void{
    if(!activate)
        return;
    if(isStop){
        isStop = false;
        continue_timer();
        document.getElementById('txt_btn_stop').innerHTML =
            `STOP`;
    }
    else{
        isStop = true;
        stop_timer();
        document.getElementById('txt_btn_stop').innerHTML =
            `CONTI`;
        document.getElementById('txt_btn_start').innerHTML =
            `RESTART`;
    }
}
function stop_timer(){
    clearInterval(timerInterval);
}

function continue_timer(){
    timer();
}
