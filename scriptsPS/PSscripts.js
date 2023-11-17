//waits for content to load
document.addEventListener("DOMContentLoaded", function () {
  //makes a local storage to store my pets array
  let pets = JSON.parse(localStorage.getItem("pets")) || [];
  //function to display number of pets
  function displayPetCount() {
    const countPets = document.getElementById("count");
    countPets.textContent = pets.length;
  }
  //function to display names of pets
  function displayPetNames() {
    const petListElement = document.getElementById("petList");
    petListElement.innerHTML = "";
    // loop through each pet create a list element in my html to display the name
    for (let i = 0; i < pets.length; i++) {
      //create a list element in my index page to display the name
      const li = document.createElement("li");
      // changes the list text content to the pets name
      li.textContent = pets[i].name;
      //adds the pet name to the list of pets
      petListElement.appendChild(li);
    }
  }

  // display count and pet names
  displayPetCount();
  displayPetNames();
  // constructor for my pet object
  function Pet(name, age, gender, service, breed, type) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.service = service;
    this.breed = breed;
    this.type = type;
  }
  // register pet function
  function registerPet() {
    // input values from user
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputType = document.getElementById("selectType").value;
    // create new pet object with input
    let newPet = new Pet(
      inputName,
      inputAge,
      inputGender,
      inputService,
      inputBreed,
      inputType
    );
    // add the new pet registered to array of registered pets
    pets.push(newPet);
    localStorage.setItem("pets", JSON.stringify(pets)); // Store registered pets in my  localStorage

    // gets the new count and pet names
    displayPetCount();
    displayPetNames();
    // log to the console that i registered their pet then display the values of the new pet
    console.log("Pet registered:", newPet);
    // log the new array to the console
    console.log(pets);
  }
  //acts like an onclick when i click the button it'll do the register pet function
  document.getElementById("buttonPet").addEventListener("click", function () {
    registerPet();
  });
});
