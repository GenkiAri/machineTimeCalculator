let resultTime = 0

function getTimeFromPrice(hourCost) {
    resultTime = Math.round((document.getElementById("partPrice").value / parseInt(hourCost)) * 100) / 100
    document.getElementById("resultHour").innerHTML = resultTime + " Hour(s)";
    document.getElementById("resultMinutes").innerHTML = Math.round((resultTime * 60) * 100) / 100 + " Minutes(s)";
    document.getElementById("euroHour").innerHTML = "1h = " + hourCost + "€";
    console.log(resultTime)
    console.log(document.getElementById("partPrice").value)
};

