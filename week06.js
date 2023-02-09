
let shieldImage = 'shield.png';
let bowImage = 'bow.png';
let magicImage = 'magic.png';

function win(compChoice, playerChoice)
{
    if(compChoice == playerChoice)
    {
        document.querySelector("#result").textContent = 'Wow, a TIE. That\'s boring...'
    }
    else 
    {
        if (compChoice == 0)
        {
            if (playerChoice == 2)
            {
                document.querySelector("#result").textContent = 'Hey, you win! Maybe humans are better than machines after all.'
            }
            if (playerChoice == 1)
            {
                document.querySelector("#result").textContent = 'Duuuuuude, a machine generated random number beat you. You suck!'
            }
        }
        if (compChoice == 1)
        {
            if (playerChoice == 0)
            {
                document.querySelector("#result").textContent = 'Hey, you win! Maybe humans are better than machines after all.'
            }
            if (playerChoice == 2)
            {
                document.querySelector("#result").textContent = 'Duuuuuude, a machine generated random number beat you. You suck!'
            }
        }
        if (compChoice == 2)
        {
            if (playerChoice == 1)
            {
                document.querySelector("#result").textContent = 'Hey, you win! Maybe humans are better than machines after all.'
            }
            if (playerChoice == 0)
            {
                document.querySelector("#result").textContent = 'Duuuuuude, a machine generated random number beat you. You suck!'
            }
        }
    }
}

function game(choice)
{
    let compChoice = Math.floor(Math.random() * 3);

    if(compChoice == 0)
    {
        document.querySelector('#computerImg').setAttribute('src', shieldImage);
    }
    else if(compChoice == 1)
    {
        document.querySelector('#computerImg').setAttribute('src', bowImage);
    }
    else if(compChoice == 2)
    {
        document.querySelector('#computerImg').setAttribute('src', magicImage);
    }

    win(compChoice, choice);
};

function gameShield()
{
    game(0);
};

function gameBow()
{
    game(1);
};

function gameMagic()
{
    game(2);
};

document.querySelector('#computerImg').setAttribute('src', shieldImage);

document.querySelector('#RockImg').addEventListener('click', gameShield);
document.querySelector('#PaperImg').addEventListener('click', gameBow);
document.querySelector('#ScissorsImg').addEventListener('click', gameMagic);