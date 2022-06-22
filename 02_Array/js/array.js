

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


// ==========================

// Написати програму, що копіює елементи 2-х
// масивів розміром 5 елементів кожен в один масив роз-
// міром 10 елементів у такий спосіб: спочатку копіюються
// послідовно всі елементи більші за 0, потім послідовно
// всі елементи рівні 0, а потім послідовно всі елементи
// менші за 0.


console.group("Написати програму, що копіює елементи 2-х масивів");
const arr1 = [-1,0,2,4,6];
const arr2 = [-2 , -3 , -4 ,0, 3];

console.log(arr1.map(item =>{if(item<0) return item}));
let resArr=[];



function AddLessElement(item)
{
    return item<0;
}

function AddZeroElement(item)
{
    return item===0;
}

function AddUpElement(item)
{
    return item>0;
}
function CopyTo(ress ,arr1, arr2)
{
    ress.push(arr1.filter(AddLessElement));
    ress.push(arr2.filter(AddLessElement));
    
    ress.push(arr1.filter(AddZeroElement));
    ress.push(arr2.filter(AddZeroElement));
    
    ress.push(arr1.filter(AddUpElement));
    ress.push(arr2.filter(AddUpElement));
}

 CopyTo(resArr,arr1,arr2);


console.log(`arr1: ${arr1}`);
console.log(`arr2: ${arr2}`);
console.log(`result: ${resArr}`);
console.groupEnd();


// ==========================
// Написати програму «успіхи». Користувач
// вводить 10 оцінок студента. Реалізувати меню для ко-
// ристувача:
// ■ Вивід оцінок (вивід вмісту масиву);
// ■ Перездача іспиту (користувач вводить номер елемента
// масиву й нову оцінку);
// ■ Чи виходить стипендія (стипендія виходить, якщо
// середній бал є не нижчим за 10.7)

console.group("Написати програму «успіхи».");
const arr=[];
for(i=0;i<10;i++){
    arr[i] = parseInt(prompt(`Enter mark ${i+1}`));
}

while(true)
{
    var menuSelect = parseInt(prompt(`Enter number of menu: \n1 - Print all marks \n2 - Passing the exam \n3 - Is there a scholarship \nother - Exit:`));
    if(menuSelect === 1)
    console.log(`All marks: ${arr}`);
    else if( menuSelect ===2)
    {
        let number = parseInt(prompt(`number element:`));
        let newMark = parseInt(prompt(`New mark:`));
        if(newMark >0 && newMark<=12 )
        arr[number]= newMark;   
    }
    else if(menuSelect ===3)
    {
        let resMark =0;
        arr.forEach(item => {resMark+=item});
        console.log(`${((resMark/arr.length)>=10.7)?"Student has scholarship": "Student does not scholarship"} ${resMark/arr.length}`);
    }
    else
    break;
}

console.groupEnd();