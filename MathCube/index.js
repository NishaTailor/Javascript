const rotateDice = () => {

    let dice = document.getElementById('dice')

    let dicerotate = Math.round(Math.random()*6);

    dice.style.transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

    setTimeout(() => {
        dice.textContent = dicerotate;
    }, 10); 
}