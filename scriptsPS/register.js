document.addEventListener("DOMContentLoaded", function () {
  let pets = JSON.parse(localStorage.getItem("pets")) || [];

  function Pet(name, age, gender, service, breed, type) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.service = service;
    this.breed = breed;
    this.type = type;
  }

  function isValid(aPet) {
    let validation = true;
    if (aPet.name === "") {
      validation = false;
      document.getElementById("txtName").classList.add("error");
    } else {
      document.getElementById("txtName").classList.remove("error");
    }
    if (aPet.age === "") {
      validation = false;
      document.getElementById("txtAge").classList.add("error");
    } else {
      document.getElementById("txtAge").classList.remove("error");
    }
    return validation;
  }

  function registerPet() {
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputType = document.getElementById("selectType").value;

    let newPet = new Pet(
      inputName,
      inputAge,
      inputGender,
      inputService,
      inputBreed,
      inputType
    );

    if (isValid(newPet)) {
      pets.push(newPet);
      localStorage.setItem("pets", JSON.stringify(pets));
      displayRegisteredPets();
      document.getElementById("petForm").reset();
    }
  }

  document.getElementById("buttonPet").addEventListener("click", function () {
    registerPet();
  });
});
