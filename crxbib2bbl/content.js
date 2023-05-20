//尝试运行 捕捉异常




// >> -help
var isDragging = false;
var container;
var offset = { x: 0, y: 0 };

function startDragging(event) {
    container = event.target;
    offset.x = event.clientX - container.offsetLeft;
    offset.y = event.clientY - container.offsetTop;
    isDragging = true;
}

function stopDragging() {
    isDragging = false;
}

function dragContainer(event) {
    if (isDragging) {
        container.style.left = (event.clientX - offset.x) + "px";
        container.style.top = (event.clientY - offset.y) + "px";
    }
}


