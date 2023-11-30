document.addEventListener("DOMContentLoaded", function () {
  let pets = JSON.parse(localStorage.getItem("pets")) || [];

  function Pet(name, age, gender, service, breed) {}
  function registerPet() {
    const inputName = document.getElementById("txtName").value;
    const inputAge = document.getElementById("txtAge").value;
    const inputGender = document.getElementById("txtGender").value;
    const inputService = document.getElementById("txtService").value;
    const inputBreed = document.getElementById("txtBreed").value;
    const inputType = document.getElementById("selectType").value;

    const newPet = {
      name: inputName,
      age: inputAge,
      gender: inputGender,
      service: inputService,
      breed: inputBreed,
      type: inputType,
    };

    pets.push(newPet);
    localStorage.setItem("pets", JSON.stringify(pets));

    // Call the function to display the updated list of pets in the table
    displayRegisteredPets();

    document.getElementById("petForm").reset();
  }

  document.getElementById("buttonPet").addEventListener("click", function () {
    registerPet();
  });

  // Display the pets when the page loads
  displayRegisteredPets();
});
