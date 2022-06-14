// const myDoc =document.getElementById("myTable");
// console.log(navigator);
// const text= document.createElement("p");
// text.innerHTML=`Browser: ${navigator.appCodeName}<br>
// Vendor: ${navigator.vendor} <br>
// Resolution: ${screen.width}x${screen.height}`;


// myDoc.appendChild(text);



// Реалізуйте клас «Студент». Необхідно зберігати в
// змінних-членах класу: ПІБ, дату народження, контактний
// телефон, місто, країну, назву навчального закладу, місто
// та країну (де знаходиться навчальний заклад), номер
// групи. Реалізуйте функції-члени класу для введення даних, виведення даних, реалізуйте аксесор для доступу до
// окремих змінних-членів.

// class Student
// {
//     constructor(pib , birthday, phone)
//     {
//         this.PIB = pib;
//         this.Bithday=birthday;
//         this.Phone = phone;
//     }

//     get City(){ return this.city;}
//     set City(value){this.city = value;}

//     get Country(){return this.country;}
//     set Country(value){this.country = value;}

//     ShowInfo()
//     {
//         console.log(`PIB: ${this.PIB}  Bithday: ${this.Bithday}  Phone: ${this.Phone}  City: ${this.City}  Country: ${this.Country}`);
//     }
// }

// let student = new Student("test test" , "24-06-2005","0986453674");


// student.City="CityTest";
// student.ShowInfo();





// завдання
// Створіть програму, що імітує багатоквартирний будинок. Необхідно створити класи «Людина», «Квартира»,
// «Дім». Клас «Квартира» містить динамічний масив об’єктів
// класу «Людина». Клас «Дім» містить масив об’єктів класу
// «Квартира».
// Кожен з класів містить змінні-члени і функції-члени,
// які необхідні для предметної області класу. Звертаємо
// вашу увагу, що пам’ять під рядкові значення виділяється динамічно. Наприклад, для ПІБ в класі «Людина». Не
// забувайте забезпечити класи різними конструкторами


class Hous{
    arrApartments=[];
constructor(number)
{
    this.Number = number;
}

Show(table)
{

    const ht_row_house = document.createElement("tr");
    const ht_td_house= document.createElement("td");
    ht_td_house.innerHTML=`House ${this.Number}`;
    
    this.arrApartments.forEach(element => {
        element.Show(ht_td_house);
    });

    ht_row_house.appendChild(ht_td_house);
    table.appendChild(ht_row_house);
}
}

class Person{

    constructor(name,surname,age)
    {
        this.Name = name;
        this.Surname=surname;
        this.Age=age;
    }

    Info(apartment_col)
    {
        const human_col_info = document.createElement("td");
        human_col_info.innerHTML=`Name: ${this.Name}\nSurname: ${this.Surname}\nAge${this.Age}`;
        apartment_col.appendChild(human_col_info);
        
    }
}

class Apartment
{
    arrH=[];
    constructor(number)
    {
        this.Number = number;
    }

    AddHuman(value)
    {
       
        this.arrH.push(value);
    }

    Show(hs_row)
    {
        const ht_col_house = document.createElement("td");
        ht_col_house.innerHTML=`apartment # ${this.Number}`;

        if(this.arrH.length === 0)
        {
            ht_col_house.innerHTML+="<br>Is empty.";
        }
        for(var i=0; i<this.arrH.length; i++)
        {
                this.arrH[i].Info(ht_col_house);
        }
        hs_row.appendChild(ht_col_house);

    
    }

}

const house12 = new  Hous(12);
const house33 = new  Hous(33);
const arrHouse = [house12,house33];
const appartment1 = new Apartment(1);
const appartment2 = new Apartment(2);
const appartment3 = new Apartment(3);
const appartment4 = new Apartment(4);

const p1 = new Person("Anton","Filipov" , 25);
const p3 = new Person("Dinis","Uzbekov" , 23);
const p2 = new Person("Disnis","Uzbekov" , 23);
const p4 = new Person("Oleg","Ttt" , 22);
const p5 = new Person("AAA","AAA" , 23);
const p6 = new Person("VVV","VVV" , 23);
const p7 = new Person("CCC","CCC" , 23);
const p8 = new Person("RRR","RR" , 23);


house12.arrApartments.push(appartment1);
house12.arrApartments.push(appartment2);
house12.arrApartments.push(appartment3);

house33.arrApartments.push(appartment4);

appartment1.AddHuman(p1);
appartment1.AddHuman(p2);

appartment2.AddHuman(p3);
appartment2.AddHuman(p4);
appartment2.AddHuman(p5);

appartment4.AddHuman(p6);
appartment4.AddHuman(p7);
appartment4.AddHuman(p8);


//wiew elements
const houseTable = document.createElement("table");
houseTable.setAttribute("border",1);


arrHouse.forEach(h=>{h.Show(houseTable); });
houseTable.setAttribute("style","border-spacing: 20px;");

const main_doc = document.getElementById("myTable");
main_doc.appendChild(houseTable);