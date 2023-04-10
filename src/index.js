let destinations = [
  {
    name: "Tokyo",
    location: "Japan",
    date: 23 - 12 - 1999,
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
    comments: "This is was a great trip",
  },
];

function fillCardContainer() {
  const cardContainer = document.querySelector(".cardContainer");

  cardContainer.innerHTML = "";
  for (let i = 0; i < destinations.length; i++) {
    const newCard = `
            <div class="card">
                <img src="${destinations[i].image}">
                <h2>${destinations[i].name}</h2>
                <h3>${destinations[i].location}</h3>
                <h3>${destinations[i].date}</h3>
                <h3>${destinations[i].image}</h3>
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
  // if nothing was ever saved to LocalStorage don't replace with an empty Array
  // keep the default 2 people, added at the top
  if (myJsonString) {
    console.log("loadingTwo");
    destinations = JSON.parse(myJsonString);
  }
}

console.log("lalala");
//window.location.href = "index.html";
loadFromLocalStorage();
fillCardContainer();
