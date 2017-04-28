var demo_02_01;
(function (demo_02_01) {
    var 
    //Basic properties
    timerId = -1, interval = 25, ms = 0, seconds = 0, minutes = 0, 
    // Kick the timer off with an interval
    startTimer = function () {
        if (timerId === -1) {
            timerId = window.setInterval('demo_02_01.turnTimerOn()', interval);
        }
    }, 
    //Update the screen with the timer data
    displayTimer = function () {
        document.getElementById('milliseconds').innerHTML = ms.toString();
        document.getElementById('seconds').innerHTML = seconds.toString();
        document.getElementById('minutes').innerHTML = minutes.toString();
    }, 
    //pause the time
    pauseTimer = function () {
        window.clearInterval(timerId);
        timerId = -1;
    }, 
    //Reset the timer to 0
    clearTimer = function () {
        pauseTimer();
        ms = 0;
        seconds = 0;
        minutes = 0;
        displayTimer();
    }, 
    //Bootstrap everything
    init = function (startButton, pauseButton, clearButton) {
        document.getElementById(startButton).
            addEventListener("click", startTimer, false);
        document.getElementById(pauseButton).
            addEventListener("click", pauseTimer, false);
        document.getElementById(clearButton).
            addEventListener("click", clearTimer, false);
    };
    //start counting
    function turnTimerOn() {
        ms += interval;
        if (ms >= 1000) {
            ms = 0;
            seconds += 1;
        }
        if (seconds >= 60) {
            ms = 0;
            seconds = 0;
            minutes += 1;
        }
        displayTimer();
    }
    demo_02_01.turnTimerOn = turnTimerOn;
    ;
    window.onload = function () {
        init('startButton', 'pauseButton', 'clearButton');
    };
})(demo_02_01 || (demo_02_01 = {}));
//# sourceMappingURL=02-01-grammar.js.map