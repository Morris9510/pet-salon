document.addEventListener("DOMContentLoaded", function () {
  let pets = JSON.parse(localStorage.getItem("pets")) || [];

  function displayRegisteredPets() {
    const petTableBody = document.getElementById("petTableBody");
    petTableBody.innerHTML = ""; // Clear previous table content

    for (let i = 0; i < pets.length; i++) {
      const pet = pets[i];
      const row = document.createElement("tr");

      // Create cells for each attribute
      const cells = ["name", "age", "gender", "service", "breed", "type"];
      cells.forEach((attribute) => {
        const cell = document.createElement("td");
        cell.textContent = pet[attribute];
        row.appendChild(cell);
      });

      // Create a cell for delete button
      let deleteCell = document.createElement("td");
      let deleteButton = document.createElement("button");
      deleteButton.textContent = `Delete ${pet.name}`;
      deleteButton.onclick = function () {
        deletePet(i); // Call delete function with index of the pet
      };
      deleteCell.appendChild(deleteButton);
      row.appendChild(deleteCell);

      // Add the row to the table body
      petTableBody.appendChild(row);
    }
  }

  function deletePet(index) {
    pets.splice(index, 1); // Remove the pet at the specified index
    localStorage.setItem("pets", JSON.stringify(pets)); // Update local storage
    displayRegisteredPets(); // Refresh displayed pets
  }

  // Call the function to display registered pets when the page loads
  displayRegisteredPets();
});
