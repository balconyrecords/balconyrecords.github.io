window.onload = function start() {
    slide();
}
function slide() {
    var num = 0, style = document.getElementById('rotator').style;
    window.setInterval(function () {
        // increase by num 1, reset to 0 at 4
        num = (num + 1) % 1000;

        // -600 * 1 = -600, -600 * 2 = -1200, etc 
        style.backgroundPosition = ( -1 * num) + "px"; 
    }, 100); // repeat forever, polling every 3 seconds
}