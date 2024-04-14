let score = 0;
let scorePerClick = 1;
let upgradeCost = 10;

document.getElementById('clicker').addEventListener('click', function() {
    score += scorePerClick;
    document.getElementById('score').innerText = score;
});

document.getElementById('upgrader').addEventListener('click', function() {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        scorePerClick++;
        upgradeCost *= 2; // Increase the cost for the next upgrade
        document.getElementById('score').innerText = score;
        document.getElementById('upgrader').innerText = `Upgrade Clicker (Cost: ${upgradeCost})`;
    } else {
        alert('Not enough points!');
    }
});
