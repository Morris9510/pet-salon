//waits for content to load
document.addEventListener("DOMContentLoaded", function () {
  //makes a local storage to store my pets array
  let pets = JSON.parse(localStorage.getItem("pets")) || [];
  // only run the following functions if we are on the index page
  if (
    window.location.pathname === "/index.html" ||
    window.location.pathname === "/"
  ) {
    // function to have pet count and names displayed
    function displayPetCount() {
      const countPets = document.getElementById("count");
      if (countPets) {
        countPets.textContent = pets.length;
      }
    }

    function displayPetNames() {
      const petListElement = document.getElementById("petList");
      petListElement.innerHTML = "";
      // Loop through each pet to display the name
      for (let i = 0; i < pets.length; i++) {
        const li = document.createElement("li");
        li.textContent = pets[i].name;
        petListElement.appendChild(li);
      }
    }
    displayPetCount();
    displayPetNames();
  }

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

    // log to the console that i registered their pet then display the values of the new pet
    console.log("Pet registered:", newPet);
    // log the new array to the console
    console.log(pets);
  }

  // acts like an onclick when I click the button it'll do the register pet function
  document.getElementById("buttonPet").addEventListener("click", function () {
    registerPet();
  });
});
