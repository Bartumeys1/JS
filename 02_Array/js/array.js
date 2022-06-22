

//Користувач вводить довжину сторін п’яти-
// кутника, кожна сторона заноситься в масив, необхідно
// обчислити периметр п’ятикутника (периметр — сума
// всіх сторін).
// const arr=[];
// for(i=0;i<5;i++){
//     arr[i] = parseInt(prompt(`Enter number ${i+1}`));
// }

// let result=0;
// for(i=0;i<arr.length; i++)
// {
//     result+=arr[i];
// }
// console.log(result);


//Написати гру «Кубики». Користувач і комп'ю-
// тер по черзі кидають 2 кубики. Переможець той, у кого
// за результатами 3х кидків сума більше. 
const TRYS=3;
let throws=0;

const playerRaits=[];
const compRaits=[];

for(let i=0;i<6; i++){
    playerRaits[i]=fillArray(1,6);
    compRaits [i]= fillArray(1,6);
}

Play();


function Play()
{
    for(let i=0; i<3;i++)
    {
        console.group(`Raund - ${i+1}`);
        Throw(i*2);
        console.groupEnd();
    }

    Counts();
}

function Throw(iteration)
{
    //Player throw
    console.group("Player throws:");
    for(let i=0; i<2;i++)
    {
        console.log(`throw ${i+1}: ${playerRaits[i+iteration]}`);
    }
    console.groupEnd();

    //AI throw
    console.group("Computer throws:");
    for(let i=0; i<2;i++)
    {
        console.log(`throw ${i+1}: ${compRaits[i+iteration]}`);
    }
    console.groupEnd();
}

function Counts()
{
    const playerSum = playerRaits.reduce((previousValue, currentValue)=>previousValue + currentValue,0);
    const compSum = compRaits.reduce((previousValue, currentValue)=>previousValue + currentValue,0);

    if(playerSum>compSum)
    console.log(`You winn!!!`);
    else if(playerSum<compSum)
    console.log(`Computer winn!!!`);
    else
    console.log('draw');
}

function fillArray(min ,max)
{
    return parseInt( Math.random() * (max - min) + min);
}