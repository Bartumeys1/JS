// const URL = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

// fetch(URL)
// .then(data => {
//     return data.json();
// }).then(currancy => {
//     PrintCurrancy(currancy)
// })
// .catch(err => console.log("Error: ", err))


// PrintCurrancy = (currancy) => {
//     currancy.forEach(element => {
//         const t_row = document.createElement("tr");
//         const td_col_1 = document.createElement("td");
//         const td_col_2 = document.createElement("td");
//         td_col_1.innerText=`${element.base_ccy} ${element.buy}`;
//         td_col_2.innerText=`${element.ccy} ${element.sale}`;
//         t_row.appendChild(td_col_1);
//         t_row.appendChild(td_col_2);
//         mainTable.appendChild(t_row);

//     });
// }

const main=document.getElementById("main");

const mainTable = document.createElement("table");
const mainCounterRequest = document.querySelector(".counterRequest");
const counterRequest_UIelement = document.createElement("p");
counterRequest_UIelement.innerHTML = "Counter: 0";
const wrapperBtn = document.querySelector(".body_slide");
mainTable.setAttribute("Stype","width:100%");
mainCounterRequest.appendChild(counterRequest_UIelement);

const URL_PEOPLE = "https://swapi.dev/api/people";
const URL_PLANET = "https://swapi.dev/api/planets";
const URL_STARSHIPS = "https://swapi.dev/api/starships";
const URL_Images="https://starwars-visualguide.com/assets/img/";

const roller = document.querySelector(".lds-roller");

let previousUrl ="";
let nextUrl ="";
let pageCount=0;

function hideRoller(){roller.style.display=`none`;}
function showRoller(){roller.style.display=`block`;}

window.addEventListener("load", Init);

function Init() {
    hideRoller();
  Request(URL_PEOPLE, ShowePeople);

  const people = document.querySelector(".people");
  people.addEventListener("click", () => {
    clearTable(wrapperBtn);
    pageCount=0;
    Request(URL_PEOPLE, ShowePeople);
  })

  const planet = document.querySelector(".planets");
  planet.addEventListener("click", () => {
    clearTable(wrapperBtn);
    pageCount=0;
    Request(URL_PLANET, ShowPlanet)
  })

  const starships = document.querySelector(".starships");
  starships.addEventListener("click", () => {
    clearTable(wrapperBtn);
    pageCount=0;
    Request(URL_STARSHIPS, ShowStarships);
  })
}

var countR=0;
function Request(URL , Callback)
{
    clearTable(wrapperBtn);
    showRoller();
    var res = localStorage.getItem(URL);
        if(res === null)
        {
            fetch(URL)
            .then(result=>{

                   return result.json();
             })
            .then(data=>{
                  hideRoller();
                    res = data;
                    localStorage.setItem(URL,JSON.stringify(data));
                    counterRequest_UIelement.innerHTML=`Counter requests: ${++countR}`;
                 Callback(res);
             })
             .catch(err => console.log(err));
        }
        else
        {
            res =  localStorage.getItem(URL);
            console.log("From localStorage");
            Callback(JSON.parse(res));
            hideRoller();
        }
       
}


ShowePeople =( ({results , previous , next}) =>{
    console.log(results);

    const header_tr_table = document.createElement("tr");
    const th_image = document.createElement("th");
    th_image.innerHTML=`Image`
    const th_table_Name = document.createElement("th");
    th_table_Name.innerText=`Name`;
    const th_table_Height = document.createElement("th");
    th_table_Height.innerText=`Height`;
    const th_table_Mass = document.createElement("th");
    th_table_Mass.innerText=`Mass`;
    const th_table_Eye_color = document.createElement("th");
    th_table_Eye_color.innerText=`Eye_color`;
    const th_table_Hair_color = document.createElement("th");
    th_table_Hair_color.innerText=`Hair_color`;
    const th_table_Skin_color = document.createElement("th");
    th_table_Skin_color.innerText=`Skin_color`;
    const th_table_Gender = document.createElement("th");
    th_table_Gender.innerText=`Gender`;

    header_tr_table.appendChild(th_image);
    header_tr_table.appendChild(th_table_Name);
    header_tr_table.appendChild(th_table_Height);
    header_tr_table.appendChild(th_table_Mass);
    header_tr_table.appendChild(th_table_Eye_color);
    header_tr_table.appendChild(th_table_Hair_color);
    header_tr_table.appendChild(th_table_Skin_color);
    header_tr_table.appendChild(th_table_Gender);
    mainTable.appendChild(header_tr_table);

let indexImage =0;
        results.forEach((element , index) => {
            const t_row = document.createElement("tr");
            
            indexImage = (pageCount*10+(index+1)); // здвиг на сайті завантаження
            const td_col_image = document.createElement("td")
            const img = document.createElement("img");
            img.setAttribute("class","image");
            
            if(indexImage >=17)
            indexImage++;

            fetch(URL_Images+"characters/"+indexImage+".jpg")
            .then(result=>{
               img.setAttribute("src",`${result.url}`); 
                }).catch(err =>  {console.log(err)});

            img.setAttribute("alt","character image");
            td_col_image.appendChild(img);

            const td_col_1 = document.createElement("td");
            td_col_1.innerText=`${element.name}`;

            const td_col_2 = document.createElement("td");
            td_col_2.innerText=`${element.height}`;

            const td_col_3 = document.createElement("td");
            td_col_3.innerText=`${element.mass}`;

            const td_col_4 = document.createElement("td");
            td_col_4.innerText=`${element.hair_color}`;

            const td_col_5 = document.createElement("td");
            td_col_5.innerText=`${element.skin_color}`;

            const td_col_6 = document.createElement("td");
            td_col_6.innerText=`${element.eye_color}`;

            const td_col_7 = document.createElement("td");
            td_col_7.innerText=`${element.gender}`;



  
            t_row.appendChild(td_col_image);
            t_row.appendChild(td_col_1);
            t_row.appendChild(td_col_2);
            t_row.appendChild(td_col_3);
            t_row.appendChild(td_col_4);
            t_row.appendChild(td_col_5);
            t_row.appendChild(td_col_6);
            t_row.appendChild(td_col_7);
            mainTable.appendChild(t_row);

        });

  


        main.appendChild(mainTable);
        ButtonsContoller(previous, next ,NextPagePeople , PreviousPagePeople);


} );



