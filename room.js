window.onload = function() {
    setGame();
}

function setGame() {
    for(let i = 0; i < 9; i++) {
        let spider = document.createElement("div");
        spider.id = i.toString();
        document.getElementById("board").appendChild(spider);
        var element = document.getElementById(i.toString());
        element.addEventListener('mouseenter', clearspider);
        var rect = element.getBoundingClientRect();
        var elementX = rect.left;
        var elementY = rect.top;
        var elementWidth = rect.width;
        var elementHeight = rect.height;
        var x, y;
        webgazer.setGazeListener(function (data, elapsedTime) {
            x = data.x;
            y = data.y;
        })
        var isGazeEnteringElement = x >= elementX && x <= (elementX + elementWidth) &&
            y >= elementY && y <= (elementY + elementHeight);
         var isGazeEnteringElement = x >= elementX && x <= (elementX + elementWidth) &&
                y >= elementY && y <= (elementY + elementHeight);
            if (isGazeEnteringElement) {
                document.dispatchEvent(mouseenter);
            }
    }
}

function clearspider() {
    console.log("click");
}
