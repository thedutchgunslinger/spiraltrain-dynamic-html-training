// const name = 'Noah';
// const lastName = 'Beij'
// console.log(`Hello ${name} ${lastName}!`);

// string, boolean, null, nan, undifined, object, array, number

// let age = 100;

// age = "asjdkfjaskldfj";

// console.log(age);

// const teachers = ["noah", "Lina", "Krist", "Joris"]
// const index = 1;
// console.log(teachers[index]);

// teachers.push("Armando");
// console.log(teachers);

// teachers[4] = "Esmee";

// console.log(teachers);

// teachers[5] = "Armando";

// console.log(teachers);

// const Armando = teachers.findIndex(function getTeacher(teacher){
//     return teacher === "Armando";
// })

// console.log(Armando, teachers[Armando]);

// const person = {
//     name: "Noah",
//     age: "22",
//     hair: "pink",
//     eyes: "brown",
//     birthday: "27-10-2000"
// }

// console.log(person.name);

// person.name = "Lina";

// console.log(`Hello my name is ${person.name} and I am ${person.age} years old. I have ${person.hair} hair and ${person.eyes} eyes. My birthday is on ${person.birthday}`)

// function nameOfFunction(person) {

//     return  `Hello my name is ${person.name} and I am ${person.age} years old. I have ${person.hair} hair and ${person.eyes} eyes. My birthday is on ${person.birthday}`

// }

// const personSentence = nameOfFunction(person);
// console.log(personSentence);

// const myFunc = name => `Hello ${name}`;

// console.log(myFunc("Noah"));

// setTimeout(() => {
//     const titleEl = document.getElementById("title");

//     console.log(titleEl);

//     titleEl.innerText = "our new text!";
//     titleEl.style.visibility = "hidden";
// }, 3000);

// input email, password (optionle make password toggle the visibility)
// if login success hide login screen, show content.
// if not success show user that login failed.

// const toggleModalBtn = document.getElementById("toggleModal");
// const modalEl = document.querySelector("#modal");

// toggleModalBtn.addEventListener("click", () => {
//     modalEl.classList.toggle("hidden");
// });

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const itemInput = document.querySelector('#itemInput');
// const itemBtn = document.querySelector('#itemBtn');
// const itemContainer = document.querySelector('#itemContainer');

// const items = [];

// itemBtn.addEventListener('click', () => {
//     const userInput = itemInput.value;
//     items.push(userInput);

//     const itemEl = document.createElement('p')
//     itemEl.innerText = userInput;

//     itemContainer.appendChild(itemEl);
//     itemInput.value = "";
//     console.log(items)

//     switch(userInput){
//         case "error":
//             itemEl.style.color = "red";
//             break;
//         case "success":
//             itemEl.style.color = "green";
//             break;
//         case "warning":
//             itemEl.style.color = "orange";
//             break;
//         case "noah":
//             itemEl.style.color = "hotpink";
//             break;
//         default:
//             itemEl.style.color = "blue";
//             break;
//     }
// });

// const testItem = true ? "adsfa" : "sfsdf";
// console.log(testItem)

// const testText = null;

// const testItem2 = testText || "sadf";

// console.log(testItem2)

// function sayHello(name){
//     return `hello ${name}`
// }

// console.log(sayHello())

// if(condition == condition2){
//     // do something
// } else if ( condition == condition2) {
//     // do something else
// } else {
//     // something else
// }

// const string = "Spiral@train.com";

// console.log(string.toUpperCase())

// ============================================================
//  api fetching
// ============================================================
setTimeout(() => {
    let dataIsReady = false;

const url = `https://assets.nbeij.nl/json/efteling.json`;

const attractions = getData(url);

attractions.then((data) => {
  data.AttractionInfo.forEach((attraction) => {
    // console.log(attraction.WaitingTime);
    addAttractionToHtml(
      attraction.Name,
      attraction.Type,
      attraction.Empire,
      attraction.State,
      attraction.WaitingTime,
      attraction.Id
    );
  });
});

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function addAttractionToHtml(name, type, empire, state, waitingTime, id) {
  const template = document.querySelector("template");

  const clone = template.content.cloneNode(true);

  clone.querySelector("div").setAttribute("id", id);

  clone.querySelector("h2").innerText = `Attracition name: ${name}`;
  clone.querySelector(".type").innerText = `type: ${type}`;
  clone.querySelector(".empire").innerText = `located in ${empire}`;
  clone.querySelector(".state").innerText = `currently its ${state}`;

  if (waitingTime != undefined) {
    const waitingTimeEl = document.createElement("p");
    const div = clone.querySelector("div");
    waitingTimeEl.innerText = `current waiting time is ${waitingTime} minutes`;
    if (waitingTime > 30) {
      div.style.backgroundColor = "red";
    } else if (waitingTime > 15) {
      div.style.backgroundColor = "orange";
    } else if (waitingTime > 5) {
      div.style.backgroundColor = "yellow";
    } else {
      div.style.backgroundColor = "green";
    }

    div.appendChild(waitingTimeEl);
  }

  if (state == "gesloten") {
    clone.querySelector("div").style.border = "red solid 5px";
  } else if (state == "open") {
    clone.querySelector("div").style.border = "green solid 5px";
  } else {
    clone.querySelector("div").style.border = "grey solid 5px";
  }

  clone.querySelector("div").addEventListener("dblclick", () => {
    document.querySelector(`#${id}`).remove();
  });

  document.querySelector("#container").appendChild(clone);
}

}, 3000);


document.addEventListener("mousemove", (evt) => {
    const x = evt.clientX;
    const y = evt.clientY;
    
    if(x > window.innerWidth / 2){
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "blue";
    }
});