function PreviousPagePeople()
{
    pageCount--;
    Request(previousUrl, ShowePeople)
}

function NextPagePeople()
{
    pageCount++;
    Request(nextUrl, ShowePeople)
}

ShowPlanet =( ({results , previous , next}) =>{
    console.log(results);
 
    const header_tr_table = document.createElement("tr");
    const th_image = document.createElement("th");
    th_image.innerHTML=`Image`
    const th_table_Name = document.createElement("th");
    th_table_Name.innerText=`Name`;
    const th_table_population = document.createElement("th");
    th_table_population.innerText=`Population`;
    const th_table_rotation_period = document.createElement("th");
    th_table_rotation_period.innerText=`Rotation period`;
    const th_table_orbital_period = document.createElement("th");
    th_table_orbital_period.innerText=`Orbital period`;
    const th_table_diameter = document.createElement("th");
    th_table_diameter.innerText=`Diameter`;
    const th_table_climate = document.createElement("th");
    th_table_climate.innerText=`Climate`;
    const th_table_gravity = document.createElement("th");
    th_table_gravity.innerText=`Gravity`;

    header_tr_table.appendChild(th_image);
    header_tr_table.appendChild(th_table_Name);
    header_tr_table.appendChild(th_table_population);
    header_tr_table.appendChild(th_table_diameter);
    header_tr_table.appendChild(th_table_gravity);
    header_tr_table.appendChild(th_table_climate);
    header_tr_table.appendChild(th_table_rotation_period);
    header_tr_table.appendChild(th_table_orbital_period);
    mainTable.appendChild(header_tr_table);
     let indexImage=0;
        results.forEach((element, index ) => {
            const t_row = document.createElement("tr");

            const td_col_image = document.createElement("td")
            const img = document.createElement("img");
            img.setAttribute("class","image");

            indexImage = (pageCount*10+(index+1)); // здвиг на сайті завантаження
            fetch(URL_Images+"planets/"+indexImage+".jpg")
            .then(result=>{
               img.setAttribute("src",`${result.url}`); 
                }).catch(err =>  {console.log(err);});

            img.setAttribute("alt","Planets image");
            td_col_image.appendChild(img);


            const td_col_1 = document.createElement("td");
            td_col_1.innerText=`${element.name}`;

            const td_col_2 = document.createElement("td");
            td_col_2.innerText=`${element.population}`;

            const td_col_3 = document.createElement("td");
            td_col_3.innerText=`${element.diameter}`;

            const td_col_4 = document.createElement("td");
            td_col_4.innerText=`${element.gravity}`;

            const td_col_5 = document.createElement("td");
            td_col_5.innerText=`${element.climate}`;

            const td_col_6 = document.createElement("td");
            td_col_6.innerText=`${element.rotation_period}`;

            const td_col_7 = document.createElement("td");
            td_col_7.innerText=`${element.orbital_period}`;

            t_row.appendChild(td_col_image);
            t_row.appendChild(td_col_1);
            t_row.appendChild(td_col_2);
            t_row.appendChild(td_col_3);
            t_row.appendChild(td_col_4);
            t_row.appendChild(td_col_5);
            t_row.appendChild(td_col_6);
            t_row.appendChild(td_col_7);
            mainTable.appendChild(t_row);
        });
        
        
        main.appendChild(mainTable);
        ButtonsContoller(previous, next ,NextPagePlanete , PreviousPagePlanete);


} );

function PreviousPagePlanete()
{
    pageCount--;
    Request(previousUrl, ShowPlanet)
}

function NextPagePlanete()
{
    pageCount++;
    Request(nextUrl, ShowPlanet)
}

