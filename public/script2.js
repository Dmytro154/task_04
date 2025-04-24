document.getElementById("ageButton").onclick = function() {
    var years = prompt("Скільки вам років?", 32);
    if (years !== null) {
    alert("Вам " + years + " років!");
    }
    };