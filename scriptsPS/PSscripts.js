// Create the pets Array and list the properties for each Pet

let pets = [
  {
    name: "Snowfall",
    age: 9,
    gender: "Female",
    service: "deaf people",
    breed: "German Shepherd",
  },
  {
    name: "FranklinJr",
    age: 5,
    gender: "male",
    service: "blind and deaf people",
    breed: "German Shepherd",
  },
  {
    name: "Franklin",
    age: 2,
    gender: "male",
    service: "Blind people",
    breed: "German Shepherd",
  },
];

// Function to display the  # of pets in the HTML header and then code to count the number of pets
function displayPetCount() {
  const countPets = document.getElementById("count");
  countPets.textContent = pets.length;
}

// Function to display pet names in the HTML using a for loop
function displayPetNames() {
  const petListElement = document.getElementById("petList");
  petListElement.innerHTML = ""; // makes petlist refresh for new names to be added if needed

  for (let i = 0; i < pets.length; i++) {
    //loops through pets array by increments of one
    const li = document.createElement("li"); // creates a new list element for each pet name
    li.textContent = pets[i].name; // Access pet names using pets[i].name
    petListElement.appendChild(li); //adds the pet names to the html list
  }
}

// Call functions to display count and pet names
displayPetCount();
displayPetNames();
