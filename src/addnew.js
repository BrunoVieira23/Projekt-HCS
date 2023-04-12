const nameText = document.getElementById("name");
const locationInput = document.getElementById("location");
const date = document.getElementById("date");
const imageSrc = document.getElementById("picture");
const comments = document.getElementById("comments");
const addButton = document.getElementById("addButton");

let destinations = [
  {
    name: "Tokyo",
    location: "Japan",
    date: "23-12-1999",
    image:
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
    comments: "This was a great trip",
  },
];

addButton.addEventListener("click", function () {
  const newDestination = {
    name: nameText.value,
    location: locationInput.value,
    date: date.value,
    image: imageSrc.value,
    comments: comments.value,
  };

  destinations.push(newDestination);

  saveToLocalStorage();

  fillCardContainer();

  alert("weeeeeee");
});

function fillCardContainer() {
  const cardContainer = document.querySelector(".cardContainer");

  cardContainer.innerHTML = "";
  for (let i = 0; i < destinations.length; i++) {
    const newCard = `
            <div class="card">
                <img src="${destinations[i].image}">
                <h2>${destinations[i].name}</p>
                <p>${destinations[i].location}</p>
                <p>${destinations[i].date}</p>
                <p>${destinations[i].comments}</p>
            </div>`;
    cardContainer.innerHTML += newCard;
  }
}

function saveToLocalStorage() {
  const myJsonString = JSON.stringify(destinations);
  localStorage.setItem("destinations", myJsonString);
}

function loadFromLocalStorage() {
  console.log("loadingOne");
  const myJsonString = localStorage.getItem("destinations");
  if (myJsonString) {
    console.log("loadingTwo");
    destinations = JSON.parse(myJsonString);
  }
}

console.log("lalala");
loadFromLocalStorage();
fillCardContainer();
