window.onload = function() {
    setGame();
}

function setGame() {
    for(let i = 0; i < 9; i++) {
        let spider = document.createElement("div");
        spider.id = i.toString();
        document.getElementById("board").appendChild(spider);
    }
}