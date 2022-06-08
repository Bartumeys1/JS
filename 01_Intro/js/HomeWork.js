// Користувач вводить дві межі діапазону, вивести на екран усі числа з цього діапазону. Передбачити,
// щоб користувач міг вводити межі діапазону в довільному
// порядку.
// ■ вивести всі парні числа з діапазону.
// ■ вивести всі непарні числа з діапазону.
// ■ вивести всі числа, кратні семи.

let a = parseInt(prompt("Enter first number"));
let b = parseInt(prompt("Enter first number"));

let min=(a<b)?a:b;
let max=(a>b)?a:b;

console.group("вивести всі парні числа з діапазону");
for(var i=min; i<=max; i++)
{
    if(i%2==0)
    console.log(`${i} `)
}
console.groupEnd();

console.group("вивести всі непарні числа з діапазону");
for(var i=min; i<=max; i++)
{
    if(i%2==1 || i%2==-1)
    console.log(`${i} `)
}
console.groupEnd();


console.group("вивести всі числа, кратні семи");
for(var i=min; i<=max; i++)
{
    if(i%7==0)
    console.log(`${i} `)
}
console.groupEnd();
