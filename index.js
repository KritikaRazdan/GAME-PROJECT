window.onload = function () {
    playbuttonaction();
}

const eventname = 'gazeenter';
const customevent = new CustomEvent(eventname, { bubbles: true, cancelable: true });


var element = document.getElementById('playbutton');
element.addEventListener(eventname, internalclick);

function internalclick(){
    var playbtn = document.getElementById('playbutton');
    playbtn.click();
}

function playbuttonaction() {
    webgazer.setGazeListener(function (data, elapsedTime) {
        var x = data.x;
        var y = data.y;
        var element = document.getElementById('playbutton');
        var rect = element.getBoundingClientRect();
        var elementX = rect.left;
        var elementY = rect.top;
        var elementWidth = rect.width;
        var elementHeight = rect.height;
        var isGazeEnteringElement = x >= elementX && x <= (elementX + elementWidth) &&
            y >= elementY && y <= (elementY + elementHeight);
        if (isGazeEnteringElement) {
            element.dispatchEvent(customevent);
        }
    });
}
