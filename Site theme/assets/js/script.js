document.getElementById('changeBGColorButton').addEventListener('click', function() {
    var computedStyle = window.getComputedStyle(document.body);
    var currentColor = computedStyle.backgroundColor;

    if (currentColor === "rgb(0, 0, 0)" || currentColor === "black") {
        document.body.style.backgroundColor = "white";
        document.getElementById('changeBGColorButton').style.color = "black";
        document.getElementById('changeBGColorButton').innerHTML = '<i class="fas fa-solid fa-sun"></i>';
    } else if (currentColor === "rgb(255, 255, 255)" || currentColor === "white") {
        document.body.style.backgroundColor = "black";
        document.getElementById('changeBGColorButton').style.color = "white";
        document.getElementById('changeBGColorButton').innerHTML = '<i class="fas fa-solid fa-moon"></i>';
    }
});