ShowStarships =( ({results , previous , next}) =>{
    console.log(results);

    const header_tr_table = document.createElement("tr");
    const th_image = document.createElement("th");
    th_image.innerHTML=`Image`
    const th_table_Name = document.createElement("th");
    th_table_Name.innerText=`Name`;
    const th_table_model = document.createElement("th");
    th_table_model.innerText=`Model`;
    const th_table_manufacturer = document.createElement("th");
    th_table_manufacturer.innerText=`Manufacturer`;
    const th_table_passengers = document.createElement("th");
    th_table_passengers.innerText=`Passengers`;
    const th_table_length = document.createElement("th");
    th_table_length.innerText=`Length`;
    const th_table_starship_class = document.createElement("th");
    th_table_starship_class.innerText=`Starship class`;
    const th_table_max_atmosphering_speed = document.createElement("th");
    th_table_max_atmosphering_speed.innerText=`Speed`;

    header_tr_table.appendChild(th_table_Name);
    header_tr_table.appendChild(th_image);
    header_tr_table.appendChild(th_table_model);
    header_tr_table.appendChild(th_table_starship_class);
    header_tr_table.appendChild(th_table_manufacturer);
    header_tr_table.appendChild(th_table_passengers);
    header_tr_table.appendChild(th_table_length);
    header_tr_table.appendChild(th_table_max_atmosphering_speed);
    mainTable.appendChild(header_tr_table);

    let indexImage=0;
    results.forEach((element, index ) => {
        const t_row = document.createElement("tr");

        const td_col_image = document.createElement("td")
        const img = document.createElement("img");
        img.setAttribute("class","image");

        indexImage = (pageCount*10+(index+1)); // здвиг на сайті завантаження
         fetch(URL_Images+"starships/"+indexImage+".jpg")
         .then(result=>{
                img.setAttribute("src",`${result.url}`); 
            })
            .catch(err =>  {console.log(err);});

        img.setAttribute("alt","Planets image");
        td_col_image.appendChild(img);

            const td_col_1 = document.createElement("td");
            td_col_1.innerText=`${element.name}`;

            const td_col_2 = document.createElement("td");
            td_col_2.innerText=`${element.model}`;

            const td_col_3 = document.createElement("td");
            td_col_3.innerText=`${element.starship_class}`;

            const td_col_4 = document.createElement("td");
            td_col_4.innerText=`${element.manufacturer}`;

            const td_col_5 = document.createElement("td");
            td_col_5.innerText=`${element.passengers}`;

            const td_col_6 = document.createElement("td");
            td_col_6.innerText=`${element.length}`;

            const td_col_7 = document.createElement("td");
            td_col_7.innerText=`${element.max_atmosphering_speed}`;
  
            t_row.appendChild(td_col_image);
            t_row.appendChild(td_col_1);
            t_row.appendChild(td_col_2);
            t_row.appendChild(td_col_3);
            t_row.appendChild(td_col_4);
            t_row.appendChild(td_col_5);
            t_row.appendChild(td_col_6);
            t_row.appendChild(td_col_7);
            mainTable.appendChild(t_row);

        });
       
        main.appendChild(mainTable);
        ButtonsContoller(previous, next ,NextPageStarships , PreviousPageStarships);
} );

function PreviousPageStarships()
{
    pageCount--;
    Request(previousUrl, ShowStarships)
}

function NextPageStarships()
{
    pageCount++;
    Request(nextUrl, ShowStarships)
}

   
function  clearTable(buttonsContainer)
{
    var first = mainTable.firstElementChild;
        while (first) {
            first.remove();
            first = mainTable.firstElementChild;
        }

        var secontFirst = buttonsContainer.firstElementChild;
        while (secontFirst) {
            secontFirst.remove();
            secontFirst = buttonsContainer.firstElementChild;
        }
}



function ButtonsContoller(previous , next, CallbackNext , CallbackPev)
{     
       const prevBtn = document.createElement("button");
    prevBtn.setAttribute("class" , "btn btn-secondary my-2 my-sm-0");
    prevBtn.innerHTML = "Prev";
    const nextBtn = document.createElement("button");
    nextBtn.setAttribute("class" , "btn btn-secondary my-2 my-sm-0");
    nextBtn.innerHTML = "Next";

    if(previous === null)
    {
     prevBtn.setAttribute("disabled" , "disabled");
     previousUrl=null;
    }
    else
    {
     previousUrl = previous;
     prevBtn.removeAttribute("disabled" , "disabled");
     prevBtn.addEventListener("click",CallbackPev);
    }

    if(next === null)
    {
     nextBtn.setAttribute("disabled" , "disabled");
     nextUrl = null;
    }
    else
    {
     nextUrl = next;
     nextBtn.removeAttribute("disabled" , "disabled");
     nextBtn.addEventListener("click",CallbackNext);
    }



    wrapperBtn.appendChild(prevBtn);
    wrapperBtn.appendChild(nextBtn);
}
